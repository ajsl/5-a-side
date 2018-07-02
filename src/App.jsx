import React from 'react';
import Header from "./Components/Header";
import List from "./Containers/List";
import Team from "./Containers/Team";
import Skill from "./Containers/Skill";
import Footer from "./Components/Footer";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";


const App = () => (

  <React.Fragment><section className="wrapper">

    <Header />

    <Router>

      <Switch>

        <Route exact path="/" component={ List } />

        <Route exact path="/team" component={ Team } />

        <Route exact path="/skill" component={ Skill } />
      
      </Switch>  

    </Router>  

    <Footer />


 </section></React.Fragment>



);


export default App;
