import  {spellcheck}  from "../mocks/solr-spell-Response.json";

export default class SolrQueryBuilder {
    private options:any = {
        origin: null,
        uri: "/solr/",
        lang: "en",
        searchTerm: null,
        service_name: null,
        service_keywords: null,
        description: null,
        service_provider:null,
        service_category:null,
        service_url:null,
        content_type:null,
        persona:null,
        // wt: 'json',
        rows: 18,
        start:0,
        facetField: ["service_category_str"],
        filterQuery:[]as string[],
        boosting:null
    }

    constructor(options:any) {
        this.options.origin = options.origin || this.options.origin;
        this.options.uri = options.uri || this.options.uri;
        this.options.lang = options.lang || this.options.lang;

        //keywords
        this.options.searchTerm = options.searchTerm || this.options.searchTerm
        this.options.service_name = options.service_name || this.options.service_name;
        this.options.service_keywords = options.service_keywords || this.options.service_keywords;
        this.options.description = options.description || this.options.description;
        this.options.service_provider = options.service_provider || this.options.service_provider;
        this.options.service_category = options.service_category || this.options.service_category;
        this.options.service_url = options.service_url || this.options.service_url;
        this.options.content_type = options.content_type || this.options.content_type;
        this.options.datetimePublished = options.datetimePublished || this.options.datetimePublished;
        this.options.datetimeLastModified = options.datetimeLastModified || this.options.datetimeLastModified;
        this.options.newsCategory = options.newsCategory || this.options.newsCategory;
        this.options.persona = options.persona || this.options.persona
        
        this.options.wt = options.wt || this.options.wt;
        this.options.rows = options.rows || this.options.rows;
        this.options.start = options.start || this.options.start;
        this.options.facetField = options.facetField || this.options.facetField;
        this.options.filterQuery = options.filterQuery || this.options.filterQuery;
        this.options.boosting = options.boosting || this.options.boosting;
        // if(process.env.NODE_ENV === "development")
        //     console.log('options',this.options);
    }

    

    getQueryString = () => {
        const query = this.getQuery();
        const wt = this.options.wt;
        const rows = this.options.rows;
        const start = this.options.start;
        return `q=${query}&wt=${wt}&rows=${rows}&start=${start}`;
    }

    getQuery = () => {
        return this.options.searchTerm

        let q:String[] = [];
        if(this.options.service_name)
            q.push(`(service_name:"${this.options.service_name}")`);
        if(this.options.service_keywords)
            q.push(`(service_keywords:${this.options.service_keywords}*)`);
        if(this.options.description)
            q.push(`(description:${this.options.description}*)`);
        if(this.options.service_provider)
            q.push(`(service_provider:${this.options.service_provider}*)`);
        if(this.options.service_category)
            q.push(`(service_category:${this.options.service_category}*)`);
        if(this.options.service_url)
            q.push(`(service_url:${this.options.service_url}*)`);
        if(this.options.content_type)
            q.push(`(content_type:${this.options.content_type}*)`);
        if(this.options.datetimePublished) 
            q.push(`(datetimePublished:${this.options.datetimePublished}*)`);
        if(this.options.datetimeLastModified) 
            q.push(`(datetimeLastModified:${this.options.datetimeLastModified}*)`);
        if(this.options.newsCategory) 
            q.push(`(newsCategory:${this.options.newsCategory}*)`);
        

        return q.join('or');
    }
    // 
    getFacets = (facetLimit:number = -1) => {
        if(this.options.facetField == null) return "";
        //"facet.mincount=0"
        let facets = ["facet=on"];

        this.options.facetField.forEach((fieldName:string) => {
            facets.push(`f.${fieldName}.facet.limit=${facetLimit}`)
            facets.push("facet.field="+fieldName)
        });
        //console.log("[FACETS]","&"+facets.join("&"));
        return  facets.join("&");
    }

    getFacetFields = (facetLimit:number = -1) => {
        if(this.options.facetField == null) return "";
        //"facet.mincount=0"
        let facets:string[] = [];

        this.options.facetField.forEach((fieldName:string) => {
            //facets.push(`f.${fieldName}.facet.limit=${facetLimit}`)
            facets.push("facet.field="+fieldName)
        });
        console.log("[FACETS]",facets);
        return  facets;
    }
    
    getFilterQuery = () => {

        if (this.options.filterQuery == null || this.options.filterQuery.length === 0) return "";
        
        // let filterQuery:string[] = [];
        
        let filterOr = "fq=("+this.options.filterQuery.join(" OR ")+")";
        //console.log('filteror',filterOr)
        return filterOr;
        // this.options.filterQuery.forEach((filterFormat:string) => {
        //     filterQuery.push(`fq=${filterFormat}`);         
        // });
        // //console.log("[filterQuery]","&"+filterQuery.join("&"));
        // return "&"+filterQuery.join("&");
    }

    //get user
    getFullURL = () => {
        let url = "";
        if(this.options.origin) {
            url = this.options.origin;
        }
        if(this.options.uri) {
            url += this.options.uri;
        }
        if(this.options.lang) {
            url += `services_${this.options.lang}`;
        }
        url += "/select";
        //TODO: if the lenght is grater than 256
        url = `${url}?${this.getQueryString()}&${this.getFilterQuery()}&${this.getFacets()}`;
        //console.log("[FULL QUERY]",url)
        return url;
    }

    getSolrJsonQuery = () => {
        console.log("this.getFilterQuery()",this.getFilterQuery())
        let payload = {
            "params":{
                "q": this.getQuery(),
                "start":this.options.start,
                "rows":this.options.rows,
            }
        };

        let payloadFq = {
            "params":{
                "q": this.getQuery(),
                "start":this.options.start,
                "rows":this.options.rows,
                "fq": this.getFilterQuery()
            }
        };
        
        
        return JSON.stringify(this.getFilterQuery() === "" ? payload : payloadFq);
    }

    getBoosting = () => {
        return 
    }

    //get
    public executeQuery = () => {
        return fetch(encodeURI(this.getFullURL()));
    }

    public executePostQuery = () => {
        let url = "";
        if(this.options.origin) {
            url = this.options.origin;
        }
        if(this.options.uri) {
            url += this.options.uri;
        }
        if(this.options.lang) {
            url += `services_${this.options.lang}`;
        }

        return fetch(url + "/rules",{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            // redirect: 'follow', // manual, *follow, error
            // referrer: 'no-referrer', // no-referrer, *client
            body: this.getSolrJsonQuery(), // body data type must match "Content-Type" header
        });
    }

  
    public excuteSpellCheckQueryMock = () => {

        return spellcheck
    }

    public executeSpellCheckerQuery = (word:string = this.options.searchTerm) => {
        let url = "";
        if(this.options.origin) 
            url = this.options.origin;
    
        if(this.options.uri) 
            url += this.options.uri;

        if(this.options.lang) 
            url += `services_${this.options.lang}`;
        
        url += "/spell?spellcheck.q="
        return fetch(url + word)   
    }



}