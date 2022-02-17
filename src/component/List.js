import React, { Component } from 'react';
import{Table,Button} from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import {toast} from 'react-toastify';
import { useParams } from "react-router-dom";

toast.configure();

export class List extends Component {

    constructor(props){
        super(props);
        this.state={
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            phone: "",
            redirect: null,
            list:[]
        }
    }
    componentDidMount() {
        
        let list = JSON.parse(localStorage.getItem("test"))
        if (list) {
            this.setState({
                list
            })
        } else {
            alert("record not Found");
        }
    }
    Edit(item,i) {
        this.setState({
            item:item,
            id:i,
            redirect: `/form/${i}`,
            firstname: item.firstname,
            lastname: item.lastname,
            email: item.email,
            password: item.password,
            phone: item.phone,
        })  
       
    }
    delete(i) {
        var result = window.confirm("Want to delete?");
        if (result === true) {
        var list = JSON.parse(localStorage.getItem("test"));
        list.splice(i,1);
        this.setState({
            list
        });
        localStorage.setItem("test",JSON.stringify(list)); 
        toast.warning('Delete Seccussfully',
           {position: toast.POSITION.TOP_RIGHT});
        }else{
            return false;
        }
         
    }
  render() {
    if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
    return (
      <div className='container'>
          <h2>Table of Record</h2>
          <div className='row'>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Phone</th>
                                        <th colSpan="2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            <tr key={i}>
                                                <td>{i}</td>
                                                <td>{item.firstname}</td>
                                                <td>{item.lastname}</td>
                                                <td>{item.email}</td>
                                                <td>{item.password}</td>
                                                <td>{item.phone}</td>
                                                <td><Button onClick={() => { this.Edit(item,i) }}>Edit</Button></td>
                                                <td><Button onClick={() => { this.delete(i) }}>Delete</Button></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        :
                        <p>No Record</p>
                }

            </div>
      </div>
    )
  }
}

export default (props) => (
    <List
        {...props}
        params={useParams()}
    />
);
