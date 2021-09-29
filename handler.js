'use strict';
const querystring = require('querystring');

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello World!',
        input: event.queryStringParameters,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


module.exports.validar = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `${event.pathParameters.name} not found`,
        //input: event.queryStringParameters,
      },
      null,
      2
    ),
  };
};


module.exports.createUser = async (event) => {
  const user = querystring.parse(event["body"]);
  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        input: `${user.name}`,
        input: `${user.lastname}`,
        message: `Hola, ${user.name} ${user.lastname}`,
        //input: event.queryStringParameters,
      },
      null,
      2
    ),
  };
};


/*
var contador = 0;
function myCount(body, callback){
    const response = {
    statusCode: 200,
    headers:{
	    'Access-Control-Allow-Origin': '*',
    },
    body: body,
  };
  callback(null, response);
}


module.exports.count = (event, context, callback) => {
  contador++;    
  myCount(contador, callback);
};
*/