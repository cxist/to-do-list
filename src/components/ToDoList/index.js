import React, { useState } from 'react';

// function ToDoList({ text, handleClick }) {
//   const [count, setCount] = useState(0);

//   const onClick = () => {
//     const newCount = count + 1;
//     setCount(newCount);
//     handleClick(newCount);
//   };

//   return (
//     <div>
//       <div onClick={onClick}>{text}</div>
//     </div>
//   );
// }

function ToDoList({ text }) {
  return (
    <div>
      <div>{text}</div>
    </div>
  );
}

export default ToDoList;
