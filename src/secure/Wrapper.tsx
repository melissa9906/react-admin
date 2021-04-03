import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Menu from './components/Menu';
import Nav from './components/Nav';


export default class Wrapper extends Component {

    state = {
        redirect : false
    }

    componentDidMount = async () => {
        try {
            const response = await axios.get('users');
            console.log(response);
        } catch (error) {
            this.setState({
                redirect:true,
            })
        }
        
    };

    render() {
        if (this.state.redirect) {
         return   <Redirect to={'/login'}/>
        }
        return (
            <div>
                <Nav />
                <div className="container-fluid">
                    <div className="row">
                        <Menu />
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            {this.props.children}
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}