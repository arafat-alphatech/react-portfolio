import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import axios from "axios";
import { withRouter } from 'react-router-dom' 

import "../App.css";
import { connect } from "unistore/react";
import { actions } from "../store";



class Profile extends Component {
    state = {
        user_data: []
    }

    componentDidMount = () => {
        const url = "https://apiportfolio-api-heroku.herokuapp.com/api/users/me"
        const auth = "Bearer " + this.props.token
        const self = this
        axios
        .get(url, {headers: {"Authorization": auth} })
        .then((response) => {
            self.setState({
                user_data: response.data,
            })
            // console.log("Response user data: ", response)
        })
        .catch((err) => {
            console.log(err)
        })
        
    }
    
    render() {

        return (
        <div>
            <NavBar />
            <div className="testing-purpose">
                <div className="container">
                    <div className="col-sm-8 offset-sm-2 text-center">
                        <div className='card card-profile'>
                            <div className="row">
                                <img alt='background' className='card-img-top' src='https://unsplash.it/340/160?image=354' />
 
                                <div className="col-sm-12">
                                    <div className='card-block'>
                                        <div className='card-title mt-3'>
                                            <h2> <i className="fas"> {this.state.user_data.name}</i></h2>
                                            <h5> <i className="fas fa-envelope"> {this.state.user_data.email}</i></h5>
                                            <h5> <i className="fas fa-phone-square"> {this.state.user_data.no_telp}</i> </h5>
                                            <h5> <i className="fas fa-map-marker-alt"> {this.state.user_data.alamat}</i></h5>
                                        </div>
                                    </div>
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

export default connect("listBooks, login_failed, token, is_login, type", actions)(withRouter(Profile))