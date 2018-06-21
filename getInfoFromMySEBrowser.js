const fs = require('fs-extra');
const _ = require('lodash');
const Promise = require('bluebird');

const generateTestdata = require('./lib/generateTestData');
const mySEConnection = require('./lib/mySEConnection');
const getProductInfoFromMySE = require('./lib/getProductInfoFromMySE');


(async function () {
    try {
        alltestdata = await generateTestdata('./config/testdata.json');
        page = await mySEConnection('./config/credentials.json',false);
        Promise.mapSeries(alltestdata, eachTestData => {
            return getProductInfoFromMySE(page, eachTestData.product, _.toString(eachTestData.quantity), _.toString(eachTestData.shipTo));
        })
            .then(data => {
                fs.writeJSONSync('./results/mySEResults.json', data, { spaces: 2 });
                page.close();
            })
            .catch(console.error);
    }
    catch (ex) {
        console.log(ex);
    }
})();
