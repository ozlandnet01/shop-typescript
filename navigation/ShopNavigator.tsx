import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TestingScreen from '../screens/ProductsDetailScreen/TestingScreen';
import ShopHomeScreen from '../screens/ShopHomeScreen/ShopHomeScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ShopHomeScreen} />
      <Stack.Screen name="Testingss" component={TestingScreen} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

const ShopNavigator = () =>{
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Testing">
        <Drawer.Screen name="Home" component={MyStack}/>
        <Drawer.Screen name="Testing" component={TestingScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}



export default ShopNavigator;