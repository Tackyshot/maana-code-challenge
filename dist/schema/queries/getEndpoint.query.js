const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean} = require('graphql');
const _ = require('lodash');
const EndpointType = require('../types/endpoint.type');

const queryName = 'getEndpoint';

module.exports.fieldName = queryName;
module.exports.fieldContent = {
  type: EndpointType,
  args: {id: {type: GraphQLID}},
  resolve: (parent, args) => {
    //todo: replace with mongo queries.
    return _.find(mEndpoints, {id: args.id});
  }
};

/*new GraphQLObjectType({
  name: queryName,
  fields: () => ({
    type: EndpointType,
    args: {id: {type: GraphQLID}},
    resolve: (parent, args) => {
      //todo: replace with mongo queries.
      return _.find(mEndpoints, {id: args.id});
    }
  })
});*/
