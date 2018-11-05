import * as React from 'react';

export default class Hostname extends React.Component{
  constructor (props){
    super(props);
  }//end constructor

  render (){
    return (
      <div>
        <select>
          <option value="get">GET</option>
          <option value="post">POST</option>
        </select>

        <input type="text" placeholder={'Enter your hostname and path here'} value={'http://example.com/api/users/:id'}/>

      </div>
    )
  }//end render
}