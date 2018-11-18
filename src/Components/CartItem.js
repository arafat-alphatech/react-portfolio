import React, { Component } from "react";
import "../App.css";

import { withRouter} from 'react-router-dom' 
import { connect } from "unistore/react";
import { actions } from "../store";

class CartItem extends Component {

    tambahHandle(action){
        if(window.confirm('Apakah anda yakin?')){
            this.props.updateCart(this.props.id_buku, this.props.token, action)
            this.props.perubahanQty(this.props.id_buku, action)
            console.log(this.props.qty)
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-8">
                    {this.props.judul}
                </div>
                <div className="col-sm-4">
                    <a href='#' title="Kurangi" onClick={() => this.tambahHandle('kurang_qty')} ><i className="fas fa-minus"></i></a> &nbsp;
                    {this.props.qty} &nbsp;
                    <a href='#' title="Tambah" onClick={() => this.tambahHandle('tambah_qty')} ><i className="fas fa-plus"></i></a>
                    &nbsp;&nbsp;

                    Rp {parseInt(this.props.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                    &nbsp;&nbsp;
                    <a href='#' title="Hapus dari cart" onClick={() => this.tambahHandle('delete')} ><i className="fas fa-trash-alt"></i></a>
                </div>
            </div>
        );
    }
}

export default connect("listBooks, login_failed ,token, is_login, type, cart", actions)(withRouter(CartItem))
