import React from 'react'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import { addName, clearAll, deleteOne } from '../redux/reducer/mytodo';
import { RootState } from "../redux/rootReducer";


function MyToDoList() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const dataSource =  useSelector((state: RootState) => state.todoList.dataSource);
  
  const handleDelete = (e: any) => {
    dispatch(clearAll([]))
  }

  const handleX = (id:number) => {
    dispatch(deleteOne(id))
  }
  const onClick = (e: any) => {
    let values = {
      id: Date.now(),
      name: text,
    }
    dispatch(addName(values))
  }

  return (
    <div className='todoList'>
      <h1 className='title'>My To-Do-List</h1>
      <div className='addTask'>
            <h2 className='title1'>Add New Task</h2>
            <input 
            type="text" 
            id='input' 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='New Task...'
            />
            <div className='btn'>
                <button
                  onClick={onClick}
                  className='btn-add'> 
                  Add 
                </button>
                <button 
                  onClick={handleDelete}
                  className='btn-clear'> 
                  Clear All 
                </button>
            </div>
        </div>
      
      <div className='taskList'>
        <h2 className='title2'>My Task List</h2>
        <ul className='myList'>
          {dataSource.map((data:any, index:number) => (
            <li className='mylist' key={index}>
              {data.name}
            <button 
              className='btn-x'
              onClick={() => handleX(data.id)}
            >X</button>
            </li>
          ))}
        </ul>  
      </div>
    </div>
  )
}

export default MyToDoList