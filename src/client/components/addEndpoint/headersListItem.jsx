import * as React from 'react';

export default class HeadersListItem extends React.Component{
  constructor (props){
    super(props);
  }//end constructor

  render (){
    return (
      <li className={"headers_list_item"}>
        <input type="text" className={"headers_key"}/>
        <input type="text" className={"headers_value"}/>
      </li>
    )
  }//end render
}