import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Item from './Item'

const Requirement = ({req}) => {

  const [ requirements, setRequirements ]= useState(req)

  const handleItemToggle = (id) => {
    const requirementsMap = requirements.map(req => {
      return req.id === Number(id) ? { ...req, completed: !req.completed } : { ...req }
    })
    setRequirements(requirementsMap)
  }

  return (
    <div>
      <Container>
        <Row className='header-row'>
          <Col sm={1}>Sprite</Col>
          <Col sm={4}>Name</Col>
          <Col sm={1}>Quantity</Col>
          <Col sm={2}>Season</Col>
          <Col sm='auto'>Source</Col>
        </Row>
      </Container>
      {requirements.map(req => {
        return (
          <Item req={req} key={req.id} handleItemToggle={handleItemToggle} />
        )
      })}
    </div>
  );
};

export default Requirement;
