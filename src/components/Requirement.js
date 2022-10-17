import React, { useState } from 'react'
import Item from './Item'

const Requirement = ({req}) => {
  const [ requirements, setRequirements ]= useState(req)

  const handleItemToggle = (id) => {
    const requirementsMap = requirements.map(req => {
      return req.id === Number(id) ? { ...req, completed: !req.completed } : { ...req }
    })
    setRequirements(requirementsMap)
  }

  return (
    <div>
      {requirements.map(req => {
        return (
          <Item req={req} key={req.id} handleItemToggle={handleItemToggle} />
        )
      })}
    </div>
  );
};

export default Requirement;
