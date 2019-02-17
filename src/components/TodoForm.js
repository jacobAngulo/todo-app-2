import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <form>
                <input 
                    type='text'
                    name='input'
                    value={this.state.input}
                    onChange={this.handleChanges} 
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm