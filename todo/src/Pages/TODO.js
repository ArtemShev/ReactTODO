import React, { Component } from "react";
import { useState } from "react";
import Header from "../components/Header";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
     function Todo() {
        const [todos, setTodos] = useState([]);
        const [todo, setTodo] = useState("");

        const addTodo = () => {
          if (todo !== "") {
            setTodos([...todos, todo]);
            setTodo("");
          }
        };

        const deleteTodo = (text) => {
          const newTodos = todos.filter((todo) => {
            return todo !== text;
          });
          setTodos(newTodos);
        };

        return (
          <div className="cover-container d-flex w-50 h-100 p-3 mx-auto flex-column align-items-center mt-5">
            <h1>Список дел</h1>
            <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
            <TodoList list={todos} remove={deleteTodo} />
          </div>
        );
      };

      export default Todo;