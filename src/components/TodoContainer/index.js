import React from 'react';
import ToDoItem from '../ToDoItem';

function TodoContainer() {
  const listName = [
    { id: 1, title: 'Learn JavaScript', checked: false },
    { id: 2, title: 'Learn React', checked: true },
    { id: 3, title: 'Learn Hooks', checked: false }
  ];

  return (
    <div>
      <ul>
        {listName.map(post => {
          return (
            <ToDoItem
              key={post.id}
              id={post.id}
              title={post.title}
              checked={post.checked}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoContainer;
