import {gql} from 'apollo-boost';

const AddIntegration = gql`
mutation addIntegration($integration: String!){
  addIntegration(integration: $integration) {
    id
    endpointAId
    endpointBId
    mappings {
      pathA
      pathB
    }
  }
}`;

export default AddIntegration;