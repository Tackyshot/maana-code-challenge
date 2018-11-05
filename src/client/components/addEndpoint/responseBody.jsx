import * as React from 'react';

export default class ResponseBody extends React.Component{
  constructor (props){
    super(props);
  }//end constructor

  render (){
    return (
      <div>
        <div>
          <h2>Response Object</h2>
        </div>
        <div>
          JSON OBJECT GOES HERE
        </div>
      </div>
    )
  }//end render
}