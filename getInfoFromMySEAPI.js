const fs = require('fs-extra');
const _ = require('lodash');
const Promise = require('bluebird');

const generateTestdata = require('./lib/generateTestData');
const apiConnection = require('./lib/apiConnection');
const getProductInfoFromAPI = require('./lib/getProductInfoFromAPI');


(async function () {
    try {
        alltestdata = await generateTestdata('./config/testdata.json');
        const { token, api_endpoint } = await apiConnection('./config/credentials.json');
        Promise.map(alltestdata, eachTestData => {
            return getProductInfoFromAPI(api_endpoint, token, eachTestData.product, _.toString(eachTestData.quantity), _.toString(eachTestData.shipTo));
        })
            .then(data => {
                fs.writeJSONSync('./results/apiResults.json', data, { spaces: 2 });
            })
            .catch(console.error);
    }
    catch (ex) {
        console.log(ex);
    }
})();
