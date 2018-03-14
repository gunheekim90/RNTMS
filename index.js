import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src/Pages/Home'
import HotelList from './src/Pages/HotelList'
import { Provider } from "mobx-react";
import stores from './src/mobx'
import OneSignal from 'react-native-onesignal';
import VersionCheck from 'react-native-version-check';


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
  componentWillMount() {
      OneSignal.addEventListener('received', this.onReceived);
      OneSignal.addEventListener('opened', this.onOpened);
      OneSignal.addEventListener('registered', this.onRegistered);
      OneSignal.addEventListener('ids', this.onIds);
      
    let currentVersion, latestVersion;
    //최신 버전,빌드버전을 가져옴
    console.log(VersionCheck.getPackageName());        // com.reactnative.app
    console.log(VersionCheck.getCurrentBuildNumber()); // 10
    console.log(VersionCheck.getCurrentVersion());     // 0.1.1
    currentVersion = VersionCheck.getCurrentVersion();
    //마켓에 등재되어있는 버전 상태를 가져옴
    VersionCheck.getLatestVersion({
      provider: 'playStore'  // for Android
    })
    .then(latestVersion => {
      console.log(latestVersion);    // 0.1.2
      latestVersion = latestVersion;
      if(currentVersion > latestVersion){
        console.log("Should need to update");
        Alert.alert(
          '공지사항',
          '최신버전이 아닙니다. WNH앱을 업데이트 하고, 새로운 기능과 소식을 접해보세요!',
          [
            {text: '다음에 할게요', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: '업데이트 하러가기', onPress: () => Linking.openURL('https://play.google.com/store/apps/details?id=com.hotelapp7')},
          ],
          { cancelable: false }
        )
      }else{
        console.log("Do not need to update ")
      }
    });

  }

  componentWillUnmount() {
      OneSignal.removeEventListener('received', this.onReceived);
      OneSignal.removeEventListener('opened', this.onOpened);
      OneSignal.removeEventListener('registered', this.onRegistered);
      OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
      console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onRegistered(notifData) {
      console.log("Device had been registered for push notifications!", notifData);
  }

  onIds(device) {
      console.log('Device info: ', device);
  }
    render() {
      console.disableYellowBox = true;
      return (
        <Provider {...stores}>
            <RootStack/>
        </Provider>
        )
    }
}
  
AppRegistry.registerComponent('hotelProdApp09', () => Index);
