import './App.css';
import { Container, Card } from 'react-bootstrap';
import Item from './components/Item'
import Bundle from './components/Bundle'
import { bundles } from './mock'

function App() {

  return (
    <div>
      <Container className="p-3">
        <Card>
          <Card.Body>
            <Item />
          </Card.Body>
        </Card>
      </Container>
      <Bundle bundles={bundles}/>
    </div>
  );
}

export default App;
