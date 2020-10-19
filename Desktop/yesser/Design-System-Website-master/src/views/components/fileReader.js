
import React from 'react';
import raw from "raw.macro";


function fileReader(filePath){
    const markdown = raw(filePath);
    console.log(markdown)
}


export default fileReader;
