import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from "unistore/react";
import { actions } from "../store";
import axios from "axios";

import "./SignIn.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer"

class ProductDetail extends Component {
    state = {
        judul: '',
        author: '',
        penerbit: '',
        harga: 0,
        isbn: '',
        stok: 0,
        kategori: 0
    }
    
    book = []
    updateUserBook = () => {
        let id = this.props.match.params.id
        this.props.getBook(id)
        this.book = this.props.book
        
        this.setState({
            judul: this.book.judul,
            author: this.book.author,
            penerbit: this.book.penerbit,
            harga: parseInt(this.book.harga),
            isbn: this.book.isbn,
            stok: parseInt(this.book.stok),
            kategori: parseInt(this.book.kategori)
        })
    
        console.log(this.book)
    }

    componentDidMount = () => {
        this.updateUserBook()
    }

    changeInput = e => {
        this.setState({[e.target.name]: e.target.value});
        // console.log(this.state)
    };

    saveProduct = (id) => {
        console.log(this.state)
        const body = {
            judul: this.state.judul,
            author: this.state.author,
            penerbit: this.state.penerbit,
            harga: this.state.harga,
            kategori: this.state.kategori,
            isbn: this.state.isbn
        }
        const url = "https://apiportfolio-api-heroku.herokuapp.com/api/users/items/" + id
        const auth = "Bearer " + this.props.token
        const header = {
            "Authorization": auth,
            "Access-Control-Allow-Origin": "*"
        }

        console.log(body)
        axios
        .patch(url, body, { headers: header })
        .then((response) => {
            this.updateUserBook()
            alert("Update sukses")
            console.log("Response update: ", response)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    delProduct = (id) => {
        const url = "https://apiportfolio-api-heroku.herokuapp.com/api/users/items/" + id
        const auth = "Bearer " + this.props.token
        const header = {
            "Authorization": auth,
            "Access-Control-Allow-Origin": "*"
        }

        axios
        .delete(url, { headers: header })
        .then((response) => {
        
            alert("Delete sukses")
            console.log("Response update: ", response)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        const route = '/productlist'
        return (
            <div>
                <NavBar />
                <div className="container">
                    <div className="row" style={{paddingTop: 100, paddingBottom: 100}}>

                        <div className='card col-sm-12 col-xs-12'>
                              
                            <div className="mt-3 mb-3" style={{ height: "100%" }}>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img className="card-img-top" src={this.book.url_picture} alt="Card image cap"/>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-body" style={{ padding: 0 }}>

                                            <form className="form-signin" onSubmit={e => e.preventDefault()}>
                                                <div className="form-label-group">
                                                    Judul :
                                                    <input name="judul" type="text" className="form-control" placeholder="Judul" value={this.state.judul} required autoFocus onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Author :
                                                    <input name="author" type="text" className="form-control" placeholder="Author" value={this.state.author} required  onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Harga : 
                                                    <input name="harga" type="text" className="form-control" placeholder="Harga" required value={this.state.harga} onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    ISBN : 
                                                    <input name="isbn" type="text" className="form-control" placeholder="ISBN" required value={this.state.isbn} onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Stok : 
                                                    <input name="stok" type="text" className="form-control" placeholder="Stok" required value={this.state.stok} onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Penerbit : 
                                                    <input name="penerbit" type="text" className="form-control" placeholder="Penerbit" required value={this.state.penerbit} onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Kategori :
                                                    <select name="kategori" className="form-control" value={this.state.kategori} onChange={(e) => this.changeInput(e)}>
                                                        {
                                                            this.props.category.map((item, key) => {
                                                                return <option key={key} value={item.id} >{item.kategori}</option>
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                                <Link to={route} className="btn  btn-primary text-uppercase" onClick={() => this.saveProduct(this.props.match.params.id)}> Simpan </Link >
                                                    &nbsp;
                                                <Link to={route} className="btn  btn-danger text-uppercase" onClick={() => this.delProduct(this.props.match.params.id)}> Hapus </Link >
                                            </form>

                                        </div>  
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

export default connect("listBooks, category, userBook, book, token, type, is_login", actions)(withRouter(ProductDetail))
