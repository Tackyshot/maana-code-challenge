import {gql} from 'apollo-boost';

const Integrations = gql`
{
  getIntegrations {
    id
    endpointAId
    endpointBId
    mappings {
      pathA
      pathB
    }
  }
}`;

export default Integrations