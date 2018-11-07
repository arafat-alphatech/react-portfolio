import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Product from "./Product";

import "../App.css";
import { withRouter } from 'react-router-dom' 
import { connect } from "unistore/react";
import { actions } from "../store";

class ProductList extends Component {
    
    componentDidMount = () => {
        this.props.getUserListBooks(this.props.token)
    }

    render() {
        const listBooks = this.props.userListBooks

        return (
            <div >
                <NavBar />
                <div className="container">
                    <div className="row" style={{paddingTop: 80, paddingBottom: 100}}>
                        {
                            listBooks.map((item, key) => {

                                return <Product
                                    key={key}
                                    id = {item.id}
                                    judul = {item.judul}
                                    isbn = {item.isbn}
                                    author = {item.author}
                                    penerbit = {item.penerbit}
                                    ketegori = {item['kategori_buku.kategori']}
                                    harga = {item.harga}
                                    stok = {item.stok}
                                    url_picture = {item.url_picture}
                                    status = {item.status}
                                    createdAt = {item.createdAt}
                                    updatedAt = {item.updatedAt}
                                    pelapak = {item['users.name']}
                                />
                            })
                        }

                    </div>
                </div>
                <Footer />
            </div>
      );
    }
}

export default connect("listBooks, userListBooks, login_failed, token, is_login, type", actions)(withRouter(ProductList))
