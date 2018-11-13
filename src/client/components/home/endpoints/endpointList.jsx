import * as React from 'react';
import {css} from 'aphrodite';
import {graphql} from 'react-apollo';
import EndpointsQuery from 'queries/endpoints.query';
import GlobalStyles from 'styles/global.css';

class Endpointlist extends React.Component{
  constructor (props){
      super(props);
  }//end constructor
  
  render (){
    console.log('EndpointsList Props:', this.props);

    return (
      <ul className={css(GlobalStyles.ul)}>
        {this.displayEndpoints()}
      </ul>
    )
  }//end render

  displayEndpoints (){
    let data = this.props.data;

    if(data.loading){
      return( <li>Loading endpoints</li> );
    } else {
      return data.getEndpoints.map(endpoint => {
        return(
          <li key={`${endpoint.id}-endpoint`} value={endpoint.id} className={css(GlobalStyles.li)}>{endpoint.api.requestMethod} {endpoint.hostname}</li>
        );
      });
    }
  }//end displayEndpoints
}

export default graphql(EndpointsQuery)(Endpointlist);