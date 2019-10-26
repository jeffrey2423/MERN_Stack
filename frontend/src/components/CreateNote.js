import React, { Component } from 'react'
import axios from 'axios'
import alertify from 'alertifyjs'
import 'alertifyjs/build/alertify.min.js'
import 'alertifyjs/build/css/alertify.min.css'
import 'alertifyjs/build/css/themes/default.min.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


export class CreateNote extends Component {
    state = {
        users: [],
        userSelected: '',
        date: new Date(),
        title: "",
        content: "",
        editing: false,
        id: ""
    }

    async componentDidMount() {

        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data.map(user => user.username),
            userSelected: res.data[0].username
        });
        if (this.props.match.params.id) {
            const res = await axios.get('http://localhost:4000/api/notes/' + this.props.match.params.id);
            console.log(res.data)
            this.setState({
                title: res.data.title,
                content: res.data.content,
                userSelected: res.data.author,
                date: new Date(res.data.date),
                editing: true,
                id: this.props.match.params.id
            })
        }

    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newNote = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.userSelected,
            date: this.state.date
        }
        console.log(this.state.date)
        if (this.state.editing) {
            const response = await axios.put('http://localhost:4000/api/notes/' + this.state.id, newNote);

            if (response.data['response'] === 'note updated') {
                alertify.success('Nota actualizada con exito');
                //window.location.href = '/';
            } else {
                alertify.error('Ocurrio un error intenta de nuevo');
            }
        } else {
            const response = await axios.post('http://localhost:4000/api/notes', newNote);

            if (response.data['response'] === 'Note saved') {
                alertify.success('Nota creada con exito');
                window.location.href = '/';
            } else {
                alertify.error('Ocurrio un error intenta de nuevo');
            }

        }

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    onChangeDate = date => {
        this.setState({
            date: date
        });
        
    }
    render() {
        return (
            <div>
                <div className="col-md-6-offset-md-3">
                    <div className="card card-body">
                        <h4>Create a note</h4>

                        {/*SELECT USER */}
                        <div className="form-group">
                            <label htmlFor="userSelected">
                                Asigna un responsable a la nota
                            </label>

                            <select
                                name="userSelected"
                                className="form-control"
                                value={this.state.userSelected}
                                onChange={this.onInputChange}


                            >
                                {
                                    this.state.users.map(user =>
                                        <option value={user} key={user}>
                                            {user}
                                        </option>
                                    )
                                }

                            </select>
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Titulo"
                                name="title"
                                onChange={this.onInputChange}
                                value={this.state.title}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                className="form-control"
                                placeholder="content"
                                name="content"
                                onChange={this.onInputChange}
                                value={this.state.content}
                                required
                            >
                            </textarea>
                        </div>

                        <div className="form-group">
                            <DatePicker
                                className="form-control"
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>

                        <form onSubmit={this.onSubmit}>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateNote
