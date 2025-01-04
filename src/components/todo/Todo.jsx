import React from "react";
import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import styled from "styled-components";

export default function Todo() {
  const [todos, setTodos] = useState([
    "Go to the gym",
    "Eat more fruit",
    "Run",
  ]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);
  return (
    <TodoContainer>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
    </TodoContainer>
  );
}
const TodoContainer = styled.div`
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #202124;
  h1,
  h2,
  h3,
  input,
  button {
    font-family: "Press Start 2P", system-ui;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 14px;
    background: #eff6ff;
    gap: 14px;
  }

  header {
    display: flex;
    align-items: stretch;
  }

  header,
  .main {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    gap: 14px;
  }

  header input {
    flex: 1;
    border-radius: 14px;
    outline: none;
    width: 100%;
  }

  header button {
    border-radius: 14px;
    background: transparent;
    transition-duration: 200ms;
    cursor: pointer;
  }

  header button:hover {
    opacity: 0.7;
  }

  header button,
  header input {
    padding: 14px 18px;
    border: none;
    outline: none;
    background: white;
  }

  p {
    font-size: 0.9em;
  }

  .main {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .todoItem {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px;
    border-radius: 14px;
    background: white;
  }

  .todoItem p {
    flex: 1;
  }

  .actionsContainer {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .actionsContainer button {
    transition-duration: 200ms;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .actionsContainer button:hover {
    opacity: 0.7;
  }

  @media (min-width: 640px) {
    header button,
    header input {
      font-size: 1.2em;
    }

    p {
      font-size: 1em;
    }
  }
`;
