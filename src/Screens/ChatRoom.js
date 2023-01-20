// import React, { useState, useEffect } from 'react'
// import {
//   View,
//   StyleSheet,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   ActivityIndicator
// } from 'react-native'
// import Separator from '../Components/Seperator';
// import firestore from '@react-native-firebase/app'

// export default function ChatRoom() {
//     const [threads, setThreads] = useState([])
//     const [loading, setLoading] = useState(true)
  
//     useEffect(() => {
//       const unsubscribe = firestore()
//         .collection('MESSAGE_THREADS')
//         .orderBy('latestMessage.createdAt', 'desc')
//         .onSnapshot(querySnapshot => {
//           const threads = querySnapshot.docs.map(documentSnapshot => {
//             return {
//               _id: documentSnapshot.id,
//               name: '',
//               latestMessage: { text: '' },
//               ...documentSnapshot.data()
//             }
//           })
  
//           setThreads(threads)
//           console.log(threads)
//           if (loading) {
//             setLoading(false)
//           }
//         })
  
//       return () => unsubscribe()
//     }, [])
  
//     if (loading) {
//       return <ActivityIndicator size='large' color='#555' />
//     }
  
//     // ...

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={threads}
//         keyExtractor={item => item._id}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => alert('Open a message thread')}>
//             <View style={styles.row}>
//               <View style={styles.content}>
//                 <View style={styles.header}>
//                   <Text style={styles.nameText}>{item.name}</Text>
//                 </View>
//                 <Text style={styles.contentText}>
//                   {item.latestMessage.text.slice(0, 90)}
//                 </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         )}
//         ItemSeparatorComponent={() => <Separator />}
//       />
//     </View>
//   )
//   }
  

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#dee2eb'
//     },
//     title: {
//       marginTop: 20,
//       marginBottom: 30,
//       fontSize: 28,
//       fontWeight: '500'
//     },
//     row: {
//       paddingRight: 10,
//       paddingLeft: 5,
//       paddingVertical: 5,
//       flexDirection: 'row',
//       alignItems: 'center'
//     },
//     content: {
//       flexShrink: 1
//     },
//     header: {
//       flexDirection: 'row'
//     },
//     nameText: {
//       fontWeight: '600',
//       fontSize: 18,
//       color: '#000'
//     },
//     dateText: {},
//     contentText: {
//       color: '#949494',
//       fontSize: 16,
//       marginTop: 2
//     }
//   })



import { View, Text,Button } from 'react-native'
import React,{useEffect} from 'react'



export default function ChatRoom({navigation}) {


  return (
    <View>
        <Text>Home Screen</Text>
        <Button
          title="Add an Item"
          onPress={() => navigation.navigate('AddItem')}
        />
        <Button
          title="List of Items"
          color="green"
          onPress={() => navigation.navigate('List')}
        />
      </View>
  )
}