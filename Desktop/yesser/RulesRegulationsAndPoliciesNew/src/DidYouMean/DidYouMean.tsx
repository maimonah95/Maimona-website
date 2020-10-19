import React from "react";
import ArrayHelper from "../Helpers/ArrayHelper";
import SearchConfig from "../Helpers/Config";
// import  from "../Helpers/Config"

interface DidYouMeanState {
    showDidYouMean:boolean
}

interface DidYouMeanProps {
    onClickDidYouMean: any,
    didYouMean: any
}


export default class Spellcheck extends React.Component<DidYouMeanProps, DidYouMeanState>{

     state = {
        showDidYouMean:true,
        didYouMean:[]
     }
 
     handleDidYouMean = () => {
        this.props.onClickDidYouMean()
        this.setState({showDidYouMean: false})
     }

    render() {
        const { didYouMean } = this.props

        
        return <div>
            
            <p style={{fontSize:17}} >
                    <i><strong className="text-red" > {SearchConfig.getLanguage("DidYouMean")}:</strong> </i>
                    <a onClick={this.handleDidYouMean}>{didYouMean.join(" ")}</a>
                </p>
            
        </div>
    }
}