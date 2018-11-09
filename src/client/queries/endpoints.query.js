import {gql} from 'apollo-boost';

export const Endpoints = gql`
  {
    endpoints {
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