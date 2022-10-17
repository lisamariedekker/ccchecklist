import React from 'react';
 
const Item = ({req, handleItemToggle}) => {

  const handleClick = (e) => {
    e.preventDefault()
    handleItemToggle(e.currentTarget.id)
  }
  
   return (
       <div id={req.id} value={req.id} onClick={handleClick} className={req.completed ? 'pointer strike' : 'pointer'}>
           {req.item.name}
       </div>
   );
};
 
export default Item;