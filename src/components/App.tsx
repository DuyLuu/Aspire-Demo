import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { DebitNavigator } from '../types'

import DebitCardScreen from './DebitCardScreen'
import SpendingLimitScreen from './SpendingLimitScreen'

const MainStack = createStackNavigator<DebitNavigator>()

const App = (): JSX.Element => {
	return (
		<NavigationContainer>
			<SafeAreaProvider>
				<MainStack.Navigator headerMode="none" initialRouteName="DebitCard">
					<MainStack.Screen name="DebitCard" component={DebitCardScreen} />
					<MainStack.Screen name="SpendingLimit" component={SpendingLimitScreen} />
				</MainStack.Navigator>
			</SafeAreaProvider>
		</NavigationContainer>
	)
}

export default App
