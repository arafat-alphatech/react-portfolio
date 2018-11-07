import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from "unistore/react";
import { actions } from "../store";

class Product extends Component {
    
    render(){
        const route = '/product/' + this.props.id
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
						
						<Link to={route} className="btn btn-outline-primary mb-2 my-sm-0 mx-5">Edit</Link>
						<br/>
				</div>  
			</div>

        )
    }
}

export default connect("listBooks, book,token, type, is_login", actions)(withRouter(Product))
