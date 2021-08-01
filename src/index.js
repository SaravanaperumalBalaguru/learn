import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router,Route,NavLink,Switch } from 'react-router-dom';
import Home from './Home';
import Product from './Product'
import Introduction from './Introduction';
import Function from './Function';
import State from './state';
import Table from './Table';
import Condition from './Condition';
import Twowaybinding from './Twowaybinding';
import Crud from './Crud';
import Forms from './Forms';
import Event from './Event';

const routing = (
  <Router>
      <div className="jumbotron text-center">
        <h1>React Learning Project</h1>
        <nav className="navbar navbar-expand-sm bg-light">
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link" to="/Home" exact>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Product" exact>Product</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Function" exact>Function</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Table" exact>Table</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/State" exact>State</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Condition" exact>Condition</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Twowaybinding" exact>Twowaybinding</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Crud" exact>Crud</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Forms" exact>Forms</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Event" exact>Event</NavLink></li>
          </ul>
        </nav>
      </div>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/learn" component={Home}/>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/Product" component={Product}/>
      <Route exact path="/Function" component={Function}/>
      <Route exact path="/Table" component={Table}/>
      <Route exact path="/Introduction" component={Introduction}/>
      <Route exact path="/State" component={State}/>
      <Route exact path="/Condition" component={Condition}/>
      <Route exact path="/Twowaybinding" component={Twowaybinding}/>
      <Route exact path="/Crud" component={Crud}/>
      <Route exact path="/Forms" component={Forms}/>
      <Route exact path="/Event" component={Event}/>
    </Switch>
  </Router>
)


ReactDOM.render(routing,document.getElementById('root'));

