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

    handleLogout(){
        this.props.getAllBook(false)
        this.props.handleLogout()
    }

    componentWillMount(){
        if(this.props.type == 'pelapak'){
            this.getCartData(this.props.token)
        }
        this.props.getAllCategory()
    }

    render() {
        return (
            <div>

            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <div className="logo-box">
                    <Link to="/">Get The Books</Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {
                            this.props.match.path == "/" ?
                            <li>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={(e) => this.props.handleSearch(e.target.value)} aria-label="Search" />
                                </form>
                            </li>
                            :
                            ""
                        }
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
                            this.props.is_login && this.props.type == 'pelapak' ? 
                            <li className="nav-item">
                                <a href="#" data-toggle="modal" data-target="#exampleModal" className="nav-link" onClick={() => this.getCartData(this.props.token)}>
                                Cart
                                &nbsp;
                                {
                                    this.props.cart.data != undefined ?
                                    <span className="badge badge-primary">{this.props.cart.data.length}</span>
                                    :
                                    ""
                                }
                                </a>
                            </li>
                            :
                            ""  
                            
                        }
                        {
                            this.props.is_login ?
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dashboard
                                    </a>
                                    {
                                        this.props.type == 'admin' ?
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link className="dropdown-item" to="/user-list">Users List</Link>
                                            <Link className="dropdown-item" to="/new-category">New Category</Link>
                                        </div>
                                        :
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link className="dropdown-item" to="/productlist">My Product</Link>
                                            <Link className="dropdown-item" to="/history">History</Link>
                                            <Link className="dropdown-item" to="/profile">Profile</Link>
                                        </div>
                                    }
                                </li>
                            :
                            ""
                        }
                        {
                            this.props.is_login ? 
                            <li className="nav-item">
                                <span className="nav-link disabled">{this.props.name}</span>
                            </li>
                            :
                            ""  
                        }
                        {
                            this.props.is_login ? 
                            <li className="nav-item">
                                <Link to="/" className="nav-link" onClick={() => this.handleLogout()} >Sign Out</Link>
                            </li>
                            :
                            ""  
                        }
                    </ul>
                </div>
            </nav>
            {
                this.props.type == 'pelapak' ? 
                <ModalCart/>
                :
                ""
            }

            </div>
        )
    }
}

// export default NavBar;
export default connect("listBooks, token, type, name, is_login, cart", actions)(withRouter(NavBar))