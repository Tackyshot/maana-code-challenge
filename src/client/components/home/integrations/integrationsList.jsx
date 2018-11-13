import * as React from 'react';
import {graphql} from 'react-apollo';
import IntegrationsQuery from 'queries/integrations.query';
import {css} from 'aphrodite';

import GlobalStyles from 'styles/global.css';
import HomeStyles from 'styles/home.css';

class IntegrationsList extends React.Component{
  constructor (props){
      super(props);
  }//end constructor

  render (){
      return (
        <ul className={css(GlobalStyles.ul)}>
          {this.displayIntegrations()}
        </ul>
      )
  }//end render

  displayIntegrations (){
    let data = this.props.data;

    if(data.loading){
      return( <li>Loading Integrations</li> );
    } else {

      console.log('displayIntegrations:', data.getIntegrations);
      return data.getIntegrations.map(integration => {
        return(
          <li
            key={`${integration.id}-integration`}
            className={css(GlobalStyles.li, GlobalStyles.column)}
          >
            <h3>Mappings: EndpointAId: {integration.endpointAId} => EndpointBId: {integration.endpointBId}</h3>
            <ul className={css(GlobalStyles.ul, HomeStyles.mapping_ul)}>
              {integration.mappings.map((mapping, i) => {
                return (
                  <li
                    key={`mapping-${i}`}
                    className={css(GlobalStyles.li, HomeStyles.mapping_li)}
                  >
                    <span className={css(HomeStyles.mapping_li_pathA)}>{mapping.pathA}</span>
                    <span className={css(HomeStyles.mapping_li_arrow)}>=></span>
                    <span className={css(HomeStyles.mapping_li_pathB)}>{mapping.pathB}</span>
                  </li>
                )
              })}
            </ul>
          </li>
        );
      });
    }
  }//end displayIntegrations
}

export default graphql(IntegrationsQuery)(IntegrationsList)