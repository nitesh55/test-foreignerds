import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from './container/Home';
import Profile from './container/Profile';
import Setting from './container/Setting';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}

const SetttingStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Setting">
            <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
    );
}

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeStackNavigator} />
            <Tab.Screen name="Profile" component={ProfileStackNavigator} />
            <Tab.Screen name="Setting" component={SetttingStackNavigator} />
        </Tab.Navigator>
    );
};

const ProfileTabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Profile">
            <Tab.Screen name="Home" component={HomeStackNavigator} />
            <Tab.Screen name="Profile" component={ProfileStackNavigator} />
            <Tab.Screen name="Setting" component={SetttingStackNavigator} />
        </Tab.Navigator>
    );
};

const SettingTabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Setting">
            <Tab.Screen name="Home" component={HomeStackNavigator} />
            <Tab.Screen name="Profile" component={ProfileStackNavigator} />
            <Tab.Screen name="Setting" component={SetttingStackNavigator} />
        </Tab.Navigator>
    );
};

export default DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeTabNavigator} />
                <Drawer.Screen name="Profile" component={ProfileTabNavigator} />
                <Drawer.Screen name="Setting" component={SettingTabNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
