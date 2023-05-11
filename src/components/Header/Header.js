import React from 'react';
import s from './Header.module.css'
import { Col, Row } from 'react-bootstrap';

function Header() {
  return (
    <div>
      <Row>
        <Col>
          <h2 className={s.root}>Todo List</h2>
        </Col>
      </Row>
    </div>
  )
}

export default Header
