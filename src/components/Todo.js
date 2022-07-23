import React,{useState} from 'react'
import Form from './Form'
import {GrFormClose} from 'react-icons/gr'
import {GrFormEdit} from 'react-icons/gr'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
      id: null,
      value: ''
    });
  
    const submitUpdate = value => {
      updateTodo(edit.id, value);
      setEdit({
        id: null,
        value: ''
      });
    };
  
    if (edit.id) {
      return <Form edit={edit} onSubmit={submitUpdate} />;
    }

  return todos.map((todo, index) =>(
    <div className={todo.isComplete ? 'task-row complete':'task-row'} key={index}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
        </div>
        <div className='icon'>
            <GrFormClose
            onClick={() =>removeTodo(todo.id)}
            className='delete' 
            />
            <GrFormEdit 
            onClick={() =>setEdit({id:todo.id ,value:todo.text})}
            className='edit'
            />
        </div>
    </div>
  ))
}

export default Todo