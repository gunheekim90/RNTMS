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
import Fabs from '../components/Fabs'
import { Container, Header, Content, FooterTab, Button, Icon } from 'native-base';
import { observer, inject } from "mobx-react";


const instructions: string = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface Props {};
interface State {};


@inject("counterStore")
@observer
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
          Welcome to React Native  {this.props.counterStore.count}
        </Text>
        <Text>
          React Native + TypeScript + MobX + Navigation
        </Text>
        <Text>
          {instructions}
        </Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Button style={styles.button1} title="Increment Counter" onPress={() => this.props.counterStore.increment()}/>
            <Button style={styles.button2} title="Decrement Counter" onPress={() => this.props.counterStore.decrement()}/>
        </View>
       </Content>
      
        <Footer navigator={this.props.navigation}/>
        {/* <Fabs/> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    ContainerStyle : {
      
    },
    button1 : {
        flex: 1,
        backgroundColor : 'red',
        height : 100,
        width : 100
    },
    button2 : {
        flex: 1,
        backgroundColor : 'black',
        height : 100,
        width : 100
    }
});
