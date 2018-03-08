import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src/Pages/Home'
import HotelList from './src/Pages/HotelList'


const RootStack = StackNavigator(
    {
      Home: {
        screen: Home,
      },
      HotelList: {
        screen: HotelList,
      },
    },
    {
      initialRouteName: 'Home',
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
);

export default class Index extends React.Component {
    render() {
      return (<RootStack/>)
    }
}
  
AppRegistry.registerComponent('hotelProdApp09', () => Index);
