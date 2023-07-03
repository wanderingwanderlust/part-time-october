import React from "react";

class ToDoClass extends React.Component {
    state = {
        toDoInput: '',
        toDoList: [
            'Cycle',
            'Read a book on Rspec',
            'Play Apex Legends'
        ]
    }

    componentDidMount = () => {
        console.log('The component has mounted')
    }

    componentDidUpdate = () => {
        console.log('I  have updated')
    }

    handleChangeInput = (event) => {
        this.setState({toDoInput: event.target.value})
    }

    addToDoItem = () => {
        if(!this.state.toDoInput) return;
        this.setState({toDoList: [...this.state.toDoList, this.state.toDoInput]})
    }

    render() {
        return (
            <div>
                <h2>To Do Class</h2>
                <input value={this.state.toDoInput} onChange={this.handleChangeInput} />
                <button onClick={this.addToDoItem}>Add To DO Item</button>
                <ul>
                    {this.state.toDoList.map((item, key) => {
                        return <li key={key}>{item}</li>
                    })}
                </ul>
            </div>

        )
    }
}

export default ToDoClass;