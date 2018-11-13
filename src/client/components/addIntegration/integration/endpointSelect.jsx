import * as React from 'react';
import {graphql} from 'react-apollo';
import {css} from 'aphrodite';
import GlobalStyles from 'styles/global.css';
import IntegrationStyles from 'styles/addIntegration.css';

export default class EndpointSelect extends React.Component{
  constructor (props){
    super(props);
  }//end constructor

  render (){
    let intSide = this.props.intSide;
    let integration = this.props.integration;
    let selectedEndpoint = this.props.selectedEndpoint;

    return (
      <div className={css(GlobalStyles.column, IntegrationStyles.endpoint_select_area)}>
        <div className={css(GlobalStyles.block)}>
          <div className={css(IntegrationStyles.endpoint_select_wrapper)}>
            <select
              className={css(GlobalStyles.select_box, IntegrationStyles.endpoint_select)}
              onChange={(e)=> this.props.handleEndpointSelection(e.target.value, this.props.intSide)}
            >
              <option className={css(IntegrationStyles.endpoint_option)}>Select Host</option>
              {
                this.props.endpoints.map((endpoint, i) => {
                  return (
                    <option
                      key={`endpointSelect-${i}`}
                      value={`${endpoint.id}`}
                      className={css(IntegrationStyles.endpoint_option)}

                    >{`${endpoint.api.requestMethod} ${endpoint.hostname}`}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
        <div className={css(GlobalStyles.block)}>
          <div className={css(IntegrationStyles.endpoint_info_area)}>
            <div className={css(IntegrationStyles.endpoint_method_wrapper)}>
              {!!selectedEndpoint ? <span className={css(IntegrationStyles.endpoint_method)}>{selectedEndpoint.api.requestMethod}</span> : null}
            </div>
            <div className={css(IntegrationStyles.endpoint_path_wrapper)}>
              {this.buildPathElement()}
            </div>
          </div>
        </div>
      </div>
    )
  }//end render

  buildPathElement (){
    let selectedEndpoint = this.props.selectedEndpoint;
    let pathParts = !!selectedEndpoint ? this.props.selectedEndpoint.api.pathParts : [];

      return pathParts.map((pathPart, i) => {
        let path = `api.pathParts[${i}]`;
        return (
          <span
            key={`pathPart-${i}`}
            className={css(IntegrationStyles.endpoint_path)}
            onClick={(e)=> e.preventDefault()}
          >/{pathPart.isVariable ? ':' : null}{pathPart.name}{!pathPart.isRequired ? '?' : null}</span>
        );
      });

  }//end buildPathElement
}