import axios from 'axios';
import React, { Component, SyntheticEvent } from 'react';
import { Redirect } from "react-router";
import './Public.css';

class Login extends Component {
    email = '';
    password = '';

    state = {
        redirect: false
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await axios.post('login',{
        email: this.email,
        password: this.password
        });
        localStorage.setItem('token', response.data.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        console.log(response);
        this.setState({
            redirect: true
        })
    }
    render() {
        
            if (this.state.redirect) {
                return <Redirect to = {'/users'} />;
            }
            return (
            <div>
                <main className="form-signin">
                    <form onSubmit = {this.submit}>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required 
                        onChange = {e => this.email = e.target.value}
                        />
                        <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required 
                        onChange = {e => this.password = e.target.value}
                        />
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    </form>
                </main>

            </div>
        );
    }
}

export default Login;