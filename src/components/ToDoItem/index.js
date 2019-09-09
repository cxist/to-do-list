import React, { useState } from 'react';

function ToDoItem({ id, title, checked }) {
  const [box, setBox] = useState(checked);

  const onChildChange = () => {
    setBox(!box);
  };

  return (
    <li>
      <input type="checkbox" checked={box} onChange={onChildChange} />
      <span>{title}</span>
    </li>
  );
}

export default ToDoItem;
