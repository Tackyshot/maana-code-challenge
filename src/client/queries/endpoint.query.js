import {gql} from 'apollo-boost';

export const Endpoint = gql`
  query getEndpoint($id: ID!){
    endpoint($id: ID!) {
      hostname
      api {
        pathParts{
          name
          isRequired
          isVariable
        }
        queryParams{
          name
          param
        }
        requestMethod
        requestBodyObj
        responseBodyObj
      }
    }
  }
`;