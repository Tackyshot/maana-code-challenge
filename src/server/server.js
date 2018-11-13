'use strict';
const express = require('express');
const graphQlHTTP = require('express-graphql');
const Schema = require('./schema/schema');

const app = express();
const schema = new Schema().getSchema();

//for the graphiQL interface for testing queries and mutations
app.use('/graphql', graphQlHTTP({
  schema: schema,
  graphiql: true
}));

//graphQL implementation for the API to use queries and mutations
app.use('/api', graphQlHTTP({
  schema: schema
}));

//route for the bundle.js file and other files
app.route('/js/:filename')
  .get((req, res, next) => {
    let filename = req.params.filename;
    let options = {
      root: __dirname + '/assets/js/',
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    };

    res.sendFile(filename, options, (err) => {
      if (err){
        console.error(err);
        next(err);
      } else {
        console.log('Sent:', filename);
      }
    });

  });

app.route('/css/:filename')
  .get((req, res, next) => {
    let filename = req.params.filename;
    let options = {
      root: __dirname + '/assets/css/',
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    };

    res.sendFile(filename, options, (err) => {
      if (err){
        console.error(err);
        next(err);
      } else {
        console.log('Sent:', filename);
      }
    });

  });


//return index.html file for anything other than defined routes above
app.route('*')
  .get((req, res, next) => {
    let options = {
      root: __dirname + '/assets/html/',
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    };

    res.sendFile('index.html', options, (err) => {
      if (err){
        console.error(err);
        next(err);
      } else {
        console.log('Sent: index.html');
      }
    });

  });

app.listen('3000', () => {
    console.log('server started on port 3000');
});