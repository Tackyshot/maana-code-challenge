import * as React from 'react';
import { graphql, compose } from 'react-apollo';
import Integration from "./integration/integration";
import GetEndpoint from 'queries/endpoint.query';

class AddIntegration extends React.Component{
  constructor (props){
    super(props);

  }//end constructor

  render (){
    return (
      <div className={'integration_area'}>
        <div className={'integration_header_area'}>
          <h1>New Integration</h1>
          <hr className={'header_hr'}/>
        </div>
        <div className={'integration_content_area'}>
          <div className={'integration_window side_a'}>
            <Integration
              intSide={'a'}
              handleMappingSelection={this.handleMappingSelection}
              handleEndpointSelection={this.handleEndpointSelection}
            />
          </div>
          <div className={'integration_window side_b'}>
            <Integration
              intSide={'b'}
              handleMappingSelection={this.handleMappingSelection}
              handleEndpointSelection={this.handleEndpointSelection}
            />
          </div>
        </div>
      </div>
    )
  }//end render
  
  handleMappingSelection (pathname, side){
      
  }//end handleMappingSelection

  handleEndpointSelection (id, side){

  }//end handleEndpointSelection
}

export default graphql(GetEndpoint)(AddIntegration);