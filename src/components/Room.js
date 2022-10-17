import React from 'react'
import { Accordion } from 'react-bootstrap';
import Bundle from './Bundle'

const Room = ({rooms}) => {

  return (
    <div>
      {rooms.map(room => {
        return (
          <>
          <Accordion>
            <Accordion.Item eventKey={room.id}>
              <Accordion.Header>
                <h4 className='pointer'>{room.name}</h4>
              </Accordion.Header>
              <Accordion.Body>
                <Bundle bundles={room.bundles} key={room.id} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </>
        )
      })}
    </div>
  );
};

export default Room;