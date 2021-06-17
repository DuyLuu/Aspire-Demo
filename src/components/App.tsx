import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'

import { DebitNavigator } from '../types'

import DebitCardScreen from './debit/DebitCardScreen'
import SpendingLimitScreen from './spending/SpendingLimitScreen'
import SignInScreen from './login/SignInScreen'
import UserInfoScreen from './settings/UserInfoScreen'

const MainStack = createStackNavigator<DebitNavigator>()
const Tab = createBottomTabNavigator()

const MainScreen = () => {
    return (
        <MainStack.Navigator headerMode="none" initialRouteName="DebitCard">
            <MainStack.Screen name="DebitCard" component={DebitCardScreen} />
            <MainStack.Screen name="SpendingLimit" component={SpendingLimitScreen} />
        </MainStack.Navigator>
    )
}

const App = (): JSX.Element => {
    const user = useSelector(root => root.user)
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                { user?.isLoggedIn
                    ? (
                        <Tab.Navigator>
                            <Tab.Screen name="Main" component={MainScreen} />
                            <Tab.Screen name="Settings" component={UserInfoScreen} />
                        </Tab.Navigator>
                    )
                    : <SignInScreen />}
            </SafeAreaProvider>
        </NavigationContainer>
    )
}

export default App
