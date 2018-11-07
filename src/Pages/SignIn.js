import React, { Component } from "react";
import { Link, withRouter, Redirect } from 'react-router-dom' 

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import "./SignIn.css";

import { connect } from "unistore/react";
import { actions } from "../store";

class SignIn extends Component {
	state = {
		username: '',
		password: ''
	}

	inputChange = (e) => {
		this.setState({ [e.target.name]: e.target.value})
		console.log(e.target.value)
	}
	

	render() {
		if (this.props.is_login){
			return <Redirect to={{pathname: "/"}} />
		} 
		
		return (
	  
	  	<div>
			<NavBar />
			  
			<div id='SignIn' className="container">
				
				<div className="container">
					<div className="row">
						<div className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-5">
							<div className="card card-signin mt-5">
								<div className="card-body">
									<div className="text-center">  
										<h5 className="card-title" style={{marginTop: 10}}>Get The Books Signin</h5>
									</div>
									<form className="form-signin" onSubmit={(e) => e.preventDefault()}>
										<div className="form-label-group">
											<input name="username" type="text" className="form-control" placeholder="username" required autoFocus onChange={(e) => this.inputChange(e)}/>
											</div>
										<div className="form-label-group">
											<input name="password" type="password" className="form-control" placeholder="password" required onChange={(e) => this.inputChange(e)}/>
											{
												this.props.login_failed ?
												<small><i className="text-danger">username atau password anda salah!</i></small>
												:
												""
											}
										</div>
										<Link to="/signin" onClick={() => this.props.signInHandle(this.state.username, this.state.password) } className="btn btn-lg btn-primary btn-block text-uppercase">Sign in</Link>
									</form>
								</div>
								<div className="text-center" style={{marginBottom: 20}}>
									<Link to="/signup">Belum punya akun? Daftar di sini!</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	  );
	}
}

// export default SignIn;
export default connect("listBooks, login_failed, token, is_login, type", actions)(withRouter(SignIn))
