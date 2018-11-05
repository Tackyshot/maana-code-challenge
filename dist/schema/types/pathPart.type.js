const {GraphQLInterfaceType, GraphQLObjectType, GraphQLString, GraphQLBoolean} = require('graphql');

const typeName = 'pathPartType';

module.exports.typeName =  typeName;
module.exports = new GraphQLObjectType({
  name: typeName,
  fields: () => ({
    name: {type: GraphQLString},
    isVariable: {type: GraphQLBoolean},
    isRequired: {type: GraphQLBoolean}
  })
});
