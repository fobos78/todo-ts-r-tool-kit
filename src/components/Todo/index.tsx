import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeLastTodo, countPlus } from '../../ToolkitRedux/toolkitSlice';

function Todo() {
  const [todo, setTodo] = useState('');
  const todos: any = useSelector((state: any) => state.todos);
  const count: any = useSelector((state: any) => state.count);
  const dispatch = useDispatch();

  function changTodo(){
    dispatch(addTodo(todo));
    setTodo('');
  }
  function changTodos(event: any){
    setTodo(event.target.value);
  }

  return (
    <div>
        <div>My count - &nbsp;{count}</div>
      <input onChange={changTodos} value={todo} />
      <button type="button" onClick={changTodo}>Add</button>
      <button type="button" onClick={() => dispatch(removeLastTodo())}>Delete Last</button>
      <button type="button" onClick={() => dispatch(countPlus())}>count + 1</button>
      {todos.map((el: any) => (
        <h3 key={Math.random()}>{
            el
            }</h3>
      ))}
    </div>
  );
}

export default Todo;