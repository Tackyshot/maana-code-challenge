import * as React from 'react';

export default class RequestBody extends React.Component{
  constructor (props){
    super(props);

    //placeholder until more functionality
    let side = this.props.integrationSide
  }//end constructor

  render (){
    return (
      <div className={'requestBody_area'}>
        <div>
          <h2>Request Body Object</h2>
        </div>
        <ul className={'jsonVisualizer'}>

        </ul>
      </div>
    )
  }//end render
}