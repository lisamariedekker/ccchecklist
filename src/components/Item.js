import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
 
const Item = ({req, handleItemToggle}) => {

  const handleClick = (e) => {
    e.preventDefault()
    handleItemToggle(e.currentTarget.id)
  }
  
  const seasons = req.item.season.map((season) =>
    <Image src={season} key={season} width={20} />
  )

  const sources = req.item.source.map((source) =>
    <Col sm='auto' key={source}>{source}</Col>
  )

   return (
    <>
      <Container id={req.id} value={req.id} onClick={handleClick} className={req.completed ? 'pointer strike' : 'pointer'}>
        <Row>
          <Col sm={1}>
            <Image width={20} src={req.item.sprite} />
          </Col>
          <Col sm={4}>{req.item.name}</Col>
          <Col sm={1}>{req.quantity}x</Col>
          <Col sm={2}>
            {seasons}
          </Col>
          <Col sm='auto'>
            <Row>{sources}</Row>
          </Col>
        </Row>
      </Container>
    </>
   );
};
 
export default Item;