import * as React from 'react';
import {FlattenObject} from "helpers/helpers";

import BodyItem from './bodyItem';

export default class JsonVisualizer extends React.Component{
  constructor (props){
    super(props);

    //placeholder until more functionality
    let side = this.props.integrationSide;

  }//end constructor

  async render (){
    let body = await FlattenObject.flatten(this.props.body, this.props.contentSource);
    
    console.log(body);

    return (
      <div className={'jsonVisualizer_area'}>
        <div>
          <h2>{this.props.contentSource} Object</h2>
        </div>
        <ul className={'jsonVisualizer'}>
          {body.map((item, i) => {
            return <BodyItem item={item} handleMappingSelection={this.props.handleMappingSelection} />
          })}
        </ul>
      </div>
    )
  }//end render

}