const {GraphQLInterfaceType, GraphQLString, GraphQLBoolean} = require('graphql');

const typeName = 'headerType';

module.exports.typeName =  typeName;
module.exports = new GraphQLInterfaceType({
  name: typeName,
  fields: () => ({
    headerName: {type: GraphQLString},
    headerValue: {type: GraphQLString}
  })
});
