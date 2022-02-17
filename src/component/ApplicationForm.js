import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
export class ApplicationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            phone: "",
            firstnamemsg: "",
            lastnamemsg: "",
            emailmsg: "",
            passwordmsg: "",
            phonemsg: "",
            redirect: null,
            data: [],
            id: props.match.params.id,
        }
    }

    valid() {
        if ((this.state.firstname === "" || this.state.firstname === undefined) &&
            (this.state.lastname === "" || this.state.lastname === undefined) &&
            (this.state.email === "" || this.state.email === undefined) &&
            (this.state.password === "" || this.state.password === undefined) &&
            (this.state.phone === "" || this.state.phone === undefined)
        ) {
            this.setState({
                firstnamemsg: "Firstname Required*",
                lastnamemsg: "Lastname Required*",
                emailmsg: "Email Required*",
                passwordmsg: "Password Required*",
                phonemsg: "Phone Required*",
            });

        } else if ((this.state.firstname === "") || (this.state.firstname === undefined)) {
            this.setState({ firstnamemsg: "Firstname Required*" });
        }
        else if ((this.state.lastname === "") || (this.state.lastname === undefined)) {
            this.setState({ lastnamemsg: "Lastname Required*" });
        }
        else if ((this.state.email === "") || (this.state.email === undefined)) {
            this.setState({ emailmsg: "Email Required*" });
        }
        else if ((this.state.password === "") || (this.state.password === undefined)) {
            this.setState({ passwordmsg: "Password Required*" });
        }
        else if ((this.state.phone === "") || (this.state.phone === undefined)) {
            this.setState({ phonemsg: "Phone Required*" });
        }
        else {
            return true;
        }
    }
    submit(e) {
        e.preventDefault();
        this.setState({
            firstnamemsg: "",
            lastnamemsg: "",
            emailmsg: "",
            passwordmsg: "",
            phonemsg: "",
        });

        if (this.valid()) {
            var items = JSON.parse(localStorage.getItem("test"));
            let data = items ? items : []
            var user={
                
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    email: this.state.email,
                    password: this.state.password,
                    phone: this.state.phone,

            }
            if(this.state.id){
                data.splice(this.state.id,1,user)
                toast('Record Update Seccussfully',
                { position: toast.POSITION.TOP_CENTER });

            }else{
                data.push(user);
                toast('Record Insert Seccussfully',
                { position: toast.POSITION.TOP_CENTER });
            } 
            console.log("result", data);
            localStorage.setItem("test", JSON.stringify(data));
            JSON.parse(localStorage.getItem("test"));
            this.setState({
                list: data,
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                phone: "",
            })
            document.getElementById('myform').reset();
            this.setState({ redirect: "/list" });
        }
    }
   
    componentDidMount() {

        if (this.state.id) {
            var items = JSON.parse(localStorage.getItem("test"));
            var obj = items[this.state.id];
            this.setState({
                id: this.state.id,
                firstname: obj.firstname,
                lastname: obj.lastname,
                email: obj.email,
                password: obj.password,
                phone: obj.phone,
                list: items
            })
        }

    }
    render() {
        console.log("render");
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                </div>
                <div className='col-md-4 form'>
                    <h1>Application Form</h1>
                    <Form id="myform">
                        <Form.Group className="mb-3" controlId="firstname">
                            <Form.Control type="text"
                                placeholder="FirstName"
                                value={this.state.firstname}
                                onChange={(e) => { this.setState({ firstname: e.target.value }) }}
                            />
                            <span className='error'>{this.state.firstnamemsg}</span>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="lastname">
                            <Form.Control type="text"
                                placeholder="Last Name"
                                value={this.state.lastname}
                                onChange={(e) => { this.setState({ lastname: e.target.value }) }}
                            />
                            <span className='error'>{this.state.lastnamemsg}</span>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control type="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={(e) => { this.setState({ email: e.target.value }) }}
                            />
                            <span className='error'>{this.state.emailmsg}</span>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Control type="Password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={(e) => { this.setState({ password: e.target.value }) }}
                            />
                            <span className='error'>{this.state.passwordmsg}</span>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Control type="text"
                                placeholder="Phone"
                                value={this.state.phone}
                                onChange={(e) => { this.setState({ phone: e.target.value }) }}
                            />
                            <span className='error'>{this.state.phonemsg}</span>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e) => { this.submit(e) }}>
                            {
                                this.state.id == null ? "Submit" : "Update"
                            }
                        </Button>
                        
                    </Form>
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>;
    }

}

export default ApplicationForm;

