import * as React from 'react';
import { graphql, compose } from 'react-apollo';
import {css} from 'aphrodite';
import GlobalStyles from 'styles/global.css';
import IntegrationStyles from 'styles/addIntegration.css';

import EndpointSelect from "./endpointSelect";
import QueryParamsSelect from "./queryParamsSelect";
import HeaderSelect from "./headerSelect";
import JsonVisualizer from "./jsonVisualizer";
import ResponseBody from "./responseBody";

import stub from 'helpers/stub';

export default class Integration extends React.Component{
  constructor (props){
    super(props);

  }//end constructor

  render (){
    let intSide = this.props.intSide;
    let selectedEndpoint = this.props.endpoints.find((ePoint, i) => {
      let key = `endpoint${intSide.toUpperCase()}Id`;
      
      return ePoint.id === this.props.integration[key]
    });

    return (
      <div className={css(GlobalStyles.column, IntegrationStyles.integration)}>
        <div className={css(GlobalStyles.block)}>
          <EndpointSelect {...this.props} selectedEndpoint={selectedEndpoint}/>
        </div>
        <div className={css(GlobalStyles.block)}>
          {!!selectedEndpoint && selectedEndpoint.api.requestMethod === 'get' ? <QueryParamsSelect {...this.props} selectedEndpoint={selectedEndpoint}/> : null}
        </div>
        <div className={css(GlobalStyles.block)}>
          {!!selectedEndpoint ? <HeaderSelect {...this.props} selectedEndpoint={selectedEndpoint}/> : null}
        </div>
        <div className={css(GlobalStyles.block)}>
          {!!selectedEndpoint && selectedEndpoint.api.requestMethod !== 'get' ? <JsonVisualizer
            id={!!selectedEndpoint ? selectedEndpoint.id : null}
            selectedEndpoint={selectedEndpoint}
            contentSource={"requestBody"}
            body={!!selectedEndpoint ? JSON.parse(selectedEndpoint.api.requestBodyObj) : null}
            intSide={intSide}
            integration={this.props.integration}
            handleMappingSelection={this.props.handleMappingSelection}
          /> : null}
        </div>
        <div className={css(GlobalStyles.block)}>
          {!!selectedEndpoint ? <JsonVisualizer
            id={!!selectedEndpoint ? selectedEndpoint.id : null}
            selectedEndpoint={selectedEndpoint}
            contentSource={"responseBody"}
            body={!!selectedEndpoint ? JSON.parse(selectedEndpoint.api.responseBodyObj) : null}
            intSide={intSide}
            integration={this.props.integration}
            handleMappingSelection={this.props.handleMappingSelection}
          />: null}
        </div>
        {!selectedEndpoint ? <p className={css(GlobalStyles.p, IntegrationStyles.integration_select_endpoint_message)}>
          Please select an endpoint to define your integrations
        </p> : null}
      </div>
    )
  }//end render
}