import React, {Component} from 'react';

const style = {
    width : "200px",
    display : "block",
    backgroundColor : "lightblue"
}
class CatalogProfile extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div>
                        <img className="img-profil ml-auto" style={style} src="https://i.pinimg.com/originals/a0/ae/b7/a0aeb7cf313bd1f4e3ab8b6fe906aebe.jpg" alt="profile"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div><span>ID : </span></div>
                        <div><span>Name : </span></div>
                        <div><span>Email : </span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CatalogProfile