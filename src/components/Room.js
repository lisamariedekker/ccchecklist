import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';
import Bundle from './Bundle'

const Room = ({rooms}) => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      {rooms.map(room => {
        return (
          <>
            <h4 className='pointer' onClick={() => setOpen(!open)}>{room.name}</h4>
            <Collapse in={open}>
              <div>
                <Bundle bundles={room.bundles} key={room.id} />
              </div>
            </Collapse>
          </>
        )
      })}
    </div>
  );
};

export default Room;