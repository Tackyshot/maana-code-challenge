import {gql} from 'apollo-boost';

const Integration = gql`
query getIntegration($id: ID!){
  getIntegration($id: ID!) {
    id
    endpointAId
    endpointBId
    mappings
  }
}`;

export default Integration;