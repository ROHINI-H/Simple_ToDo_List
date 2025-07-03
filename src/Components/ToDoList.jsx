import ToDoItem from "./ToDoItem";

function ToDoList({ list, completeItem, deleteItem, editItem }) {
    return (
        <ul>
            {list.map(item => (
                <ToDoItem key={item.id} item={item} completeItem={completeItem} deleteItem={deleteItem} editItem={editItem} />
            ))}
        </ul>
    )
}

export default ToDoList;