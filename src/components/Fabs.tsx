import React, { Component } from 'react';
import {Text} from 'react-native'
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
export default class Fabs extends Component<any,any> {
  constructor(props) {
      super(props)
    this.state = {
      active: 'true'
    };
  }
  render() {
    return (  
      <Container>
       
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
        </View>
      </Container>
    );
  }
}