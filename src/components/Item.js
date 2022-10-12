import { Col, Image, ListGroup, Row } from 'react-bootstrap'
import { items } from '../mock'

function Item () {
  
  function ListItem(props) {
    return <Row>
      <Col sm={1}>
        <Image rounded="true" src={props.value.sprite}></Image>
      </Col>
      <Col sm={2}>{props.value.name}</Col>
      <Col sm={1}>{props.value.season}</Col>
      <Col>{props.value.source}</Col>
      <Col sm={2}>{props.value.type}</Col>
    </Row>
  }

  function ItemList(props) {
    const items = props.items
    const listItems = items.map((item) => 
      <ListItem key={item.id} value={item} />
    )
    return (
      <ListGroup>
        <ListGroup.Item>
          {listItems}
        </ListGroup.Item>
      </ListGroup>
    )
  }

  return (
    <ItemList items={items}/>
  )
}

export default Item