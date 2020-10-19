
import React from 'react';

export default class Breadcrumb extends React.Component {
    render() {
        return (
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#" title="title link">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page"><a href="">Component</a> / Images</li>
                </ol>
            </nav>
        ) 
    }
} 





