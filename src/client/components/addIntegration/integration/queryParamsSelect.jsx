import * as React from 'react';

export default class QueryParamsSelect extends React.Component{
  constructor (props){
    super(props);

    //placeholder until more functionality
    let side = this.props.integrationSide
  }//end constructor

  render (){
    return (
      <div className={'queryParamsSelect_area'}>
        <div>
          <h2>Query Parameters</h2>
        </div>
        <ul className={'queryParamsSelect_list'}>
          {this.props.endpoint.api.queryParams.map((queryParam, i) => {
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
    )
  }//end render
}