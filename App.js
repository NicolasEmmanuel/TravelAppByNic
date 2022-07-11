import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Getstarted from './Pages/Getstarted'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();

import Home from './Pages/Home';
 
const App = () => {
  return (

  <NavigationContainer>

      <Stack.Navigator  screenOptions={{headerShown:false}} initialRouteName="Home">

        <Stack.Screen name="Start" component={Getstarted} />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}

      </Stack.Navigator>

    </NavigationContainer>
    
  );
}

export default App

const styles = StyleSheet.create({})