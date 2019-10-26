import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import alertify from 'alertifyjs'
import 'alertifyjs/build/alertify.min.js'
import 'alertifyjs/build/css/alertify.min.css'
import 'alertifyjs/build/css/themes/default.min.css'
import { Link } from 'react-router-dom'

export class NotesList extends Component {
    state = {
        notes: []
    }

    async componentDidMount() {
        this.getNotes();
    }

    getNotes = async () => {
        const res = await axios.get('http://localhost:4000/api/notes');
        this.setState({ notes: res.data });
    }

    deleteNote = (id) => {
        alertify.confirm('Confirmacion', '¿Desea borrar esta nota?',
            async () => {
                await axios.delete('http://localhost:4000/api/notes/' + id);
                this.getNotes();
                alertify.success('Nota eliminada con exito');
            },
            () => { alertify.error('Cancel') }
        );
    }
    render() {
        return (

            <div className="card-columns">
                {
                    this.state.notes.map(note => (
                        <div className="card" key={note._id}>
                            <div className="card-header">

                                <h5 className="card-title">
                                    {note.title}
                                </h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    {note.content}
                                </p>
                                <p className="card-text">
                                    {note.author}
                                </p>
                                <p>{format(note.date)}</p>
                            </div>
                            <div className="card-footer">
                                <button
                                    className="btn btn-danger mr-3"
                                    onClick={() => this.deleteNote(note._id)}
                                >
                                    Eliminar
                                </button>
                                <Link
                                    className="btn btn-info"
                                    to={"/edit/" + note._id}
                                >
                                    Editar
                                </Link>
                            </div>
                        </div>
                    ))
                }


            </div>

        )
    }
}

export default NotesList
