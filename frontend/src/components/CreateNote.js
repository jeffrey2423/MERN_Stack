import React, { Component } from 'react'

export class CreateNote extends Component {
    onSubmit = async(e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <div className="col-md-6-offset-md-3">
                    <div className="card card-body">
                        <h4>Create a note</h4>
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
