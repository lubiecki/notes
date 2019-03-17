import React, { Component} from 'react';

// import '../../styles/addNote.styl';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            content: null,
            id: Math.floor(Math.random() * 25565) + 1
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            id: Math.floor(Math.random() * 25565) + 1
        });
        this.props.addNote(this.state);
    }
    render() {
        return (
            <div className="addNote">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                    <label htmlFor="content">Note:</label>
                    <input type="text" id="content" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}



export default AddNote;