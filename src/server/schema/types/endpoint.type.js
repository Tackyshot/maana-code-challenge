const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID} = require('graphql');
const pathPartType = require('./pathPart.type');
const queryParamType = require('./queryParam.type');
const headerType = require('./header.type');
const apiType = require('./api.type');

const typeName = 'EndpointType';

module.exports.typeName =  typeName;
module.exports = new GraphQLObjectType({
  name: typeName,
  fields: () => ({
    id: {type: GraphQLID},
    hostname: {type: GraphQLString},
    api: {type: apiType}
  })
});
