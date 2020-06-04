import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../components/login/login'
import BottomStack from './bottom-stack'
import navigationService from '../redux/navigator.service';

const Stack = createStackNavigator();
export default function AppContainer() {
    return (
        <NavigationContainer ref={nav => {
            navigationService.setTopLevelNavigator(nav);
        }}>
            <Stack.Navigator initialRouteName="Login" headerMode='none' screenOptions={{ gestureEnabled: false }}>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="Home"
                    component={BottomStack}
                // initialParams={{ title: 'HOME' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}