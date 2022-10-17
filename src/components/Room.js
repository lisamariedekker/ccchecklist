import React from 'react'
import Bundle from './Bundle'

const Room = ({rooms}) => {

  return (
    <div>
      {rooms.map(room => {
        return (
          <>
            <h4>{room.name}</h4>
            <Bundle bundles={room.bundles} key={room.id} />
          </>
        )
      })}
    </div>
  );
};

export default Room;