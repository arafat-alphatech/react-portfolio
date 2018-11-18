import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from "axios";

import { connect } from "unistore/react";
import { actions } from "../store";

class UserList extends Component {

   
    render() {
        return (
            <div>

                
            </div>
        )
    }
}

export default connect("listBooks, token, type, name, is_login, cart", actions)(withRouter(UserList))