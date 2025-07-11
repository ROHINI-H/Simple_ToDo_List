import { useState } from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";

function App() {

  // The list of items and the todo task is defined
  const [items, setItems] = useState([]);
  const [Todo, setTodo] = useState('');

  // This function adds the new item to the To-DO List
  function addItem() {
    if (Todo.trim()) {
      // create a new object with todo text and add it to the list
      const text = { id: Date.now(), text: Todo, completed: false };
      setItems([text, ...items]);
      setTodo('');
    }
  }

  // Function to mark the items as completed
  function completeItem(id) {
    // mark complete if not competed
    setItems(items.map(item => item.id == id ? { ...item, completed: !item.completed } : item));
  }

  // Delete the item 
  function deleteItem(id) {
    setItems(items.filter(item => item.id != id));
  }

  // Edit the items in the list
  function editItem(id, data) {
    setItems(items.map(item => item.id == id ? { ...item, text: data } : item));
  }

  return (
    <div className="max-w-xl mx-auto mt-15 p-10 bg-white shadow rounded">
      <Header />
      <div className="flex justify-center">
        <input className="w-xs border rounded-lg mr-7 p-3" type="text" placeholder="Add task..." value={Todo} onChange={(e) => setTodo(e.target.value)} onKeyDown={(e) => e.key == 'Enter' && addItem()} />
        <button className="bg-sky-300 hover:bg-sky-700 hover:text-white text-yellow-950 font-bold tracking-wide px-4 rounded" onClick={addItem}>Add</button>
      </div>

      <ToDoList list={items} completeItem={completeItem} deleteItem={deleteItem} editItem={editItem} />
    </div>
  )
}

export default App;