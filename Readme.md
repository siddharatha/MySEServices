# Getting Started
- Overview
- Authentication
- Repositories

Lets walkthrough the core API concepts as we tackle the use cases.

# Overview

The API aims to provide services to get the stock information of a product.

We will provide code samples in nodejs and javascript for web. 

# Authentication

The Authentication is done via Oauth2 protocol .
 - We provide you with a ```client_id``` and ```client_secret```.
 - Please contact your SE contact person to make sure you have this information.

- [Refer to API Spec](https://.....)

Lets do a quick authentication test in Google Chrome. Chrome console allows us to directly run javascript.

- open google chrome and open an empty tab.
- press ctrl + shift + i (windows)
- select console on the newly opened section in google chrome.
- paste the below sample

``` js
// config parameters
var baseendpoint = 'https://api.schneider-electric.com'
var client_id = 'your_client_id';
var client_secret = 'your_client_secret';
var token_url=`${baseendpoint}/token?grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`;

fetch(token_url, {
    method: 'post',
  }).then(res=>res.text()).then(console.log).catch(console.error)
```

Most applications will use an existing wrapper library in the language of your choice. But its important to familarize yourself with the underlying HTTP methods.

# MySE Services
The services allow user 

# Authentication

# Product Information

# Date management

# API Reference