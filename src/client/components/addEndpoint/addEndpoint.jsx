import * as React from 'react';

import Hostname from './hostname';
import Headers from './headers';
import ResponseBody from './responseBody';
import RequestBody from './requestBody';

export default class AddEndpoint extends React.Component{
  constructor (props){
    super(props);
  }//end constructor

  render (){
      return (
        <div className={"addEndpoint_area"}>
          <Hostname/>
          <Headers/>
          <RequestBody/>
          <ResponseBody/>
          <div className={"endpoint_button_area"}>
            <button className={"btn saveBtn"}>Save</button>
            <button className={"btn cancelBtn"}>Cancel</button>
          </div>
        </div>
      )
  }//end render
}