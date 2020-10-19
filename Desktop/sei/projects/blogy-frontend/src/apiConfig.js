let apiURL;

const expressPort = 5000;
const apiURLs = {
    development :`http://localhost:${expressPort}/api`,
    production: `https://aqueous-atoll-85096.herokuapp.com/api`,
}

if (window.location.hostname === 'localhost'){
    apiURL = apiURLs.development;
}else{
    apiURL = apiURLs.production;
}

export default apiURL;