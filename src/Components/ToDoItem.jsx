import { useState } from "react";

function ToDoItem({ item, completeItem, deleteItem, editItem }) {
    const [editing, setEditing] = useState(false);
    const [changedData, setChangedData] = useState(item.text);

    // Function to handle the editing
    function handleEdit() {
        if(editing) {
            editItem(item.id, changedData);
        }
        setEditing(!editing);
    }

    return (
        <li>
            {
                editing ?
                    (<input value={changedData} onChange={(e) => setChangedData(e.target.value)} />)
                    : (<span onClick={() => completeItem(item.id)}>{item.text}</span>)
            }
            <div>
                <button onClick={handleEdit}>{editing ? 'Save' : 'Edit'}</button>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
        </li>
    )
}

export default ToDoItem;