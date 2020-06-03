import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppContainer from './navigations/app-navigation';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
} from 'react-native';

export default function App() {
    return (
        <Provider store={store.store}>
            <SafeAreaView style={{ flex: 1 }}>
                <AppContainer />
            </SafeAreaView>
        </Provider>
    );
};