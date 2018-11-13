import * as React from 'react';
import {Redirect} from 'react-router-dom';
import { graphql, compose, Mutation } from 'react-apollo';
import {css} from 'aphrodite';
import GlobalStyles from 'styles/global.css';
import IntegrationStyles from 'styles/addIntegration.css';

import Integration from "./integration/integration";
import GetEndpoint from 'queries/endpoint.query';
import GetEndpoints from 'queries/endpoints.query';
import GetIntegrations from 'queries/integrations.query';
import NewIntegration from 'queries/addIntegration.query';


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
    this.handleSubmitIntegration = this.handleSubmitIntegration.bind(this);
  }//end constructor

  render (){
    console.log('RENDER', this.props);

    /*<Mutation mutation={this.props.AddIntegrationMutation}>
              {(addIntegration, {data}) => {
                return <button onClick={()=>this.handleSubmitIntegration(addIntegration)} className={css(GlobalStyles.button, IntegrationStyles.save_btn)}>Save Integration</button>;
              }}
            </Mutation>*/

    return (
      <div className={css(GlobalStyles.column, IntegrationStyles.integration_area)}>
        <div className={css(GlobalStyles.block, IntegrationStyles.integration_header_area)}>
          <h1 className={css(GlobalStyles.h1)}>New Integration</h1>
          <hr className={css(GlobalStyles.hr)}/>
        </div>
        <div className={css(GlobalStyles.block)}>
          <div className={css(IntegrationStyles.btn_area)}>
            <button onClick={()=>this.handleSubmitIntegration()} className={css(GlobalStyles.button, IntegrationStyles.save_btn)}>Save Integration</button>
            <button onClick={()=>this.props.history.push('/')} className={css(GlobalStyles.button, IntegrationStyles.cancel_btn)}>Cancel</button>
          </div>
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
    let nState = {...this.state};
    let obj = {};
    let currentMapping = nState.mIntegration.mappings[mappingIndex];
    let lastMapping = nState.mIntegration.mappings[(nState.mIntegration.mappings.length -1)];


    //check to make sure last mapping is completed
    if(!!lastMapping && !!lastMapping[`path${side === 'a' ? 'B' : 'A'}`] && !lastMapping[`path${side.toUpperCase()}`]){
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

    nState.mIntegration[`endpoint${side.toUpperCase()}Id`] = endpointId;
    this.setState(nState);
  }//end handleEndpointSelection
  
  handleSubmitIntegration (mutation){
    console.log('SUBMIT INTEGRATION', this.props);
    this.props.AddIntegrationMutation({
      variables:{
        integration: JSON.stringify(this.state.mIntegration)
      },
      refetchQueries:[{query: GetIntegrations}]
    });

    this.props.history.push('/');
  }//end handleSubmitIntegration
}

export default compose(
  graphql(GetEndpoint, {name:"GetEndpointQuery"}),
  graphql(GetEndpoints, {name: 'GetEndpointsQuery'}),
  graphql(NewIntegration, {name:"AddIntegrationMutation"})
)(AddIntegration);