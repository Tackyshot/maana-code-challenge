import {gql} from 'apollo-boost';

export const Integration = gql`
  query getIntegrations{
    integrations {
      id
      endpointAId
      endpointBId
      mappings
    }
  }
`;