const request = require('request');
const _ = require('lodash');

function getProductInfoFromAPI(api_endpoint, token, catalogNumber, quantity, shipTo) {
    return new Promise((resolve, reject) => {
        var url = `${api_endpoint}/productavailability/1.0/products/${catalogNumber}?quantity=${quantity}`;
        url += _.isEmpty(shipTo) ? '' : `&shipTo=${shipTo}`;
        var options = {
            url,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            json: true
        }
        request.get(options, (err, res, body) => {
            result = {
                product: catalogNumber,
                quantity: quantity,
                shipTo: shipTo,
                promiseQuantity: _.get(body, 'availabilities[0].quantity'),
                deliveryDate: _.get(body, 'availabilities[0].deliveryDate'),
                message: _.get(body, 'errorCode')
            };
            console.log(result);
            resolve(result);
        });
    });
}

module.exports = getProductInfoFromAPI;