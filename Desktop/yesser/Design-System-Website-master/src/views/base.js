// this is the base layout page for styles, components and about us pages.
// contains the accordion on the 

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavigation from '../scss/components/side-navigation';


function Base(){
    return (
        <div>
            <SideNavigation />
        </div>
    );

}


export default Base;