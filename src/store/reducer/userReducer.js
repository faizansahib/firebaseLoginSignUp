import {createSlice} from '@reduxjs/toolkit';
import { firebase, } from '@react-native-firebase/auth';


const initialState = {
  user: null,

};

 console.log(initialState.user)
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    add: (state, action) => {
     state.user.push(action.payload);
    },
    remove:(state,action) => {
       state.user.pop()
    },
    login: async (email, password) => {
      try {
        await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res, 'from firebase');
          console.log('User Login Successfully!')
          alert('User Login Successfully!')
      
        })
       } catch (error) {
        alert(error)

       }
       setLoading(false)
      // TODO
    
    }
  },
});

export const {add,remove,login} = userSlice.actions;

export default userSlice.reducer;
