'use strict';

console.log('Loading function');
// Decent Tutorial: https://medium.com/@asankha/exposing-aws-lambda-functions-with-the-api-gateway-fbdc15c19dce

exports.handler = (event, context, callback) => {
    var mapping = JSON.parse(event.body)
    //console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('value1 =', mapping.key1);
    console.log('value2 =', context);
    
    let response = {
        "statusCode": 200,
        "body": JSON.stringify(mapping)
    }
    
    callback(null, response);  // Echo back the first key value
    //callback('Something went wrong');
};

