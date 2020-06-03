import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import redux from './config/redux';
import store from './redux/store';
import LoginScreen from './components/login/login';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Provider store={store.store}>
        <SafeAreaView>
          <ScrollView>
            <LoginScreen/>
            {/* <View>
              <Text>aaaaaaaaaaaa</Text>
            </View> */}
          </ScrollView>
        </SafeAreaView>
      </Provider>
  );
  }
};