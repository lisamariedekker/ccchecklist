import './App.css';
import { Container, Card } from 'react-bootstrap';
import Bundle from './components/Bundle'
import { bundles } from './mock'

function App() {

  return (
    <div>
      <Container className="p-3">
        <Bundle bundles={bundles}/>
      </Container>
    </div>
  );
}

export default App;
