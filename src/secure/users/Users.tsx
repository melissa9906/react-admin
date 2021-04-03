import axios from 'axios';
import React, { Component } from 'react';
import { User } from '../../clases/user';
import Wrapper from '../Wrapper';

//const Users = () => (
//<Wrapper>
//<p>Users works!</p>
//</Wrapper>
//

class Users extends Component {
    state = {
        users: []
    }

    componentDidMount = async () => {
        const response = await axios.get('users');

        this.setState({
            users: response.data.data
        })
    }
    render() {
        return (
            <Wrapper>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((user: User) => {
                                        return (
                                            <tr>
                                                <td>{user.id}</td>
                                                <td>{user.first_name} {user.last_name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.role.name}</td>
                                                <td>text</td>
                                            </tr>
                                        )
                                    }
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </Wrapper>
        );
    }
}
export default Users;