import React from 'react';
import Dotdotdot from 'react-dotdotdot'
import SearchConfig from '../Helpers/Config';

const path = require('path')

interface SearchResultItemInputProps {
    resultItem: any;
}

export default class SearchResultItem extends React.Component<SearchResultItemInputProps> {

    //TODO: Its better to be fix from back-end
    decoded = (word: string) => {

        if (word)
            return word.replace(/&quot;/g, '"')
                .replace(/&amp;/g, "&")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&apos;/g, "'")
                .replace(/&#39;/g, "'")
                .replace(/&rsquo;/g, "’")
                .replace(/&sbquo;/g, "’")
                .replace(/&nbsp;/g, " ")
                .replace(/&laquo;/g, "«")
                .replace(/&raquo;/g, "»");

        return word;
    }

    openUrl = (url: string) => {
        try {
            if (path.isAbsolute(url)) {
                window.location.href = url
            } else {
                window.open(url, '_blank');
            }
        } catch (error) {
            console.log('error', error)
        }

    }

    render() {
        const { service_url, law_doc_url, service_name, description, content_type, lawId,
            rulesRegulationTopic, rulesRegulationType,
            law_issue_date, datetimePublished, law_issue_date_hijri, law_publish_date_hijri, law_status } = this.props.resultItem
        //datetimePublished = law_issue_date

        return <div className="card">
            <div className="card-body">
                <p className="card-title mb-0">
                    {path.isAbsolute(service_url)
                        ? <a className="mr-3" href={service_url}>{service_name}</a>
                        : <a className="mr-3" href={service_url} target="_black">{service_name}</a>
                    }
                    
                    <span className="badge badge-agency m-1 cursorPointer" onClick={() => this.openUrl(law_doc_url)}>
                        <i className="fa fa-file-o" />
                    </span>
                    <span className="badge badge-agency m-1"> {this.decoded(rulesRegulationType)} </span>

                </p>
                <p className="card-text">{rulesRegulationTopic}</p>

                <Dotdotdot clamp={2} className={"card-text mb-0 font-weight-bold"} tagName={"p"} >
                    {description}
                </Dotdotdot>


                <div className="mt-1">
                    <span className="card-text">
                        <strong>
                            {SearchConfig.getLanguage("lawPublishDate") + ": "}
                            {SearchConfig.pageLanguage === 'en'
                                ? datetimePublished
                                : law_publish_date_hijri
                            }
                        </strong>
                    </span>

                </div>
                {/* TODO: adding other fields */}
            </div>

        </div>

    }
}