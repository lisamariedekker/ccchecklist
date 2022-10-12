import './App.css';
import { Container, Card, ListGroup, Col, Image, Row } from 'react-bootstrap';

function App() {

  function ListItem(props) {
    return <Row>
      <Col sm={1}>{props.value.name}</Col>
    </Row>
  }

  function ItemList(props) {
    const items = [
      {
        name: 'Wild Horseradish',
        season: ['Spring'],
        sprite: 'https://stardewvalleywiki.com/mediawiki/images/9/90/Wild_Horseradish.png',
        source: ['Foraging', 'Spring Seeds'],
        type: 'Forage'
      }
    ]
    const listItems = items.map((item) => 
      <ListItem key={item.id} value={item} />
    )
    return (
      <ListGroup>
        {listItems}
      </ListGroup>
    )
  }

  return (
    <div>
      <Container className="p-3">
        <Card>
          <Card.Body>
            {/* Card Body will be used to display each bundle */}
            <ListGroup>
              <ListGroup.Item>
                {/* List Group Item will be used to show a line with all information per Item in the Bundle */}
                <Row>
                  <Col sm={1}>
                    <Image rounded="true"></Image>
                  </Col>
                  <Col>Item name</Col>
                  <Col sm={1}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wind" viewBox="0 0 16 16">
                      <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                  </Col>
                  <Col>Source</Col>
                  <Col sm={2}>Type</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <ItemList />
      </Container>
    </div>
  );
}

export default App;
