import React, { createContext, useState } from 'react';
import { firebase, } from '@react-native-firebase/auth';





export const AuthContext = createContext({});

export const AuthProvider = ({ children, }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  
  return (
      <AuthContext.Provider
          value={{
            user,
            setUser,
            loading,
            setLoading,
            login: async (email, password) => {
              setLoading(true);

               try {
                await firebase
                .auth()
                .signInWithEmailAndPassword(email,password)
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
            },
            register: async (displayName, email, password) => {
              setLoading(true);

              try {
                await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((credential) => {
                  credential.user
                  .updateProfile({ displayName: displayName })
                  .then(async () => {
                    // TODO start a user chat session and log the user in
                  });
                });
              } catch (e) {
                console.log(e);
                alert(e)
              }

              setLoading(false);
            },
            logout: async () => {
              // TODO
             try {
              await firebase.auth().signOut();
             } catch (e){
               console.log(e);
             }
             
            },
          }}
      >
        {children}
      </AuthContext.Provider>
  );
};