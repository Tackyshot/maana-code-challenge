const {GraphQLObjectType, GraphQLString, GraphQLList} = require('graphql');

const typeName = 'queryParamType';

module.exports.typeName =  typeName;
module.exports = new GraphQLObjectType({
  name: typeName,
  fields: () => ({
    name: {type: GraphQLString},
    param: {type: new GraphQLList(GraphQLString)}
  })
});
