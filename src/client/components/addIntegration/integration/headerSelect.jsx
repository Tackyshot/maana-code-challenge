import * as React from 'react';

export default class HeaderSelect extends React.Component{
  constructor (props){
    super(props);

    //placeholder until more functionality
    let side = this.props.integrationSide
  }//end constructor

  render (){
    return (
      <div className={'headerSelect_area'}>
        <div>
          <h2>Headers:</h2>
        </div>
        <ul className={'headerSelect_list'}>
          {this.props.endpoint.api.headers.map((header, i) => {
            let path = `api.headers[${i}]`;

            return (
              <li className={'headerSelect_list_item'}
                  key={`header-${header.headerName}`}
                  onClick={(e)=> e.preventDefault()}
              >
                <span>{header.headerName}</span> : <span>{header.headerValue}</span>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }//end render
}