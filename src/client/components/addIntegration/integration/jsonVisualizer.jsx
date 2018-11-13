import * as React from 'react';
import {FlattenObject} from "helpers/helpers";
import {css} from 'aphrodite';
import GlobalStyles from 'styles/global.css';
import IntegrationStyles from 'styles/addIntegration.css';

import BodyItem from './bodyItem';

export default class JsonVisualizer extends React.Component{
  constructor (props){
    super(props);

  }//end constructor

  render (){
    let body = !!this.props.body ? FlattenObject.flatten(this.props.body, this.props.contentSource) : [];
    
    return (
      <div className={css(GlobalStyles.column, IntegrationStyles.jsonVisualizer_area)}>
        <div className={css(GlobalStyles.block)}>
          <h2>{this.props.contentSource} Object</h2>
        </div>
        <div className={css(GlobalStyles.block)}>
          <ul className={css(GlobalStyles.ul, IntegrationStyles.jsonVisualizer_list)}>
            <li className={css(GlobalStyles.li)}>{'{'}</li>
            {body.map((item, i) => {
              let mappingIndex = this.findRelevantMapping(item);

              return (
                <BodyItem
                  key={`BodyItem-${i}`}
                  intSide={this.props.intSide}
                  item={item}
                  mappingIndex={mappingIndex}
                  handleMappingSelection={this.props.handleMappingSelection}
                />
              )
            })}
            <li className={css(GlobalStyles.li)}>{'}'}</li>
          </ul>
        </div>
      </div>
    )
  }//end render

  findRelevantMapping (item){
    let mappings = this.props.integration.mappings;

    return mappings.findIndex((mapping, i) => {
      return mapping[`path${this.props.intSide.toUpperCase()}`] === item.pathname;
    });

  }//end findRelevantMapping
}