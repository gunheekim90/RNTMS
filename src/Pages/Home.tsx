/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Title from '../components/Title'
import Footer from '../components/Footer'
import { Container, Header, Content, FooterTab, Button, Icon } from 'native-base';
const instructions: string = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface Props {};
interface State {};
export default class App extends Component<Props,State> {
    static navigationOptions = {
        headerTitle: 'WNH',
        headerRight: (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
      };
  render() {
    let testProps = "이거구나";
    return (
      <Container>
   
        <Content>
        <Title title={testProps}/>
        <Text>
          Welcome to React Native 
        </Text>
        <Text>
          React Native + TypeScript + MobX + Navigation
        </Text>
        <Text>
          {instructions}
        </Text>
       </Content>
        <Footer navigator={this.props.navigation}/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

});
