import * as React from 'react';

export default class ResponseBody extends React.Component{
  constructor (props){
    super(props);

    //placeholder until more functionality
    let side = this.props.integrationSide
  }//end constructor

  render (){
    return (
      <div className={'responseBody_area'}>
        <div>
          <h2>Response Body Object</h2>
        </div>
        <ul className={'jsonVisualizer'}>

        </ul>
      </div>
    )
  }//end render
}