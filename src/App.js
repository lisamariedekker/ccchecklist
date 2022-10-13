import './App.css';
import { Container, Card, Row, Image, Col, ListGroup } from 'react-bootstrap';
import Item from './components/Item'
import { bundles } from './mock'

function App() {

  function RequirementItem(props) {
    console.log(props.value, 'REQUIREMENT ITEM')
    return <Row>
      <Col>{props.value.completed}</Col>
      <Col>{props.value.quantity}</Col>
      <Col>{props.value.item.name}</Col>
    </Row>
  }

  // THIS EVENTUALLY BE MOVED TO A SEPARATE "REQUIREMENTS" COMPONENT
  function BundleRequirementsList(props) {
    const requirements = props.requirements
    console.log(requirements)
    const requirementList = requirements.map((requirement) =>
      <RequirementItem key={requirement.id} value={requirement} />
    )
    return (
      <ListGroup>
        <ListGroup.Item>
          {requirementList}
        </ListGroup.Item>
      </ListGroup>
    )
  }



  function BundleCard(props) {
    return <Card className='p-3'>
      <Row>
        <Col sm={1}>
          <Image rounded={true} src={props.value.img} width={'50'} height={'50'} />
        </Col>
        <Col>
          <Card.Title>{props.value.name}</Card.Title>
          <Card.Subtitle>{props.value.reward}</Card.Subtitle>        
        </Col>
      </Row>
      <BundleRequirementsList requirements={props.value.requirements} />
    </Card>
  }

  function BundleList(props) {
    const bundles = props.bundles
    const listItems = bundles.map((bundle) =>
      <BundleCard key={ bundle.id } value={bundle} />
    )
    return (
      <>
        {listItems}
      </>
    )
  }

  return (
    <div>
      <Container className="p-3">
        <Card>
          <Card.Body>
            <Item />
          </Card.Body>
        </Card>
      </Container>
      <BundleList bundles={bundles} />
    </div>
  );
}

export default App;
