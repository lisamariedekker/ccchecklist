import './App.css';
import { Container, Card } from 'react-bootstrap';
import Item from './components/Item'

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
    </div>
  );
}

export default App;
