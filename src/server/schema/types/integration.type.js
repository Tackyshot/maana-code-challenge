const {GraphQLObjectType, GraphQLList, GraphQLID} = require('graphql');
const MappingType = require('./mapping.type');

const typeName = 'IntegrationType';

module.exports.typeName =  typeName;
module.exports = new GraphQLObjectType({
  name: typeName,
  fields: () => ({
    id: {type: GraphQLID},
    endpointAId: {type: GraphQLID},
    endpointBId: {type: GraphQLID},
    mappings: {type: new GraphQLList(MappingType)},
  })
});
