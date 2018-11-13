import {gql} from 'apollo-boost';

const Endpoint = gql`
{
  getEndpoint(id: ID){
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
      requestMethod
      requestBodyObj
      responseBodyObj
    }
  }
}`;

export default Endpoint;