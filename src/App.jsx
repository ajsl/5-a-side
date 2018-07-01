import React from 'react';
import Header from "./Components/Header";
import List from "./Containers/List";
import Team from "./Containers/Team";
import Footer from "./Components/Footer";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";


const App = () => (

  <React.Fragment>

    <Header />

    <Router>

      <Switch>

        <Route exact path="/" component={ List } />

        <Route exact path="/team" component={ Team } />
      
      </Switch>  

    </Router>  

    <Footer />


  </React.Fragment>



);


export default App;
