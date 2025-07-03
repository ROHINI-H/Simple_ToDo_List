import ToDoItem from "./ToDoItem";

function ToDoList({ list, completeItem, deleteItem, editItem }) {
    return (
        <ul className="mt-5 px-10">
            {list.map(item => (
                <ToDoItem key={item.id} item={item} completeItem={completeItem} deleteItem={deleteItem} editItem={editItem} />
            ))}
        </ul>
    )
}

export default ToDoList;