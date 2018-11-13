import {gql} from 'apollo-boost';

const Integrations = gql`
query getIntegrations{
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