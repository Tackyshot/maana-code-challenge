import {gql} from 'apollo-boost';

const Integration = gql`
{
  getIntegration(id: $id) {
    id
    endpointAId
    endpointBId
    mappings {
      pathA
      pathB
    }
  }
}`;

export default Integration;