import * as React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import Home from './home/home';
import AddEndpoint from "./addEndpoint/addEndpoint";
import AddIntegration from "./addIntegration/addIntegration";

const client = new ApolloClient({
  uri: 'http://localhost:3000/api'
});

export default class IndexComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <ApolloProvider client={client} >
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/addEndpoint" component={AddEndpoint}/>
            <Route path={"/addIntegration"} component={AddIntegration} />
          </div>
        </ApolloProvider>
      </Router>
    )
  }//end render
}