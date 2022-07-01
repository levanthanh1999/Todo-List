import { createSlice } from '@reduxjs/toolkit'

interface DataUser {
    id: number;
    name: string;
    age: number;
}

const arr: DataUser[] = []

export const todoList = createSlice({
    
  name: 'listTodo',
  initialState: {
    dataSource: arr,
  },
  reducers: {
    addName: (state, action) => {
        state.dataSource = [...state.dataSource, action.payload]
    },
    clearAll: (state, action) => {
      state.dataSource = []
    },
    deleteOne: (state, action) => {
      state.dataSource = state.dataSource.filter(_=>_.id !== action.payload)
    },
  }
})

export const { addName, clearAll, deleteOne } = todoList.actions
export default todoList.reducer