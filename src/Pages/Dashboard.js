import React, { Component } from "react";
import { Link , withRouter} from 'react-router-dom';

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import { connect } from "unistore/react";
import { actions } from "../store";
import "../App.css";
import "../Styles/Dashboard.css"

class Dashboard extends Component {
    render() {
      return (
          <div >
              <NavBar />
              <div className="dashboard-page container">
                    <div className="row">

                        <div className='col-md-6 dashboard-item shadow-lg p-3 mb-5 bg-white rounded'>    
                            <div className="card text-white bg-info mb-3 ml-auto mr-auto shadow-lg p-3 mb-5 rounded" style={{width: "18rem"}}>
                                <h5 className="card-header">My Products</h5>
                                <img className="card-img-top" src="https://www.w3schools.com/bootstrap/la.jpg" alt="Card cap"/>
                                <div className="card-body text-center">
                                    <Link to="/dashboard/productlist" className='btn btn-outline-light' >All My Books</Link>
                                </div>
                            </div>
                        </div>
                   

                        <div className='col-md-6 dashboard-item shadow-lg p-2 mb-5 bg-white rounded'>
                            <div className="card text-white bg-danger mb-3 ml-auto mr-auto shadow-lg p-3 mb-5 rounded" style={{width: "18rem"}}>
                                <h5 className="card-header">My Profile</h5>
                                <img className="card-img-top" src="https://www.w3schools.com/bootstrap/la.jpg" alt="Card cap"/>
                                <div className="card-body text-center">
                                <Link to="/dashboard/profile" className='btn btn-outline-light'> See Profile </Link>
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

export default connect("listBooks, login_failed, token, is_login, type", actions)(withRouter(Dashboard))
