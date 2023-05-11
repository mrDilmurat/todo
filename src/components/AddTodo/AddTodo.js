
import React, { useState } from 'react';
import { Col, Row, Button, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import s from './AddTodo.module.css'

function AddTodo({ todo, setTodo }) {

  const [value, setValue] = useState('');

  function saveTodo() {
    if (value) {
      setTodo(
        [...todo, {
          id: uuidv4(),
          title: value,
          status: true
        }]
      )
      setValue('')
    }
  }

  return (
    <Row>
      <Col className={s.TodoForm}>
        <Form.Control placeholder='Enter Task' value={value} onChange={(e) => setValue(e.target.value)} />
        <Button variant="success" size="sm" onClick={saveTodo} className={s.btn}>Save</Button>
      </Col>
    </Row>
  )
}

export default AddTodo;
