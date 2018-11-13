import * as React from 'react';
import {graphql} from 'react-apollo';
import IntegrationsQuery from 'queries/integrations.query';
import {css} from 'aphrodite';

import GlobalStyles from 'styles/global.css';

class IntegrationsList extends React.Component{
  constructor (props){
      super(props);
  }//end constructor

  render (){
      return (
        <ul className={css(GlobalStyles.ul)}>
          <li className={css(GlobalStyles.li)}>Integration List item</li>
        </ul>
      )
  }//end render
}

export default graphql(IntegrationsQuery)(IntegrationsList)