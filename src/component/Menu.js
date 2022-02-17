import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class Menu extends Component {
  render() {
    return <div>
            <Link to="/">Home</Link>
            <Link to="/form">ApplicationForm</Link>
            <Link to="/list">List</Link>
    </div>;
  }
}

export default Menu;
