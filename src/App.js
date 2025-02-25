import { getDatabase, ref, set, push, onValue, remove } from 'firebase/database';
import { app,auth } from './MyComponents/Firebase';
import React, { useEffect, useState } from 'react';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { Addtodos } from './MyComponents/Addtodos';
import { About } from './MyComponents/About';  
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sinup from './MyComponents/Singup';
import { onAuthStateChanged } from "firebase/auth";

const db = getDatabase(app);

function App() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(null);

   useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  // Fetch todos from Firebase on component mount
  useEffect(() => {
    const todosRef = ref(db, "todos");
    onValue(todosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedTodos = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
        setTodos(loadedTodos);
      } else {
        setTodos([]);
      }
    });
  }, []);

  const onDelete = (todo) => {
    remove(ref(db, `todos/${todo.id}`))
      .then(() => console.log("Todo deleted successfully"))
      .catch((error) => console.error("Error deleting todo: ", error));
  };

  const addTodo = (title, desc) => {
    const newTodoRef = push(ref(db, "todos"));
    const myTodo = { title, desc };
    set(newTodoRef, myTodo)
      .then(() => console.log("Todo added successfully"))
      .catch((error) => console.error("Error adding todo: ", error));
  };

 
  return (
    <>
      <BrowserRouter>
        <Header title="My Todos List" searchvar={true} />
        <Routes>
          {user ? (
            <>
              <Route
                path="/"
                element={
                  <>
                    <Addtodos addtodo={addTodo} />
                    <Todos todos={todos} onDelete={onDelete} />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
            </>
          ) : (
            <Route path="/" element={<Sinup/>} />
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;