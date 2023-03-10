import { NavigationContainer } from '@react-navigation/native';
import React,{useState,useContext,useEffect} from 'react';
import { AuthContext } from './AuthProvider';
import auth from '@react-native-firebase/auth';
import AuthStack from './StackNavigation';

export default function Routes() {

  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  return (
      <NavigationContainer>
       
      
      {user ?    <AuthStack /> : null}
      </NavigationContainer>
  );
}