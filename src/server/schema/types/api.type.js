const {GraphQLObjectType, GraphQLString, GraphQLList} = require('graphql');
const pathPartType = require('./pathPart.type');
const queryParamType = require('./queryParam.type');
const headerType = require('./header.type');

const typeName = 'ApiType';

module.exports.typeName =  typeName;
module.exports = new GraphQLObjectType({
  name: typeName,
  fields: () => ({
    requestMethod: {type: GraphQLString},
    pathParts: {
      type: new GraphQLList(pathPartType)
    },
    queryParams:{
      type: new GraphQLList(queryParamType)
    },
    headers: {
      type: new GraphQLList(headerType)
    },
    requestBodyObj: {type: GraphQLString}, //strigified JSON object
    responseBodyObj: {type: GraphQLString}//strigified JSON object
  })
});
