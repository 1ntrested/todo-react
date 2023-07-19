import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
  const[todos,setTodos]=useState([]);

  function addTodo(todo){
    //taking valid input no spaces
    if(!todo.text || /^\s*$/.test(todo.text)){
        return;
    }

    const newTodos=[todo, ...todos];

    setTodos(newTodos);
    console.log(todo, ...todos);
  };


  function completeTodo(id){
    let updatedTodos = todos.map(todo=>{
        if(todo.id === id){
            todo.isComplete= !todo.isComplete;
        }
        return todo;
    });
    setTodos(updatedTodos);
   };
 
   function removeTodo(id){
    const removeArr=[...todos].filter(todo=>todo.id!==id);
    setTodos(removeArr);
   };

   function editTodo(id,newvalue){
    if(!newvalue.text || /^\s*$/.test(newvalue.text)){
      return;
  }
      setTodos(prev=>prev.map(item=>(item.id===id ? newvalue :item)))
   }

  return (
    <div>
     <h1>Whats the plan for Today?</h1>
     <TodoForm onSubmit={addTodo} />
     <Todo
     todos={todos}
     completeTodo={completeTodo}
     removeTodo={removeTodo}
     editTodo={editTodo}
      />
    </div>
  );
}

export default TodoList;