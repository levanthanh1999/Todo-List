import { todoList } from './reducer/mytodo';
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
    todoList: todoList.reducer
})


export type RootState = ReturnType<typeof rootReducer>