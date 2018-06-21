async function getPartDetails(page, catalogNumber, quantity, shipTo) {
    await page.$eval('input#catalogNumber', el => el.value = '');
    await page.type('input#catalogNumber', catalogNumber);
    await page.$eval('input[name=quantity]', el => el.value = '');
    await page.type('input[name=quantity]', quantity);
    await page.select('select[name=customerId]', shipTo ? shipTo : '');
    await page.click('button[name="doPriceAndAvailabilityBtn"]');
    await page.waitFor('div#messageDetails p.errorMsgDark');

    message = await page.evaluate(() => {
        var parsele = document.querySelector('div#messageDetails');
        return parsele ? parsele.innerText : 'error';
    });
    promiseQuantity = await page.evaluate(() => {
        var parsele = document.querySelector('#availabilityBlock table:nth-child(1) tr td:nth-child(1)');
        return parsele ? parsele.innerText : 'error';
    });
    availableDate = await page.evaluate(() => {
        var parsele = document.querySelector('#availabilityBlock table:nth-child(1) tr td:nth-child(2)');
        return parsele ? parsele.innerText : 'error';
    });
    returnData = { promiseQuantity, availableDate, catalogNumber, quantity, shipTo, message };
    // fs.appendFileSync('myseresults.json',','+JSON.stringify(returnData));
    console.log(returnData);
    return returnData;
}

module.exports = getPartDetails;