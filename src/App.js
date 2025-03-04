import { getFirestore, collection, addDoc,doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { app, auth } from './MyComponents/Firebase';
import React, { useEffect, useState } from 'react';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { Addtodos } from './MyComponents/Addtodos';
import { About } from './MyComponents/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './MyComponents/Singup';
import { onAuthStateChanged, signOut } from "firebase/auth";

const db = getFirestore(app);

function App() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  // Fetch todos from Firestore
  useEffect(() => {
    const todosRef = collection(db, "todos");

    const unsubscribe = onSnapshot(todosRef, (snapshot) => {
      const loadedTodos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setTodos(loadedTodos);
    });

    return () => unsubscribe(); // Cleanup function
  }, []);

  // Add Todo to Firestore
  const addTodo = async (title, desc) => {
    try {
      await addDoc(collection(db, "todos"), {
        title: title,
        desc: desc,
        timestamp: new Date()
      });
      console.log("Todo added successfully");
    } catch (error) {
      console.error("Error adding todo: ", error);
    }
  };

  // Delete Todo from Firestore
  const onDelete = async (todo) => {
    try {
      await deleteDoc(doc(db, "todos", todo.id));
      console.log("Todo deleted successfully");
    } catch (error) {
      console.error("Error deleting todo: ", error);
    }
  };

  // Logout Function
  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("User signed out successfully")
      setUser(null)
    }).catch((error) => {
      console.error("Error signing out: ", error)
    })
  }

  return (
    <>
      <BrowserRouter>
        <Header title="My Todos List" searchvar={true} onSignOut={handleSignOut} />
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
            <Route path="/" element={<Signup />} />
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;