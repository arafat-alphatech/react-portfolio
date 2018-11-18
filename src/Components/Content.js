import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from "unistore/react";
import { actions } from "../store";

class Content extends Component {
    
    render(){
        const route = '/detail/' + this.props.id
        return (

			<div className='col-md-3 col-sm-6 col-xs-12'>
				<div className="card mt-3 mb-3" style={{ height: "100%" }}>
					<div className="card-body" style={{ padding: 0 }}>
                        <Link to={route}>
                            <img className="card-img-top" src={this.props.url_picture} alt="Card image cap"/>
                        </Link>
                            <h6 className='product-title'>
                                <Link to={route}>
                                        {this.props.judul}
                                </Link>
                            </h6>
                            <h6 className='product-author'>
                                oleh {this.props.author}
                            </h6>
                            <h6 className='product-price'>
                                Rp. {(this.props.harga.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}
                            </h6>
					</div>
					
                    <div className='row'>
                        <div className='col-sm-6'>
                            <Link to={route} style={{width: "100%"}} className="btn btn-outline-primary mb-2 my-sm-0" title="Lihat detail buku">Detail</Link>
                        </div>
                        <div className='col-sm-6'>
                            <Link to='#' style={{width: "100%"}} className="btn btn-outline-success mb-2 my-sm-0" title="Tambah buku ke keranjang" onClick={() => this.props.addCart(this.props.id, this.props.token)}><i className="fas fa-cart-plus"></i></Link>
                        </div>
                    </div>
						<br/>
				</div>  
			</div>

        )
    }
}

export default connect("listBooks, book,token, type, is_login", actions)(withRouter(Content))
