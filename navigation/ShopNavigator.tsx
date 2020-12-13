import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import TestingScreen from '../screens/ProductsDetailScreen/TestingScreen';
import ShopHomeScreen from '../screens/ShopHomeScreen/ShopHomeScreen';

import { RouteProp } from '@react-navigation/native';
import IProductDetailScreen from '../constants/IProductDetailScreen';

type RootStackParamList = {
    DetailProduct: {ProductDetail :IProductDetailScreen}
}

type ProductDetailScreenProp = RouteProp<RootStackParamList, 'DetailProduct'>

type Props = {
    DetailScreen: ProductDetailScreenProp
    Home: any
}

const Stack = createStackNavigator<Props>();

function MyStack(props: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ShopHomeScreen} options={{
        headerLeft: () =>(
            <MaterialIcons 
            name="menu" 
            size={25 } 
            color={"red"}
            onPress= {() => {
              props.navigation.toggleDrawer()
            }}
            style={{
              marginLeft: 15
            }}
            />
        )
      }}/>
      <Stack.Screen name="DetailScreen" component={TestingScreen} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

const ShopNavigator = () =>{
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MyStack}/>
        <Drawer.Screen name="Testing" component={TestingScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}



export default ShopNavigator;