import * as React from 'react';
import {Link} from 'react-router-dom';
import EndpointList from './endpoints/endpointList';
import IntegrationsList from "./integrations/integrationsList";

export default class Home extends React.Component{
  constructor (props){
      super(props);

      console.log('HOME PROPS:', this.props);
  }//end constructor

  render (){
      return (
        <div>
          <h1 className={'home_header'}>Integrations Builder</h1>
          <hr className={'home_hr'}/>

          <div className={'subsection'}>
            <div className={'subsection_header_area'}>
              <div className={'subsection_title_area'}>
                <h2 className={'subsection_header'}>Endpoints</h2>
              </div>
              <div className={'subsection_button_area'}>
                <Link to={`/addEndpoint`} className={'subsection_button'}>+ Add</Link>
              </div>
            </div>

            <EndpointList/>
          </div>

          <div className={'subsection'}>
            <div className={'subsection_header_area'}>
              <div className={'subsection_title_area'}>
                <h2 className={'subsection_title'}>Integrations</h2>
              </div>
              <div className={'subsection_button_area'}>
                <button className={'subsection_button'}>+ Add</button>
              </div>
            </div>

            <IntegrationsList/>
          </div>
        </div>
      )
  }//end render
}