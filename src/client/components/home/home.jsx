import * as React from 'react';
import {Link} from 'react-router-dom';
import EndpointList from './endpoints/endpointList';
import IntegrationsList from "./integrations/integrationsList";
import {css} from 'aphrodite';

import GlobalStyles from 'styles/global.css';
import HomeStyles from 'styles/home.css';

export default class Home extends React.Component{
  constructor (props){
      super(props);

      console.log('HOME PROPS:', this.props);
  }//end constructor

  render (){
      return (
        <div className={css(GlobalStyles.column, HomeStyles.home_page)}>
          <h1 className={css(GlobalStyles.h1, GlobalStyles.home_header)}>Integrations Builder</h1>
          <hr className={css(GlobalStyles.hr)}/>

          <div className={css(GlobalStyles.column, GlobalStyles.subsection)}>
            <div className={css(HomeStyles.subsection_header_area)}>
              <div className={'subsection_title_area'}>
                <h2 className={css(GlobalStyles.h2, HomeStyles.subsection_header)}>Endpoints</h2>
              </div>
              <div className={css(HomeStyles.subsection_button_area)}>
                <Link
                  to={`/addEndpoint`}
                  className={css(GlobalStyles.link_btn, HomeStyles.add_endpoint_btn)}
                >+ Add
                </Link>
              </div>
            </div>

            <EndpointList/>
          </div>

          <div className={css(GlobalStyles.column, HomeStyles.subsection)}>
            <div className={css(HomeStyles.subsection_header_area)}>
              <div className={'subsection_title_area'}>
                <h2 className={css(GlobalStyles.h2, HomeStyles.subsection_header)}>Integrations</h2>
              </div>
              <div className={css(HomeStyles.subsection_button_area)}>
                <Link to={`/addIntegration`} className={css(GlobalStyles.link_btn, HomeStyles.add_integration_btn)}>+ Add</Link>
              </div>
            </div>

            <IntegrationsList/>
          </div>
        </div>
      )
  }//end render
}