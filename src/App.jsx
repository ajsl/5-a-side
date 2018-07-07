import React from 'react';
import Header from "./Components/Header";
import List from "./Containers/List";
import Skill from "./Containers/Skill";
import Footer from "./Components/Footer";
import FourOhFour from "./Components/FourOhFour";



import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";



const App = () => (

  

  <React.Fragment><section  style={{ backgroundImage: `url($image)`} } className="wrapper">

    <Header />

    <Router>

      <Switch>

        <Route exact path="/" component={ List } />

        <Route exact path="/skill" component={ Skill } />

        <Route path ="/*" component={ FourOhFour } />

      </Switch>  

    </Router>  

    <Footer />



 </section></React.Fragment>



);


export default App;
