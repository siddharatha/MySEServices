# Getting Started
- [Overview](#Overview)
- [Authentication](#Authentication)
- [Product Information](#Product-Information)
- [Using this repository](#Using-this-repository)
- [Date management](#Date-management)

Lets walkthrough the core API concepts as we tackle the use cases.

# Overview

The API aims to provide services to get the stock information of a product.

We will provide code samples in nodejs and javascript for web. 

# Authentication

The Authentication is done via Oauth2 protocol .
 - We provide you with a ```client_id``` and ```client_secret```.
 - Please contact your SE contact person to make sure you have this information.
- [Refer to API Spec](https://.....)

<p data-height="454" data-theme-id="light" data-slug-hash="gKeqgL" data-default-tab="js,result" data-user="siddharathan" data-embed-version="2" data-pen-title="Authenticate to MySE" class="codepen">See the Pen <a href="https://codepen.io/siddharathan/pen/gKeqgL/">Authenticate to MySE</a> by siddharatha nagavarapu (<a href="https://codepen.io/siddharathan">@siddharathan</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

# Product-Information

Most applications will use an existing wrapper library in the language of your choice. We propose a nodejs implementation, this can be converted to your front-end application easily.

Using the library provided in this repository , you can get the product information with the below few lines

Complete code [here](https://github.com/siddharatha/MySEServices/blob/master/getInfoFromMySEAPI.js)

``` js
        (async function () {
    try {
        alltestdata = await generateTestdata('./config/testdata.json');
        const { token, api_endpoint } = await apiConnection('./config/credentials.json');
        Promise.map(alltestdata, eachTestData => {
            return getProductInfoFromAPI(api_endpoint, token, eachTestData.product, _.toString(eachTestData.quantity), _.toString(eachTestData.shipTo));
        })
            .then(data => {
                // you can write the responses to a file or use the response to be displayed on a browser.
                fs.writeJSONSync('./results/apiResults.json', data, { spaces: 2 });
            })
            .catch(console.error);
    }
    catch (ex) {
        console.log(ex);
    }
})();

```

# Using this repository

- Make sure you have nodejs installed.
- nodejs comes with npm - node package manager.
- clone this repository.
- update config/credentials.json with your client_id and client_secret
- update config/testdata.json with the products, shipped info and quantity.

``` bash
    npm install
    npm run getProductInfo
```

The results are stored in the results folder.

# Date management
Date formatting across multiple services is achieved with basic formatting functions available.

``` js
var sampleresponsedate = new Date().toUTCString()
'Thu, 21 Jun 2018 17:23:46 GMT'
var parsedate = new Date(y).toLocaleString();
'2018-6-21'
```

# API Reference
Link to the API reference [here](https://api...)