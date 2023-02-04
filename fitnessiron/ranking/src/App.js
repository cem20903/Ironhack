import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Ranking from './Ranking/Ranking'
import Ejercises from './FormEj/FormEj'
import SingUp from './SignUp/SignUp'
import FormEj from './FormEj/FormEj'


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Ranking} />
        <Route exact path="/ejercises" component={Ejercises} />
        <Route exact path="/signup" component={SingUp} />
        <Route exact path="/formej" component={FormEj} />
    </Router>
    );
  }
}

export default App;
