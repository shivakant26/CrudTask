import React, { Component } from 'react';
import Menu from './Menu';


export class Header extends Component {
  render() {
    return <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-4 logo'>
            <h2>Task2</h2>
            </div>
            <div className='col-md-8 menust'>
            <Menu />
            </div>
        </div>
        
        
    </div>;
  }
}

export default Header;
