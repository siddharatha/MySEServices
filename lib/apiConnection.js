var request = require('request');
var fs = require('fs-extra');
/**
 * getAccessToken
 *
 * @returns accessToken
 */
async function getAccessToken(filePath) {
    return new Promise((resolve, reject) => {
        credentials = fs.readJsonSync(filePath);
        request.post(`${credentials.api_endpoint}/token`, {
            form: {
                "grant_type": "client_credentials",
                "client_id": credentials.api_clientid,
                "client_secret": credentials.api_clientsecret
            }
        }, (err, res) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            var response = JSON.parse(res.toJSON().body);
            resolve({ token: response.access_token, api_endpoint: credentials.api_endpoint});
        });
    })
}

module.exports = getAccessToken;