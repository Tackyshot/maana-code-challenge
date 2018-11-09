'use strict';
const fs = require('fs');
const {GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLList} = require('graphql');
const _ = require('lodash');

//import queries
const ApiEndpoint = require('./queries/getEndpoint.query');

//import mutations
const queries = {ApiEndpoint};
const mutations = {};

//import types
const EndpointType = require('./types/endpoint.type');
const IntegrationType = require('./types/integration.type');

//todo remove this, replace with mongoDB
const mEndpoints = [{
  id: 1,
  hostname: 'https://somebasichost.com',
  api: {
    requestMethod: 'get',
    pathParts: [
      {
        name: 'api',
        isVariable: false,
        isRequired: true
      },
      {
        name: 'getResource',
        isVariable: false,
        isRequired: true
      },
      {
        name: '{id}',
        isVariable: true,
        isRequired: false
      }
    ],
    queryParams:[
      {
        name: 'filter',
        param: ['someFilterValue']
      }
    ],
    headers: [
      {
        headerName: 'Authorization',
        headerValue: 'Bearer fakeJwtToken'
      }
    ],
    responseBodyObj: JSON.stringify({
      "someResponseKey": "Some Resource String"
    })
  }
}];

const mIntegrations = [{
  id: 1,
  endpointAId: 1,
  endpointBId: 2,
  mappings: [{
    pathA: 'responseBody.data.array.name.firstname',
    pathB: 'requestBody.data.array.name.firstname',
  }]
}];


class SchemaFactory {
  constructor (){
    this.queriesPath = `${__dirname}/queries`;
    this.mutationsPath = `${__dirname}/mutations`;
    this.queryFiles = fs.readdirSync(this.queriesPath);
    this.mutationFiles = fs.readdirSync(this.mutationsPath);
    this.schema = this.buildSchema();

    console.log('SCHEMA!');
    console.log(this.schema);

  }//end constructor

  getSchema (){
    return this.schema;
  }//end getSchema

  buildSchema (){
    return new GraphQLSchema({
      query: this.buildQueries(this.queryFiles),
      // mutation: this.buildMutations(this.mutationFiles)
    });
  }//end buildSchema
  
  buildQueries (files){
    // const fields = this.buildFields(this.queriesPath, files);
    const RootQueryType = new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        getEndpoints: {
          type: new GraphQLList(EndpointType),
          resolve: (parent, args) => {
              return mEndpoints;
          }
        },
        getEndpoint: {
          type: EndpointType,
          args: {id: {type: GraphQLID}},
          resolve: (parent, args) => {
            //todo: replace with mongo queries.
            let endpoint = mEndpoints.find((a) => {
                return a.id == args.id;
            });

            console.log('FIND BY ID:', args.id);
            console.log(endpoint);

            return endpoint
          }
        },
        getIntegrations:{
          type: new GraphQLList(IntegrationType),
          resolve: () => {
              return mIntegrations;
          }
        },
        getIntegration:{
          type: IntegrationType,
          args: {id: {type: GraphQLID}},
          resolve: (parent, args) => {
              let integration = mIntegrations.find((a) => {
                  return a.id == args.id;
              });
              
              console.log('FIND INTEGRATION BY ID:', args.id);
              console.log(inegration);

              return integration;
          }
        }
      }
    });

    return RootQueryType;
  }//end buildQueries

  buildMutations (files){
    // const fields = this.buildFields(this.mutationsPath, files);

    return new GraphQLObjectType({
      name: 'Mutations',
      fields: {
        addEndpoint: {
          type: EndpointType,
          resolve: (parent, args) => {

          }
        },
        addIntegration: {
          type: IntegrationType,
          resolve: (parent, args) => {
              
          }
        }
      }
    });
  }//end buildMutations
  
}
module.exports = SchemaFactory;