import './App.css';
import { Container } from 'react-bootstrap';
import { data } from './mock'
import { useState } from 'react';
import Room from './components/Room'

function App() {

  const [ rooms, setRooms ] = useState(data)

  return (
    <div>
      <Container className="p-3">
        <Room rooms={rooms}/>
      </Container>
    </div>
  );
}

export default App;
