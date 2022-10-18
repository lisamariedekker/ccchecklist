import React from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import Bundle from './Bundle'

const Room = ({rooms}) => {

  return (
    <div>
      <Tabs defaultActiveKey={1} className='mb-3' fill>
        {rooms.map(room => {
          return (
            <Tab eventKey={room.id} title={room.name}>
              <Bundle bundles={room.bundles} key={room.id} />
            </Tab>
          )
        })}
      </Tabs>
    </div>
  );
};

export default Room;