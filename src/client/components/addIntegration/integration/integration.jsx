import * as React from 'react';
import EndpointSelect from "./endpointSelect";
import QueryParamsSelect from "./queryParamsSelect";
import HeaderSelect from "./headerSelect";
import RequestBody from "./requestBody";
import ResponseBody from "./responseBody";

export default class Integration extends React.Component{
  constructor (props){
    super(props);

    //placeholder until more functionality
    let side = this.props.integrationSide
  }//end constructor

  render (){
    let endpoint = { //todo replace with real data
      hostname: 'stub',
      api: {
        pathParts: [],
        queryParams: [],
        headers: [],
        requestBodyObj: '',
        responseBodyObj: '',
      }

    };

    return (
      <div>
        <EndpointSelect endpoint={endpoint}/>
        <QueryParamsSelect endpoint={endpoint}/> {/*todo: display only if selectedEndpoint is a GET request*/}
        <HeaderSelect endpoint={endpoint}/>
        <RequestBody endpoint={endpoint}/>
        <ResponseBody endpoint={endpoint}/>
      </div>
    )
  }//end render
}