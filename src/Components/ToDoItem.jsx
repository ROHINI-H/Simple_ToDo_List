import { useState } from "react";

function ToDoItem({ item, completeItem, deleteItem, editItem }) {
    const [editing, setEditing] = useState(false);
    const [changedData, setChangedData] = useState(item.text);

    // Function to handle the editing
    function handleEdit() {
        if (editing) {
            editItem(item.id, changedData);
        }
        setEditing(!editing);
    }

    return (
        <li className="flex justify-between items-center p-2.5 border rounded mb-2">
            {
                editing ?
                    (<input className="border flex-grow p-1 mr-3" value={changedData} onChange={(e) => setChangedData(e.target.value)} />)
                    : (<span className={`flex-grow cursor-pointer ${item.completed ? 'line-through text-gray-500' : ''}`} onClick={() => completeItem(item.id)}>{item.text}</span>)
            }
            <div className="space-x-2">
                <button className="text-fuchsia-600 cursor-pointer" onClick={handleEdit}>{editing ? 'Save' : 'Edit'}</button>
                <button className="text-red-500 cursor-pointer" onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
        </li>
    )
}

export default ToDoItem;