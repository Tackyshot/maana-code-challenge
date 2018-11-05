import * as React from 'react';

import HeadersListItem from './headersListItem';

export default class Headers extends React.Component{
  constructor (props){
    super(props);
  }//end constructor

  render (){
    return (
      <div className={"headers_area"}>
        <div className={"headers_title_area"}>
          <h2 className={"headers_title"}>Headers:</h2>
        </div>
        <div className={"headers_list_area"}>
          <ul className={"headers_list"}>
            <HeadersListItem/>
          </ul>
        </div>
        <div className={"headers_button_area"}>
          <button className={"add_header_btn"}>+ Add</button>
        </div>
      </div>
    )
  }//end render
}