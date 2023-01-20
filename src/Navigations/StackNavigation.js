import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AddItem from '../Screens/AddItem';
import ChatRoom from '../Screens/ChatRoom';
import CreateChatRoom from '../Screens/CreateChatRoom';
import List from '../Screens/List';
import Login from '../Screens/Login';
import Messages from '../Screens/Messages';

import SignUp from '../Screens/SignUp'
import HomeStack from './HomeStack';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name='ChatRoom' component={ChatRoom}/>
        <Stack.Screen name='CreateChatRoom' component={CreateChatRoom}/>
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='AddItem' component={AddItem} />
        <Stack.Screen name='List' component={List} />
        <Stack.Screen name='HomeStack' component={HomeStack} />
      </Stack.Navigator>
  );
}