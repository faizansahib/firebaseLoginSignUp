// import { Firestore } from '@firebase/firestore';
import React from 'react';
import {TouchableOpacity,Text} from 'react-native';

export default function CreateChatRoom({ navigation }) {
    // ... rest remains same
    // function handleButtonPress() {
    //   if ("roomName.length" > 0) {
    //     // create new thread using firebase & firestore
    //     console.log('called firebase')
    //     Firestore()
    //       .then(docRef => {
    //         docRef.collection('MESSAGES').add({
    //           text: ` created. Welcome!`,
    //           createdAt: new Date().getTime(),
    //           system: true
    //         })
    //         navigation.navigate('ChatRoom')
    //       })
    //   }
    // }

    return(
     <TouchableOpacity onPress={() =>  navigation.navigate('ChatRoom')} >
        <Text>Go to ChatRoom</Text>
     </TouchableOpacity>
    )
  }