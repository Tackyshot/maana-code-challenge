import * as React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './home/home';
import AddEndpoint from "./addEndpoint/addEndpoint";
import AddIntegration from "./addIntegration/addIntegration";

export default class IndexComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/addEndpoint" component={AddEndpoint}/>
          <Route path={"/addIntegration"} component={AddIntegration} />
        </div>
      </Router>
    )
  }//end render
}