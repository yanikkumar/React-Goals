import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from "../firebase";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: {
                message: ""
            }
        }
    }

    signUp() {
        console.log(this.state);
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({ error })
            })
    }

    render() {
        return (
            <div className="form-inline" style={{ margin: '5%' }}>
                <h2
                    style={{ marginRight: '5px' }}
                >
                    Sign Up
                </h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        style={{ marginRight: '5px' }}
                        placeholder="email"
                        onChange={event => this.setState({ email: event.target.value })}
                    />
                    <input
                        className="form-control"
                        type="password"
                        style={{ marginRight: '5px' }}
                        placeholder="Password"
                        onChange={event => this.setState({ password: event.target.value })}
                    />
                    <button
                        className="btn btn-primary"
                        style={{ marginRight: '5px' }}
                        type="button"
                        onClick={() => this.signUp()}
                    >
                        Sign Up
                    </button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'/signin'}>Already a user? Sign In</Link ></div>
            </div >
        )
    }
}
export default SignUp;