import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from "unistore/react";
import { actions } from "../store";
import axios from "axios";

import "./SignIn.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer"

class TambahProduct extends Component {
    state = {
        judul: '',
        author: '',
        penerbit: '',
        harga: '',
        isbn: 0,
        url_picture: '',
        kategori: 0,
        stok: 0
    }
    book = []

    changeInput = e => {
        this.setState({[e.target.name]: e.target.value}, () => {
            console.log(this.state)
        });
        console.log(e.target.value)
        
    };

    addProduct = () => {
        console.log(this.state)
        const body = {
            judul: this.state.judul,
            author: this.state.author,
            penerbit: this.state.penerbit,
            harga: parseInt(this.state.harga) ,
            isbn: parseInt(this.state.isbn),
            stok: parseInt(this.state.stok),
            kategori: parseInt(this.state.kategori),
            url_picture: this.state.url_picture
        }

        const url = "http://localhost:5000/api/users/items"
        const auth = "Bearer " + this.props.token
        const header = {
            "Authorization": auth
        }

        console.log(body)
        axios
        .post(url, body, { headers: header })
        .then((response) => {
            alert("Sukses menambahkan data")
            // console.log("Response update: ", response)
            this.props.getUserListBooks(this.props.token)
        })
        .catch((err) => {
            alert("Gagal, nomor ISBN tidak boleh sama ")
            console.log(err)
        })
    }

    render(){
        return (
            <div>
                <NavBar />
                <div className="container">
                    <div className="row" style={{paddingTop: 100, paddingBottom: 100}}>

                        <div className='card col-sm-12 col-xs-12'>
                              
                            <div className="mt-3 mb-3" style={{ height: "100%" }}>
                                <div className="row">
                                    <div className="col-sm-8 offset-sm-2">
                                        <div className="card-body" style={{ padding: 0 }}>

                                            <form className="form-signin" onSubmit={e => e.preventDefault()}>
                                                <div className="form-label-group">
                                                    Judul :
                                                    <input name="judul" type="text" className="form-control" placeholder="Judul" required autoFocus onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Author :
                                                    <input name="author" type="text" className="form-control" placeholder="Author" required  onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Harga : 
                                                    <input name="harga" type="text" className="form-control" placeholder="Harga" required onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    ISBN : 
                                                    <input name="isbn" type="text" className="form-control" placeholder="ISBN" required onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Stok : 
                                                    <input name="stok" type="text" className="form-control" placeholder="Stok" required onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Penerbit : 
                                                    <input name="penerbit" type="text" className="form-control" placeholder="Penerbit" required onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <div className="form-label-group">
                                                    Kategori :
                                                    <select name="kategori" className="form-control" onChange={(e) => this.changeInput(e)}>
                                                        {
                                                            this.props.category.map((item, key) => {
                                                                return <option key={key} value={item.id} >{item.kategori}</option>
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                                <div className="form-label-group">
                                                    Url Gambar : 
                                                    <input name="url_picture" type="text" className="form-control" placeholder="Url Gambar" required onChange={(e) => this.changeInput(e)}/>
                                                </div>
                                                <Link to="/productlist" className="btn btn-lg btn-primary btn-block text-uppercase" onClick={() => this.addProduct()}> Tambah </Link >
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

export default connect("listBooks, category, book, token, type, is_login", actions)(withRouter(TambahProduct))
