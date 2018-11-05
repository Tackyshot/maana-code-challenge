const {GraphQLID, GraphQLObjectType, GraphQLString} = require('graphql');
const EndpointType = require('../types/endpoint.type');

module.exports.fieldName = 'addEndpoint';
module.exports.fieldContent = {
  type: EndpointType,
  args: {id: {type: GraphQLID}},
  resolve: (parent, args) => {
    //todo: replace with mongo queries.
    return _.find(mEndpoints, {id: args.id});
  }
};

/*new GraphQLObjectType({
  name: module.exports.fieldName,
  fields: () => ({
    id: {type: GraphQLString}
  })
});*/