import React, { Component } from "react";
import "../App.css";

import CartItem from "./CartItem"
import { Link, withRouter } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../store";
import axios from "axios";

 class ModalCart extends Component {
     
    handleBayar = (token) => {
        let url = "http://localhost:5000/api/users/cart/0"
        let auth = "Bearer " + token
        let body = {
            "action": "bayar"
        }
        let header = { 
            headers: { 
                "Authorization": auth 
            } 
        }
        axios
        .patch(url,body ,header)
        .then((res) => {
            console.log(res)
            alert('Pembayaran berhasil')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="modal fade bd-example-modal-lg" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {
                            this.props.cart.data != undefined ?
                            this.props.cart.data.map((item, key) => {
                                return <CartItem
                                    key= {key}
                                    id_buku = {item['buku.id']}
                                    judul = {item['buku.judul']}
                                    pelapak = {item['buku.users.name']}
                                    id_detail = {item.id}
                                    price = {item.price}
                                    qty = {item.qty}
                                />
                                
                            })
                            :
                            ""
                        }
                        {
                            this.props.cart != undefined ?
                            <div className="text-center mt-5">
                                Total Bayar Rp  {parseInt(this.props.cart.total_price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                            </div>
                            :
                            ""
                        }
                    </div>
                    <div className="modal-footer">
                        <button data-dismiss='modal' className="btn btn-success" onClick={() => this.handleBayar(this.props.token)}>Bayar</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect("listBooks, login_failed ,token, is_login, type, cart", actions)(withRouter(ModalCart))
