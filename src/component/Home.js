import React, { Component } from 'react';
import { toast } from 'react-toastify';

export class Home extends Component {
  
  render() {
    return <div className='container'>
      <div className='home-wr'>
        <div className='home-heading'>
        <h1>About CRUD operation</h1>
        </div>
        <div className='home-data'>
          <p>CRUD stands for create, read, update and delete. These are the four basic 
            functions of persistent storage. Also, each letter in the acronym can refer
            to all functions executed in relational database applications and mapped to
            a standard HTTP method, SQL statement or DDS operation.</p>
          <p>It can also describe user-interface conventions that allow viewing, searching 
            and modifying information through computer-based forms and reports. In essence, 
            entities are read, created, updated and deleted. Those same entities can be modified
            by taking the data from a service and changing the setting properties before sending
            the data back to the service for an update.
            Plus, CRUD is data-oriented and the standardized use of HTTP action verbs.</p>
            <p>Most applications have some form of CRUD functionality. In fact, every programmer
              has had to deal with CRUD at some point. Not to mention, 
              a CRUD application is one that utilizes forms to retrieve and return data from a database.
              The first reference to CRUD operations came from Haim Kilov in 1990 in an article titled,
              “From semantic to object-oriented data modeling.” However, the term was first made popular
               by James Martin’s 1983 book,Managing the Data-base Environment. Here’s a
                breakdown:</p>
        </div>
      </div>
        
        
    </div>;
  }
}

export default Home;

