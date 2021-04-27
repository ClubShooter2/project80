import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLogin from './screens/SignUpLogin';
import WelcomeScreen from './screens/welcomescreens';
import ExchangeScreen from './screens/exchangescreen';
import HomeScreen from './screens/homescreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
export default class  App extends React.Component{
    render(){
  return (
    <View style={styles.container}>
    <SignUpLogin/>
    <AppContainer/>
    <WelcomeScreen/>
    </View>
  );
    }
}
var BottomTabNavigator = createBottomTabNavigator({
  ExchangeScreen : {screen :ExchangeScreen},
  HomeScreen : {screen : HomeScreen},
})
var AppContainer = createAppContainer(BottomTabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});