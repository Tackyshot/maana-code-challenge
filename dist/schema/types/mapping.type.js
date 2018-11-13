const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID} = require('graphql');

const typeName = 'MappingType';

module.exports.typeName =  typeName;
module.exports = new GraphQLObjectType({
  name: typeName,
  fields: () => ({
    pathA: {type: GraphQLString},
    pathB: {type: GraphQLString}
  })
});
