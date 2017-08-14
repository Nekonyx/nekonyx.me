import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from '../Home';
import Footer from '../Footer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="flex">
          <div className="root animated">
            <div className="content animated fadeIn">
              <Switch>
                <Route path={'/'} exact component={Home} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
