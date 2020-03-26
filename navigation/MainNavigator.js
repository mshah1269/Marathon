import React from 'react';
import {  Text } from 'react-native';
import { createStackNavigator  } from 'react-navigation-stack';
import { createAppContainer  } from "react-navigation";


import HomeScreen from '../Screens/HomeScreen';
  



const HomeNavigator = createStackNavigator(
    {
      Home: {
        screen: HomeScreen
      }
    }
  );

  export default createAppContainer(HomeNavigator);