import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Form, ButtonGroup } from 'react-bootstrap';
import s from './TodoList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faFilePen, faTrashCan, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';



function TodoList({ todo, setTodo }) {

  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');
  const [filtered, setFiltered] = useState(todo)

  useEffect(() => {
    setFiltered(todo)
  }, [todo])

  function todoFilter(status) {
    if (status === 'all') {
      setFiltered(todo)
    } else {
      let newTodo = [...todo].filter(item => item.status === status)
      setFiltered(newTodo)
    }
  }

  function deleteTodo(id) {
    let newTodo = [...todo].filter(item => item.id != id)
    setTodo(newTodo)
  }

  function editTodo(id, title) {
    setEdit(id)
    setValue(title)
  }

  function statusTodo(id) {
    let newTodo = [...todo].filter(item => {
      if (item.id == id) {
        item.status = !item.status
      }
      return item
    })
    setTodo(newTodo)
  }

  function saveTodo(id) {

    let newTodo = [...todo].map(item => {
      if (item.id == id) {
        item.title = value
      }
      return item
    })
    setTodo(newTodo)
    setEdit(null)
  }

  return (
    <div>
      <Row>
        <Col className={s.filtered}>
          <ButtonGroup aria-label="Basic example" className={s.btns}>
            <Button variant="primary" onClick={() => todoFilter('all')}>All</Button> &nbsp;
            <Button variant="primary" onClick={() => todoFilter(true)}>Open</Button> &nbsp;
            <Button variant="primary" onClick={() => todoFilter(false)}>Close</Button> &nbsp;
          </ButtonGroup>
        </Col>
      </Row>
      {
        filtered.map(item => (
          <div key={item.id} className={s.listItem}>
            {
              edit == item.id ?
                <div>
                  <input value={value} onChange={(e) => setValue(e.target.value)} />
                </div>
                :
                <div className={!item.status ? s.close : ''}>{item.title}</div>
            }
            {
              edit === item.id ?
                <div>
                  <Button variant="warning" size="sm" onClick={() => saveTodo(item.id)}><FontAwesomeIcon icon={faSave} /></Button>
                </div>
                :
                <div>
                  <Button variant="danger" size="sm" onClick={() => deleteTodo(item.id)}><FontAwesomeIcon icon={faTrashCan} /></Button>
                  <Button variant="info" size="sm" onClick={() => editTodo(item.id, item.title)} className={s.btn}><FontAwesomeIcon icon={faFilePen} /></Button>
                  <Button variant="outline-primary" size="sm" onClick={() => statusTodo(item.id)} className={s.btn}>

                    {
                      item.status ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faLockOpen} />
                    }
                  </Button>
                </div>
            }

          </div>
        ))
      }
    </div>
  )
}

export default TodoList
