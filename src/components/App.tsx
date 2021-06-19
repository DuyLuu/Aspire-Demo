import React, { useEffect } from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'
import firebase from 'firebase'

import { DebitNavigator } from '../types'

import DebitCardScreen from './debit/DebitCardScreen'
import SpendingLimitScreen from './spending/SpendingLimitScreen'
import SignInScreen from './login/SignInScreen'
import UserInfoScreen from './settings/UserInfoScreen'

const MainStack = createStackNavigator<DebitNavigator>()
const LoginStack = createStackNavigator<LoginNavigator>()
const Tab = createBottomTabNavigator()

const MainScreen = () => {
    return (
        <MainStack.Navigator headerMode="none" initialRouteName="DebitCard">
            <MainStack.Screen name="DebitCard" component={DebitCardScreen} />
            <MainStack.Screen name="SpendingLimit" component={SpendingLimitScreen} />
        </MainStack.Navigator>
    )
}

const LoginScreen = () => {
    return (
        <LoginStack.Navigator>
            <LoginStack.Screen name="SignIn" component={SignInScreen} options={{ title: 'SignIn' }} />
        </LoginStack.Navigator>
    )
}

const App = (): JSX.Element => {
    useEffect(() => {
        const firebaseConfig = {
            apiKey: 'AIzaSyDmyNA83cFOsH0J7vyZ0LzKiqVBUvjYmzw',
            authDomain: 'aspire-9eb45.firebaseapp.com',
            projectId: 'aspire-9eb45',
            storageBucket: 'aspire-9eb45.appspot.com',
            messagingSenderId: '967020336424',
            appId: '1:967020336424:web:1cea85a7d412d924766c1d',
            measurementId: 'G-4QYEVQ58EV'
        }
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        } else {
            firebase.app()
        }
    }, [])
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
                    : <LoginScreen />}
            </SafeAreaProvider>
        </NavigationContainer>
    )
}

export default App
