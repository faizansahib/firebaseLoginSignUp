import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-native-paper'
import { increment, decrement} from '../store/reducer/counterReducer';
import { add,remove } from '../store/reducer/userReducer';

export default function HomeStack() {

    const [counter, setCounter] = useState(0);
    

  

   
    const count = useSelector(state => state.counter.value);
    const added = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    console.log(count);
    console.log(added);
    alert(counter, " this is initialState of counter" , setCounter, ' this is counter setter which will be finally setted')

    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={()=>{dispatch(decrement())}}>
                <Text>decrement</Text>
            </TouchableOpacity>

            <Text>{count}</Text>
           
            <TouchableOpacity  onPress={ () => dispatch(increment())}>
                <Text>increment</Text>
            </TouchableOpacity>
            <View>
                <Text>
               new user : 
                </Text>
                { added.map((item, key)=>(
         <Text key={key} style={styles.TextStyle}> {key} : { item } </Text>)
         )}
                
                
            </View>
            
                <TouchableOpacity onPress={() => dispatch(remove()) } >
                    <Text>remove user</Text>
                </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
     
    },
    TextStyle:{
        fontSize : 25,
         textAlign: 'center',
         
      }
})



