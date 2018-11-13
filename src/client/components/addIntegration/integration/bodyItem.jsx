import * as React from 'react';
import {css} from 'aphrodite';
import GlobalStyles from 'styles/global.css';
import IntegrationStyles from 'styles/addIntegration.css';

export default class RequestBody extends React.Component{
  constructor (props){
    super(props);

    this.handleMappingSelection = this.handleMappingSelection.bind(this);
  }//end constructor

  render (){
    let item = this.props.item;
    let path = item.pathname;
    let pathArr = path.split('.');
    let key = pathArr[pathArr.length-1];
    let value = item.value;
    let contentInfo = this.buildContentInfo(key, value);
    let mappingIndex = this.props.mappingIndex;

    //todo: add below features
      // - indentation / proper spacing for children
      //replace keyname values
      //disable/enable selectability based on type

    return (
      <li
        className={css(GlobalStyles.li, IntegrationStyles[contentInfo.isSelectable ? "jsonVisualizer_list_item" : null])}
        onClick={this.handleMappingSelection}
      >
        <span>{this.displayIntentation(pathArr)}</span>
        <span>{contentInfo.content}</span>
        <span className={css(IntegrationStyles.mapping_indicator)}>{mappingIndex > -1 ? (mappingIndex + 1) : null}</span>
      </li>
    )
  }//end render

  buildContentInfo (key, value){
    let isSelectable = true;
    let content = `${key} : ${value},`;

    if(value === '__object') {
      content =`${key} : {`
    }

    if(value === '__object-close'){
      content = '},';
      isSelectable = false;
    }

    if(value === '__array') {
      content =`${key} : [`
    }

    if(value === '__array-close') {
      content = '],';
      isSelectable = false;
    }

    return {
      content: content,
      isSelectable: isSelectable
    };
  }//end cleanValue
  
  displayIntentation (pathArr){
    return (
      <span>
        {pathArr.map((item, i) => {
          return <span key={`indent-${i}-${item}`}>&nbsp;&nbsp;&nbsp;&nbsp;</span>;
        })}
      </span>
    );
  }//end displayIntentation

  handleMappingSelection (e){
    this.props.handleMappingSelection(this.props.item.pathname, this.props.intSide, this.props.mappingIndex);
  }//end handleMappingSelection
}