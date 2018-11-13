'use strict';
const fs = require('fs');
const {GraphQLSchema, GraphQLString, GraphQLObjectType, GraphQLID, GraphQLList} = require('graphql');
const _ = require('lodash');

//import queries
const ApiEndpoint = require('./queries/getEndpoint.query');

//import mutations
const queries = {ApiEndpoint};
const mutations = {};

//import types
const EndpointType = require('./types/endpoint.type');
const IntegrationType = require('./types/integration.type');
const stub = require('./stubs/stub');
const stub2 = require('./stubs/stub2');

//todo remove this, replace with mongoDB
const mEndpoints = [
  {
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
      responseBodyObj: JSON.stringify(stub)
    }
  },
  {
    id: 2,
    hostname: 'https://anotherHostname.com',
    api: {
      requestMethod: 'post',
      pathParts: [
        {
          name: 'api',
          isVariable: false,
          isRequired: true
        },
        {
          name: 'customStore',
          isVariable: false,
          isRequired: true
        }
      ],
      queryParams:[],
      headers: [
        {
          headerName: 'Authorization',
          headerValue: 'Bearer fakeJwtToken'
        }
      ],
      requestBodyObj: JSON.stringify(stub2),
    }
  }
];

const mIntegrations = [];


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
      mutation: this.buildMutations(this.mutationFiles)
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
            console.log('mENDPOINTS TO RETURN:');

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

            console.log('FIND Endpoint BY ID:', args.id);
            // console.log(endpoint);

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
              // console.log(integration);

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
          args: {
            integration: {type: GraphQLString}
          },
          resolve: (parent, args) => {
            console.log('ADD INTEGRATION!');

            let integration = JSON.parse(args.integration);
            let id = (mIntegrations.length + 1);
            let nIntegration = {
              ...{id: id},
              ...integration
            };

            mIntegrations.push(nIntegration);

            return nIntegration;
          }
        }
      }
    });
  }//end buildMutations
  
}
module.exports = SchemaFactory;