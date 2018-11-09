import {gql} from 'apollo-boost';

export const Integration = gql`
  query getIntegration($id: ID!){
    integration($id: ID!) {
      id
      endpointAId
      endpointBId
      mappings
    }
  }
`;