import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/counterReducer'
import userReducer from './reducer/userReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    user:userReducer
  }
})