import * as React from 'react';
import Integration from "./integration/integration";

export default class AddIntegration extends React.Component{
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
            <Integration integrationSide={'a'} />
          </div>
          <div className={'integration_window side_b'}>
            <Integration integrationSide={'b'} />
          </div>
        </div>
      </div>
    )
  }//end render
}