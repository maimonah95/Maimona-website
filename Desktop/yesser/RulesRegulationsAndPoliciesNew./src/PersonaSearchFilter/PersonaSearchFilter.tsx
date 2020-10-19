import React from 'react';
import SearchConfig from '../Helpers/Config';


interface PersonaSearchFilterInputProps {
    title: String,
    searchResult: any,
    //params:any,
    facet_Name:string,
    facet_fields: string[],
    onFilterChanged:any,
    filterCount: number
}

interface PersonaSearchFilterInputState{
    selectedFilterItems: string[]
}

export default class PersonaSearchFilter extends React.Component<PersonaSearchFilterInputProps,PersonaSearchFilterInputState> {

    chunk = (array:any[], size:number) => {
        const chunked_arr = [];
        let index = 0;
        while (index < array.length) {
          chunked_arr.push(array.slice(index, size + index));
          index += size;
        }
        return chunked_arr;
    }

    render() {

        let searchFilterList = this.chunk(this.props.facet_fields,2).map((filter:any, index:number) => {
               
                //filter.
                return (
                    <FilterItem
                    key = {index}
                    Id = {index}
                    filterItemName = {filter[0]}
                    filterValue = {filter[1]}
                    facet_Name = {this.props.facet_Name}
                    onFilterChanged = {this.props.onFilterChanged}
                    isSelected = {false}/>
                    );
            });
                
            
        return (
            <div className="accordion filter-accordion" role="tablist"
                aria-multiselectable="true">
                    <input type="checkbox" name="vehicle1" value="Bike" />
                <div className="card">
                    <div className="card-header" role="tab" id="headingOne1">
                        <a className="collapsed" data-toggle="collapse"
                            data-parent="" href={"#"+this.props.facet_Name}
                            aria-expanded="false" aria-controls={"#"+this.props.facet_Name}>
                            <h3 className="title-collapsible">
                                {this.props.title}
                                <i className="fa fa-angle-down rotate-icon"></i>
                                <div className="br-section-text">
                                    <small className="number">{this.props.filterCount}</small>
                                    <small> {SearchConfig.getLanguage("selected")}</small>
                                </div>
                            </h3>
                        </a>
                    </div>
                    <div id={this.props.facet_Name} className="collapse" role="tabpanel"
                        aria-labelledby="headingOne1" data-parent="">
                        <div className="card-body">
                            {/* <div className="filter-searchbox">
                                <input className="form-control"
                                    placeholder="Search" />
                            </div> */}
                            <div className="filter-checkboxes">
                                {searchFilterList}
                            </div>
                            {/* {this.props.facet_fields.length === 0 ?
                            <div className="no-filters">
                                <p className="text-center">No Filter Found</p>
                            </div> : null } */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

interface SearchFilterItemInputProps {
    Id: any,
    facet_Name : string
    filterItemName: String,
    onFilterChanged: any,
    isSelected:boolean,
    filterValue:string
}

class FilterItem extends React.Component<SearchFilterItemInputProps> {
    render() {
        return (
            <div className="custom-control custom-checkbox">           
                <input type="checkbox"
                    //checked = {this.props.isSelected}
                    className="custom-control-input" id={this.props.Id + this.props.filterItemName}
                    name="grp1" onChange={this.props.onFilterChanged} value={`${this.props.facet_Name}:${this.props.filterValue}`}  />
                <label className="custom-control-label"  htmlFor={this.props.Id + this.props.filterItemName}>{this.props.filterItemName}</label>
            </div>
        );
    }
}