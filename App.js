import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Stack = createNativeStackNavigator();

export default function App() {

  const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user != null) {
      console.log("We are authenticated now!")
    } 


  });

  

  const [isLoggedin, setIsLoggedIn] = useState(false);


  return (
    <NavigationContainer>
      {isLoggedin ? <Stack.Navigator>
       <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator> :
      <Stack.Navigator>
          <Stack.Screen options={{headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen options={{headerShown: false }} name="Register" component={RegisterScreen} />
      </Stack.Navigator> }
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


