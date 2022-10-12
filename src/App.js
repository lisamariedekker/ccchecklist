import './App.css';
import { Container, Card, ListGroup, Col, Image, Row } from 'react-bootstrap';

function App() {
  const items = [
    {
      name: 'Wild Horseradish',
      season: ['Spring'],
      sprite: 'https://stardewvalleywiki.com/mediawiki/images/9/90/Wild_Horseradish.png',
      source: ['Foraging', 'Spring Seeds'],
      type: 'Forage'
    }
  ]

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
    <div>
      <Container className="p-3">
        <Card>
          <Card.Body>
            {/* Card Body will be used to display each bundle */}
            <ItemList items={items}/>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
