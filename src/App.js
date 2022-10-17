import './App.css';
import { Container } from 'react-bootstrap';
import Bundle from './components/Bundle'
import { data } from './mock'
import { useState } from 'react';

function App() {

  const [ bundles, setBundles ] = useState(data)

  return (
    <div>
      <Container className="p-3">
        <Bundle bundles={bundles}/>
      </Container>
    </div>
  );
}

export default App;
