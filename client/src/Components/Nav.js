import React from 'react';
import {connect} from "react-redux";
import {logoutUser} from "../actions/authActions";
import {Link, Redirect, withRouter} from 'react-router-dom'

class Nav extends React.Component {

    
    constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);

    }
    routeChange(){
        let path = 'create';
        this.props.history.push(path);
     
      }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };


    render() {
        const {user} = this.props.auth;
        console.log(user)

        return (

            <>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <a className="navbar-brand temp-navs" href="#">Bed Page Clone</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mr-auto" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Restraunts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Motels</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Jobs</a>
                            </li>

                            {
                            user ? <>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Hi {
                                        user.name
                                    }!</a>
                                </li>
                            </> : <></>
                        }
                            <li className="nav-item">

                                {
                                user ? <>


                                    <button className="nav-link"
                                        onClick={
                                            this.onLogoutClick
                                    }>Logout</button>

                                </> : <>
                                    <Link to="/login">
                                        <a className="nav-link" href="#">My Account</a>
                                    </Link>
                                </>
                            } </li>
                        </ul>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-sm-6">
                    <p className="nav-below-writing">Choose a location</p>
                    </div>
                    {user ? 
                        <div clas="col-sm-6">
                        <button onClick={this.routeChange} className="btn btn-primary margining">Post Ad</button>
    
                        </div>:<></>    
                }
                    
                </div>

                <hr className="hr-nav"/>
            </>
        );
    }
}

const mapStateToProps = state => ({auth: state.auth});


export default connect(mapStateToProps, {logoutUser})(withRouter(Nav));
