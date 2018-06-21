const fs = require('fs-extra');
const _ = require('lodash');

/**
 * Creates a combination of different test parameters and generate test data
 *
 * @returns [{product, quantity, shipTo}]
 */
async function generateTestData(fileName){
    testdata = await fs.readJSON(fileName);
    alltestdata = [];
    _.each(testdata.products, product => {
        _.each(testdata.quantity, quantity => {
            _.each(testdata.shipTo, shipTo => {
                alltestdata.push({ product, quantity, shipTo });
            })
        })
    })
    return alltestdata;
}

module.exports = generateTestData;