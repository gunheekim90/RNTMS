import React, { Component } from 'react';
import { StyleSheet,Text } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';

interface Props {
    navigation: any
}
interface State {}
export default class FooterTabsIconExample extends Component<Props, State> {
    constructor(props: Props){
        super(props)
    }

    render() {
    const { navigate } = this.props.navigator;
    return (
      <Container>
        <Content />
        <Footer>
          <FooterTab style={styles.FooterStyle}>
            <Button badge vertical onPress={() => navigate('HOME')}>
                <Badge><Text>2</Text></Badge>
                <Icon name="apps" style={styles.IconStyle}/>
                <Text style={styles.IconStyle}>HOME</Text>
            </Button>
            <Button onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigate('HotelList', {
                     otherParam: 'Move Move',
                    });
                }}>
              <Icon name="camera" style={styles.IconStyle}/>
                <Text style={styles.IconStyle}>HOTEL</Text>
            </Button>
            <Button>
              <Icon name="navigate" style={styles.IconStyle}/>
                <Text style={styles.IconStyle}>Apps</Text>
            </Button>
            <Button>
              <Icon name="person" style={styles.IconStyle}/>
                <Text style={styles.IconStyle}>Apps</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    FooterStyle : {
        backgroundColor : 'blue'
    },
    IconStyle : {
        color : '#fff'
    }
});