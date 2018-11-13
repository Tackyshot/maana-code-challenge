import * as React from 'react';
import {css} from 'aphrodite';
import GlobalStyles from 'styles/global.css';
import IntegrationStyles from 'styles/addIntegration.css';

export default class QueryParamsSelect extends React.Component{
  constructor (props){
    super(props);

    //placeholder until more functionality
    let side = this.props.integrationSide
  }//end constructor

  render (){
    let selectedEndpoint = this.props.selectedEndpoint;

    return (
      <div className={css(GlobalStyles.column, IntegrationStyles.queryParamsSelect_area)}>
        <div className={css(GlobalStyles.block)}>
          <h2>Query Parameters</h2>
        </div>
        <div className={css(GlobalStyles.block)}>
          <ul className={css(GlobalStyles.ul, IntegrationStyles.queryParamsSelect_list)}>
            {selectedEndpoint.api.queryParams.map((queryParam, i) => {
              let path = `api.queryParams[${i}]`;

              return (
                <li className={'queryParamsSelect_list_item'}
                    key={`queryParam-${queryParam.name}`}
                    onClick={(e)=> e.preventDefault()}
                >
                  ?<span>{queryParam.name}</span> = <span>{queryParam.param}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }//end render
}