import React, { Component } from 'react'
import axios from 'axios'
import alertify from 'alertifyjs'
import 'alertifyjs/build/alertify.min.js'
import 'alertifyjs/build/css/alertify.min.css'
import 'alertifyjs/build/css/themes/default.min.css'

export class CreateUser extends Component {
    state = {
        users: [],
        username: ''
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({ users: res.data });
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    onSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        });

        if (response.data['response'] === 'User already exists') {
            alertify.error('El usuario ya existe, intenta con otro');
        } else {
            this.setState({ username: '' });
            this.getUsers();
            alertify.success('Usuario creado con exito');

        }


    }

    deleteUser = async(id) => {
        await axios.delete('http://localhost:4000/api/users/'+id);
        this.getUsers();
        alertify.success('Usuario eliminado con exito');
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3> Create new user</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    value={this.state.username}
                                    type="text"
                                    className="form-control"
                                    onChange={this.onChangeUsername}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => (
                                <li
                                    className="list-group-item list-group-item-action"
                                    key={user._id}
                                    onDoubleClick={() => this.deleteUser(user._id)}>
                                    {user.username}
                                </li>)
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default CreateUser
