export default class SearchConfig {
    static pageLanguage = (window as any)["searchConfig"]["language"] !== null? (window as any)["searchConfig"]["language"] : "en";
    static solrUrl = (process.env.NODE_ENV === "development") ? (window as any)["searchConfig"]["solrUrl"] : window.location.origin;
    
    static Resources : any = {

        ResourcesAr:{
            resultFound:"عدد نتائج البحث",
            SearchResultsFor:"بحث",
            CLEARALL:'إزالة الكل',
            FilterBy:'مصنف بواسطة',
            ServiceCategory:'تصنيف الخدمة',
            Persona:'فئة المستفيد',
            ServiceProvider:'مقدم الخدمة',
            search:'بحث',
            selected:'محدد',
            contentType:'المحتوى',
            personaFacetList: ['مواطن','Citizen','مقيم','Expat','أعمال','Businesssector','زائر','Visitors'],
            filter:'تصفية',
            SearchLimitWordsExceeded: 'تم تجاهل "first word after 20 words" (و الكلمات لاحقة) لأن البحث محصور في 20 كلمة.',
            DidYouMean:'هل تعني',
            service:'خدمة',

            //boe translate
            pageTitle:"الأنظمة واللوائح والسياسات",
            ResetFilters:'إعادة تعيين المرشحات',
            Filters:'المرشحات',
            Type:'النوع',
            Categories:'الفئات',
            SorryNoResultFound:'معذرة، لا توجد نتائج.',
            lawPublishDate:'تاريخ نشر القانون',
            
        },

        ResourcesEn:{
            resultFound:"Result(s) Found",
            SearchResultsFor:"Search Results For",

            CLEARALL:'CLEAR ALL',
            

           
            FilterBy:'Filter By',

            ServiceCategory:'Service Category',
            Persona:'Persona',
            ServiceProvider:'Service Provider',
            search:'Search',
            selected:'Selected',
            contentType:'Content Type',
            // Key and Value.
            personaFacetList: ['Citizen','Citizen','Expat','Expat','Business','Businesssector','Visitors','Visitors'],

            filter:'Filter',
            SearchLimitWordsExceeded: '"first word after 20 words" (and any subsequent words) was ignored because the search queries is limited to 20 words.',
            DidYouMean:'Did you mean',
            service:'service',

            //boe translate
            pageTitle:"Rules, Regulations and Policies",
            ResetFilters:"Reset Filters",
            Categories:'Categories',
            Type:'Type',
            Filters:'FILTERS',
            SorryNoResultFound:'Sorry, no result found',
            lawPublishDate:'Law Publish Date',
            
            
        }
    }
    
     
    static getLanguage = (keyword : string) : any => {
        try {
            if(SearchConfig.pageLanguage === "en"){
                return (SearchConfig.Resources.ResourcesEn[keyword]);
            }else{
                return SearchConfig.Resources.ResourcesAr[keyword];
            } 
        } catch (error) {
            console.log("catch error",error);
            return "";
        }
    }
}
