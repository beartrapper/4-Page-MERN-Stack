import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import Nav from "../Nav";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: null
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    
    this.props.loginUser(userData);
  };

  render() {
    
    return (<>
    <Nav />


    <div className="container pt-5">
                <div className="col-md-8 padding-left">
                  
                    <form onSubmit={this.onSubmit}>
                    {this.state.errors  ? <><div className="container p-3 pb-5">
                    <span className="alert alert-danger">Wrong credentials :(</span>
                 </div> </>:<></>}
                    Don't have an account? <Link to="/register">Register</Link>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" className="form-control"  onChange={this.onChange}
                  value={this.state.email}
                  // error={errors.email}
                  id="email"
                  placeholder="name@example.com"/>
                        </div>


                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Password</label>
                            <input className="form-control" onChange={this.onChange}
                  value={this.state.password}
                  // error={errors.password}
                  id="password"
                  type="password" />
                        </div>
                    <button className="btn btn-primary">Login</button>
                        
                    </form>
                </div>
            </div>





{/* 
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login below</b> 
              </h4>
              <p className="grey-text text-darken-1">
               
              </p>
            </div>
            <form noValidate >
              <div className="input-field col s12">
              <label htmlFor="email">Email </label>
              <br />
                <input
                 
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
     
     
      */}
      </>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
