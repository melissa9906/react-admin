import React, { Component, SyntheticEvent } from 'react';
import './Public.css';
import axios from 'axios';
export default class Register extends Component {
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    password_confirm = '';

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const response = await axios.post('register', {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm
        });        
        console.log(response);
    }

    ///submit = (e: SyntheticEvent) => {
    //    e.preventDefault();
     //   axios.post('http://127.0.0.1:8000/api/register', {
     //       first_name: this.first_name,
     //       last_name: this.last_name,
    //        email: this.email,
   //         password: this.password,
    //        password_confirm: this.password_confirm
    //    }).then( (res) => {
     //       console.log(res);
    //    })
   //     
   // }

    render() {
        return (
            <div>
              <main className="form-signin">
                    <form onSubmit={this.submit}>
                        <h1 className="h3 mb-3 fw-normal">Please register</h1>

                        <label htmlFor="firstName" className="visually-hidden"> First Name </label>
                        <input type="text" id="firstName" className="form-control" placeholder="First Name" required onChange={ e  => this.first_name = e.target.value} />

                        <label htmlFor="lastName" className="visually-hidden"> Last Name </label>
                        <input type="text" id="lasttName" className="form-control" placeholder="Last Name" required onChange={ e  => this.last_name = e.target.value}/>

                        <label htmlFor="email" className="visually-hidden">Email address</label>
                        <input type="email" id="email" className="form-control" placeholder="Email address" required onChange={ e  => this.email = e.target.value} />

                        <label htmlFor="password" className="visually-hidden">Password</label>
                        <input type="password" id="password" className="form-control" placeholder="Password" required onChange={ e  => this.password = e.target.value} />
                        
                        <label htmlFor="passwordConfirm" className="visually-hidden">Password Confirm</label>
                        <input type="password" id="passwordConfirm" className="form-control" placeholder="Password" required onChange={ e  => this.password_confirm = e.target.value}/>

                        <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                    </form>
                </main>  
            </div>
        );
    } 
}