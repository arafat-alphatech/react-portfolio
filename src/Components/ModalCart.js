import React, { Component } from "react";
import "../App.css";

import CartItem from "./CartItem"
import { withRouter} from 'react-router-dom' 
import { connect } from "unistore/react";
import { actions } from "../store";

class ModalCart extends Component {
     
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
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect("listBooks, login_failed ,token, is_login, type, cart", actions)(withRouter(ModalCart))
