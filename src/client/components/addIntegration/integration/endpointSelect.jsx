import * as React from 'react';

export default class EndpointSelect extends React.Component{
  constructor (props){
    super(props);

    //placeholder until more functionality
    let side = this.props.integrationSide
  }//end constructor

  render (){
    return (
      <div>
        <div>
          <select>
            <option value={`${'HOSTNAME_ID'}`}>{`${'METHOD'} ${'HOSTNAME'}`}</option>
          </select>
        </div>
        <div>
          <div>
            <span>{'METHOD'}</span>
          </div>
          <div>
            {this.buildPathElement()}
          </div>
        </div>
      </div>
    )
  }//end render

  buildPathElement (){
    let pathParts = this.props.endpoint.api.pathParts;

      return pathParts.map((pathPart, i) => {
        let path = `api.pathParts[${i}]`;
        return (
          <span className={'pathPart'} onClick={(e)=> e.preventDefault()}>/{pathPart.isVariable ? ':' : null}{pathPart.name}{!pathPart.isRequired ? '?' : null}</span>
        );
      });

  }//end buildPathElement
}