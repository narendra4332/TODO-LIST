import React, { useEffect, useState } from 'react';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { Addtodos } from './MyComponents/Addtodos';
import { About } from './MyComponents/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route

const App = () => {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo)
    settodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addtodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    settodos([...todos, myTodo]);
    console.log(myTodo)

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const [todos, settodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <BrowserRouter> {/* Wrap the app in BrowserRouter to enable routing */}
      <Header title="My Todos List" searchvar={true} />

      <Routes> {/* Define Routes for different pages */}
        <Route
          path="/"
          element={
            <>
              <Addtodos addtodo={addtodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />

        <Route
          path="/about"
          element={<About />} // About page when path is "/about"
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;