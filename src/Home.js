import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
  render(){
  return(
      <div className="container">
          <h2 className="text-center">Welcome to Home Page</h2>
          <ul className="navbar-nav">
              <li><Link to="/Introduction">Introduction</Link></li>
              <li>Router Concept</li>
              <li>Data Binding in Objects</li>
              <li>Data Binding in Arrays</li>
              <li>Data Binding in Nested Arrays</li>
              <li>Data Binding in External Json</li>
              <li>Data Binding in List</li>
              <li>Data Binding in Table</li>
              <li>Data Binding in Card</li>
              <li>Function Component</li>
              <li>Class Component</li>
              <li>State</li>
              <li>Props</li>
              <li>props using parent and child Communication</li>
              <li>Rest and Spread</li>
              <li>Forms</li>
              <li>Add to Cart using increment and Decrement Operations</li>
              <li>Hooks Concept</li>
              <li>Axios Concept</li>
              <li>Redux Concept</li>
          </ul>

          <br/><br/><br/>  
          <footer>
          </footer>
      </div>
  )
}
}


export default Home;