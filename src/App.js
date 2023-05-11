import React, { useState } from 'react';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import './App.css';
import { Container } from 'react-bootstrap';

const App = () => {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'first todo',
      status: true
    },
    {
      id: 2,
      title: 'second todo',
      status: true
    },
    {
      id: 3,
      title: 'third todo',
      status: false
    },
  ])


  return (
    <div className='app'>
        <Header />
      <Container>
        <AddTodo todo={todo} setTodo={setTodo} />
        <TodoList todo={todo} setTodo={setTodo} />
      </Container>
    </div>
  )
}

export default App
