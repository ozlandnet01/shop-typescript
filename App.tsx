import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import { createStore, combineReducers } from 'redux';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import productReducer from './store/reducers/products';

import ShopNavigator from './navigation/ShopNavigator';


const rootReducer = combineReducers({
  products: productReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),

  })
}


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => {
        setFontLoaded(true);
      }}
      onError={console.warn}
      >
    </AppLoading>
    );
  }

  return (
    <Provider store={store}>
      <ShopNavigator/>
    </Provider>
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
