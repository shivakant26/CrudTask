import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
export class PageNotFound extends Component {
  constructor() {
    super();
    this.state = {
      redirect:""
    }
  }

render() {
setTimeout(function redirect(){
  this.setState({
  redirect:"/"
  })
},3000);
  return <div className='container'>
    <h1>404 PageNotFound</h1>
    <p>Page Redirect in 3 Second...</p>
  </div>;
}
}

export default PageNotFound;

