import {gql} from 'apollo-boost';

const Endpoints = gql`
{
  getEndpoints {
    id
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
      headers{
        headerName
        headerValue
      }
      requestMethod
      requestBodyObj
      responseBodyObj
    }
  }
}`;

export default Endpoints;