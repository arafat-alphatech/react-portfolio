import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from "axios";

import { connect } from "unistore/react";
import { actions } from "../store";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

class Histories extends Component {

    state = {
        datas: []
    }
   
    getDataHistory = (token) => {
        let url = "http://localhost:5000/api/users/cart?status=True"
        let auth = "Bearer " + token
        let self = this
        
        axios
        .get(url, { headers: { "Authorization": auth } })
        .then((res) => {
            self.setState({
                datas: res.data
            })
            console.log(this.state)
        })
        .catch((err) => {
            console.log(err)
        })  
    }

    componentDidMount(){
        this.getDataHistory(this.props.token)
    }

    render() {
        let datas = this.state.datas
        return (
            <div>
                <NavBar/>
                    <div className="container">
                        <div className='row' style={{paddingTop: 80, paddingBottom: 100}}>
                            <div className="col-sm-12">
                                <div className="card mt-3 mb-3">
                                    <div className="card-body">
                                        <h4 className="text-center">Data History Belanja Anda</h4>
                                        <hr/>
                                        {
                                            datas.map((item, key) => {
                                                return (
                                                    <div key={key}>
                                                        <h5>Waktu: {item.updatedAt}</h5>
                                                        <h6>Total Buku: {item.total_qty}</h6>
                                                        <h6>Total Biaya: Rp. {item.total_price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h6>
                                                        <h5>Barang-barang yang di beli:</h5>
                                                        {
                                                            item.datas.map((i, k) => {
                                                                return (
                                                                    <div className="row" key={k}>
                                                                        <div className="col-sm-6">
                                                                            {i['buku.judul']}
                                                                        </div>
                                                                        <div className="col-sm-3 text-center">
                                                                            {i.qty} &nbsp;
                                                                        </div>
                                                                        <div className="col-sm-3">
                                                                            Rp {parseInt(i.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                                                                        </div>
                                                                    </div>
                                                                    )
                                                            })
                                                        }
                                                        <br/>
                                                    </div>
                                                )
                                            })
                                        }
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

export default connect("listBooks, token, type, name, is_login, cart", actions)(withRouter(Histories))