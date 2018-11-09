import * as React from 'react';
import { graphql, compose } from 'react-apollo';

import EndpointSelect from "./endpointSelect";
import QueryParamsSelect from "./queryParamsSelect";
import HeaderSelect from "./headerSelect";
import JsonVisualizer from "./jsonVisualizer";
import ResponseBody from "./responseBody";

import stub from 'helpers/stub';

export default class Integration extends React.Component{
  constructor (props){
    super(props);

    //placeholder until more functionality
    let side = this.props.integrationSide
  }//end constructor

  render (){
    let intSide = this.props.intSide;
    let endpoint = { //todo replace with real data
      id: 'someID',
      hostname: 'stub',
      api: {
        pathParts: [],
        queryParams: [],
        headers: [],
        requestBodyObj: JSON.stringify(stub),
        responseBodyObj: JSON.stringify(stub),
      }

    };

    return (
      <div>
        <EndpointSelect endpoint={endpoint}/>
        <QueryParamsSelect endpoint={endpoint}/> {/*todo: display only if selectedEndpoint is a GET request*/}
        <HeaderSelect endpoint={endpoint}/>
        <JsonVisualizer
          id={endpoint.id}
          contentSource={"requestBody"}
          body={JSON.parse(endpoint.api.requestBodyObj)}
          intSide={intSide}
        />
        <JsonVisualizer
          id={endpoint.id}
          contentSource={"responseBody"}
          body={JSON.parse(endpoint.api.responseBodyObj)}
          intSide={intSide}
          handleMappingSelection={this.props.handleMappingSelection}
        />
      </div>
    )
  }//end render
}