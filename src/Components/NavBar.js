import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from "axios";

import { connect } from "unistore/react";
import { actions } from "../store";
import ModalCart from "./ModalCart"

class NavBar extends Component {

    getCartData(token){
        if(token != ''){
            this.props.getCartData(token)
        }
    }

    componentWillMount(){
        this.getCartData(this.props.token)
    }

    render() {
        // console.log("is login: ", this.props.is_login)
        return (
            <div>

            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <div className="logo-box">
                    <Link to="/">Get The Books</Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={(e) => this.props.handleSearch(e.target.value)} aria-label="Search" />
                </form>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        {
                            this.props.is_login ? 
                            ""  
                            :
                            <li className="nav-item">
                                <Link to="/signin" className="nav-link">Sign In</Link>
                            </li> 
                        }
                        {
                            this.props.is_login ? 
                            ""  
                            :
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link">Sign Up</Link>
                            </li>

}
                        {
                            this.props.is_login ? 
                            <li className="nav-item">
                                <a href="#" data-toggle="modal" data-target="#exampleModal" className="nav-link" onClick={() => this.getCartData(this.props.token)}>Cart</a>
                            </li>
                            :
                            ""  
                            
                        }
                        {
                            this.props.is_login ?
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                            </li>
                            :
                            ""
                        }
                        {
                            this.props.is_login ? 
                            <li className="nav-item">
                                <Link to="/" className="nav-link" onClick={() => this.props.handleLogout()} >Sign Out</Link>
                            </li>
                            :
                            ""  
                        }
                    </ul>
                </div>
            </nav>
            <ModalCart/>

            </div>
        )
    }
}

// export default NavBar;
export default connect("listBooks, token, type, is_login, cart", actions)(withRouter(NavBar))