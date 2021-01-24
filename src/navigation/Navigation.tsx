import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feed } from "../feed/Feed";
import { Settings } from "../settings/Settings";
import { createStackNavigator } from '@react-navigation/stack';
const Tabs = createBottomTabNavigator();

export const Navigation = ({data,limit,onEndReached}:any)=>{
    const feedProps = {data,onEndReached};
    const settingsProps = {limit};
    console.log('nav');
    return(
        <NavigationContainer>
        <Tabs.Navigator>
            <Tabs.Screen name="Feed">
                {() => <Feed {...feedProps} />}
            </Tabs.Screen>
            <Tabs.Screen name="Settings">
                {() => <Settings {...settingsProps} />}
            </Tabs.Screen>
        </Tabs.Navigator>
    </NavigationContainer>
    )
}