import * as React from 'react';
import { graphql, compose } from 'react-apollo';
import {css} from 'aphrodite';
import GlobalStyles from 'styles/global.css';
import IntegrationStyles from 'styles/addIntegration.css';

import Integration from "./integration/integration";
import GetEndpoint from 'queries/endpoint.query';
import GetEndpoints from 'queries/endpoints.query';


class AddIntegration extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      endpoints: [],
      mIntegration: {
        endpointAId: null,
        endpointBId: null,
        mappings: []
      },
      currentMapping: {
        pathA: null,
        pathB: null,
      }
    };

    this.displayIntegrationTooling = this.displayIntegrationTooling.bind(this);
    this.handleEndpointSelection = this.handleEndpointSelection.bind(this);
    this.handleMappingSelection = this.handleMappingSelection.bind(this);
  }//end constructor

  render (){

    return (
      <div className={css(GlobalStyles.column, IntegrationStyles.integration_area)}>
        <div className={css(GlobalStyles.block, IntegrationStyles.integration_header_area)}>
          <h1 className={css(GlobalStyles.h1)}>New Integration</h1>
          <hr className={css(GlobalStyles.hr)}/>
        </div>
        {this.displayIntegrationTooling()}
      </div>
    )
  }//end render

  displayIntegrationTooling (){
    let data = this.props.GetEndpointsQuery;

    if(data.loading){
      return <p>Loading...</p>
    }
    else{
      let endpoints = data.getEndpoints;

      return (
        <div className={css(IntegrationStyles.integration_content_area)}>
          <div className={css(GlobalStyles.block, IntegrationStyles.integration_window, IntegrationStyles.side_a)}>
            <Integration
              intSide={'a'}
              endpoints={endpoints}
              integration={this.state.mIntegration}
              handleMappingSelection={this.handleMappingSelection}
              handleEndpointSelection={this.handleEndpointSelection}
            />
          </div>
          <div className={css(GlobalStyles.block, IntegrationStyles.integration_window, IntegrationStyles.side_b)}>
            <Integration
              intSide={'b'}
              endpoints={endpoints}
              integration={this.state.mIntegration}
              handleMappingSelection={this.handleMappingSelection}
              handleEndpointSelection={this.handleEndpointSelection}
            />
          </div>
        </div>
      )
    }
  }//end displayIntegrationTooling

  handleMappingSelection (pathname, side, mappingIndex){

    console.log('HANDLE MAPPING SELECTION', pathname, side, mappingIndex);
    let nState = {...this.state};
    let obj = {};
    let currentMapping = nState.mIntegration.mappings[mappingIndex];
    let lastMapping = nState.mIntegration.mappings[(nState.mIntegration.mappings.length -1)];


    //check to make sure last mapping is completed
    if(!!lastMapping && !!lastMapping[`path${side === 'a' ? 'B' : 'A'}`] && !lastMapping[`path${side.toUpperCase()}`]){
      console.log('last mapping exists');
      lastMapping[`path${side.toUpperCase()}`] = pathname;
      nState.mIntegration.mappings.splice((nState.mIntegration.mappings.length -1), 1, lastMapping);
    }
    else {
      if(!currentMapping) {
        //last mapping completed, create new mapping
        obj[`path${side.toUpperCase()}`] = pathname;
        obj[`path${side === 'a' ? 'B' : 'A'}`] = null; //create placeholder for opposite path
        nState.mIntegration.mappings.push(obj);
      }
      else if(!!currentMapping){
        //remove / deselect currentMapping
        if(currentMapping[`path${side.toUpperCase()}`] === pathname){
          nState.mIntegration.mappings.splice(mappingIndex, 1);
        }
        else{
          //add mapping to proper path.
          currentMapping[`path${side.toUpperCase()}`] = pathname;
          nState.mIntegration.mappings.splice(mappingIndex, 1, currentMapping);
        }
      }
    }
    
    this.setState(nState);
  }//end handleMappingSelection

  handleEndpointSelection (endpointId, side) {
    let nState = {...this.state};

    console.log('SELECT ENDPOINT:', this.state);

    nState.mIntegration[`endpoint${side.toUpperCase()}Id`] = endpointId;
    this.setState(nState);
  }//end handleEndpointSelection
  
  handleSubmitIntegration (){
    this.props.AddIntegrationMutation({
      variables: this.state.mIntegration
    });

    // should redirect to home?
  }//end handleSubmitIntegration
}

export default compose(
  graphql(GetEndpoint, {name:"GetEndpointQuery"}),
  graphql(GetEndpoints, {name: 'GetEndpointsQuery'}),
  // graphql(NewIntegration, {name:"AddIntegrationMutation"})
)(AddIntegration);