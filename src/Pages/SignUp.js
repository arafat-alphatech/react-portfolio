import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import {Link, withRouter} from "react-router-dom";
import "./SignIn.css";
import axios from "axios";

import { connect } from "unistore/react";
import { actions } from "../store";

class SignUp extends Component{
    state = {
        name: '',
        username: '',
        email: '',
        password: '',
        alamat: '',
        no_telp: '',
        usernameExist: false,
        emailExist: false
    }

    // handle data username dan email yang sama dari DB
    inputHandler(name){
        const url = "https://apiportfolio-api-heroku.herokuapp.com/api/users/register"

        const body = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            alamat: this.state.alamat,
            no_telp: this.state.no_telp
        }
        const self = this
        // console.log(name)
        axios
        .post(url + "/" + name, body)
        .then((response) => {
            console.log("Response: ", response)

            if(name === "username" && this.state.usernameExist){
                self.setState({usernameExist: false})            
            }

            if(name === "email" && this.state.emailExist){
                self.setState({emailExist: false})            
            }
        })
        .catch((err) => {
            if(name === "username"){
                self.setState({usernameExist: true})            
            }

            if(name === "email"){
                self.setState({emailExist: true})            
            }
            console.log(err)
        })
    }

    changeInput = e => {
        if(e.target.value.length > 3){
            console.log(e.target.value)
            if(e.target.name === 'username' || e.target.name === 'email' )
            this.inputHandler(e.target.name)
        }

        this.setState({[e.target.name]: e.target.value});
    };

    render(){
        return (
            <div>
            <NavBar/>
                <div className="container">
					<div className="row">
						<div className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-5">
							<div className="card card-signin mt-5">
								<div className="card-body">
									<div className="text-center">  
										<h5 className="card-title" style={{marginTop: 10}}>Get The Books Signup</h5>
									</div>

									<form className="form-signin" onSubmit={e => e.preventDefault()}>
                                        <div className="form-label-group">
                                            <input name="name" type="text" className="form-control" placeholder="name" required autoFocus onChange={(e) => this.changeInput(e)}/>
                                        </div>
                                        <div className="form-label-group">
                                            <input name="username" type="text" className="form-control" placeholder="username" required  onChange={(e) => this.changeInput(e)}/>
                                            <small className='text-danger'><i> { (this.state.usernameExist) ? "*username tidak boleh sama" : ""} </i></small>

                                        </div>
                                        <div className="form-label-group">
                                            <input name="email" type="email" className="form-control" placeholder="email" required  onChange={(e) => this.changeInput(e)}/>
                                            <small className='text-danger'><i> { (this.state.emailExist) ? "*email tidak boleh sama" : ""} </i></small>

                                        </div>
                                        <div className="form-label-group">
                                            <input name="password" type="password" className="form-control" placeholder="password" required onChange={(e) => this.changeInput(e)}/>
                                        </div>
                                        <div className="form-label-group">
                                            <input name="alamat" type="text" className="form-control" placeholder="alamat" required onChange={(e) => this.changeInput(e)}/>
                                        </div>
                                        <div className="form-label-group">
                                            <input name="no_telp" type="text" className="form-control" placeholder="nomor telepon"  onChange={(e) => this.changeInput(e)}/>
                                        </div>
                                        <Link to='/' className="btn btn-lg btn-primary btn-block text-uppercase" onClick={() => this.props.signUpHandle(this.state.name, this.state.username, this.state.email, this.state.password, this.state.alamat, this.state.no_telp)}>Sign up </Link >
									</form>
								</div>
								<div className="text-center" style={{marginBottom: 20}}>
									<Link to="/signin">Sudah punya akun? Signin sini</Link>
								</div>
							</div>
						</div>
					</div>
                    </div>
                <Footer/>
            </div>
        )
    }
}

// export default SignUp;
export default connect("listBooks, token, is_login, type", actions)(withRouter(SignUp))
