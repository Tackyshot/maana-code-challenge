import * as React from 'react';
import {css} from 'aphrodite';
import GlobalStyles from 'styles/global.css';
import IntegrationStyles from 'styles/addIntegration.css';

export default class HeaderSelect extends React.Component{
  constructor (props){
    super(props);
  }//end constructor

  render (){
    return (
      <div className={css(GlobalStyles.column, IntegrationStyles.headerSelect_area)}>
        <div>
          <h2>Headers:</h2>
        </div>
        <ul className={css(GlobalStyles.ul, IntegrationStyles.headerSelect_list)}>
          {this.props.selectedEndpoint.api.headers.map((header, i) => {
            let path = `api.headers[${i}]`;

            return (
              <li className={css(GlobalStyles.li, IntegrationStyles.headerSelect_list_item)}
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