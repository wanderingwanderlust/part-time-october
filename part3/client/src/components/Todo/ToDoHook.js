import { useState } from 'react';

function ToDoHook() {
    const [toDoInput, setToDoInput] = useState('');
    const [toDoList, setToDoList] = useState([
        {text: 'Cycle', completed: false},
        {text: 'Read a book on Rspec', completed: false},
        {text: 'Play Apex Legends', completed: false},
    ])


    const addToDoItem = () => {
        if(!toDoInput) return;
        const newList = [...toDoList];
        newList.push({text: toDoInput, completed: false});
        setToDoList(newList);
        setToDoInput('')
    }

    // toggle is a todo has been completed or not
    const toggleToDo = (index) => {
        const newArray = [...toDoList];
        newArray[index].completed = !newArray[index.completed]
    }

    // delete a to do item
    const deleteToDo = (index) => {
        const newArray = [...toDoList]
        newArray.splice(index, 1);
        setToDoList(newArray)
    }


    return (
        <div>
            <h2>To Do Hook</h2>
            <input value={toDoInput} onChange={(event) => setToDoInput(event.target.value)} />
            <button onClick={addToDoItem}>Add To Do Item</button>
            <ul>
                {toDoList.map((toDo, key) => {
                    return(
                        <li key={key} style={{textDecoration: toDo.completed && 'line-through'}}>
                            {toDo.text}
                            <button onClick={() => deleteToDo(key)}>X</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ToDoHook;