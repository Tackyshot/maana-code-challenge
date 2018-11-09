import * as React from 'react';

export default class RequestBody extends React.Component{
  constructor (props){
    super(props);

    //placeholder until more functionality
    let side = this.props.integrationSide;
    let item = this.props.item;
  }//end constructor

  render (){


    return (
      <li onClick={this.props.handleMappingSelection(this.props.item.pathname, this.props.integrationSide)}>
        {this.props.item.value}
      </li>
    )
  }//end render
}