import React from 'react';
import SearchConfig from '../Helpers/Config';

interface ISearchInputProps {
    search:Function;
    changed: any;
    searchTerm:string;
}

interface ISearchInputState {

}

export default class SearchInput extends React.Component<ISearchInputProps,ISearchInputState> {
    
    enterKeyPressHandler = (event :any) => {
        if(event.key === 'Enter'){
            
            this.props.search();
        }
    }

    private preventXSS = (k:string) => {
        if (k)
            return k.replace(/[^a-z \u0621-\u064A 0-9.,?&""]/gi , '');
        return k;
    }

    render() {
        return (
            <div className="Search-group input-group">
                <input type="text" 
                       maxLength = {300}
                       className="form-control" 
                       placeholder={SearchConfig.getLanguage("search")} 
                       aria-label="Recipient's username" 
                       aria-describedby="basic-addon2" 
                       onChange={this.props.changed}
                       onKeyPress={this.enterKeyPressHandler}
                       value={this.preventXSS(this.props.searchTerm as string)} />
                <div className="input-group-append">
                  <button className="btn no-waves" type="button" onClick={() => this.props.search()}><i className="fa fa-search"></i></button>
                </div> 
            </div>
        );
    }
}