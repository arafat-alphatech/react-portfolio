import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from "unistore/react";
import { actions } from "../store";

import NavBar from "./NavBar";
import Footer from "./Footer"

class ContentDetail extends Component {
        
    componentWillMount = () => {
        let id = this.props.match.params.id
        this.props.getBook(id)
        console.log(this.props)
    }
    render(){

        // console.log(this.props.match.params.id)
        const route = '/detail/' + this.props.match.params.id
        const book = this.props.book
        return (
            <div>
                <NavBar />
                <div className="container">
                    <div className="row" style={{paddingTop: 100, paddingBottom: 100}}>

                        <div className='card col-sm-12 col-xs-12'>
                              
                            <div className="mt-3 mb-3" style={{ height: "100%" }}>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img className="card-img-top" src={book.url_picture} alt="Card image cap"/>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-body" style={{ padding: 0 }}>
                                            <h6 className='product-title f25'>
                                                {book.judul}
                                            </h6>
                                            <h6 className='product-author'> oleh {book.author} </h6>
                                            <h6 className='product-price'> Rp. { (book.harga.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')) }</h6>
                                            <table className='table'>
                                                <tbody>
                                                    <tr>
                                                        <td>ISBN</td>
                                                        <td>{book.isbn}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Penerbit</td>
                                                        <td>{book.penerbit}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Kategori</td>
                                                        <td>{book["kategori_buku.kategori"]}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pelapak</td>
                                                        <td>{book["users.name"]}</td>
                                                    </tr>   
                                                </tbody>
                                            </table>
                                        </div>  
                                        <Link to={route} className="btn btn-outline-primary mb-2 my-sm-0 mx-5">Tambah Keranjang</Link>
                                        <br/>
                                    </div>
                                        
                                </div>  

                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}

export default connect("listBooks, book, token, type, is_login", actions)(withRouter(ContentDetail))
