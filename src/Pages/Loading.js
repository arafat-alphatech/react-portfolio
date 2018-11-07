import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import "../App.css";


class Home extends Component {
    render() {
      return (
          <div >
              <NavBar />
              <div className="conteiner">
                <h1 className="text-center" style={{marginTop: 150}} >Loading ...</h1>
              </div>
              <Footer />
          </div>
      );
    }
}

export default Home;