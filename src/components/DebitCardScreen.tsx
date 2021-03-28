import React from 'react'
import {
	StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView, StatusBar,
} from 'react-native'

import R from '../resources'
import BalanceView from './BalanceView'

import DebitInfoView from './DebitInfoView'
import TopView from './TopView'

const Dimension = Dimensions.get('window')

const DebitCardScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
		<StatusBar
			translucent
			backgroundColor="transparent"
			barStyle="light-content"
		/>
		<TopView title="Debit Card" />
        <View style={styles.balanceView}>
            <Text style={styles.availableBalance}>Available balance</Text>
            <BalanceView amount="3,000" />
        </View>
      	<ScrollView
		  	showsVerticalScrollIndicator={false}
			style={styles.scrollView}
			contentContainerStyle={styles.scrollViewContentStyle}
			alwaysBounceVertical={true}
		>
			<DebitInfoView />
      	</ScrollView>
    </SafeAreaView>
  )
}

export default DebitCardScreen

const styles = StyleSheet.create({
  	container: {
		flex: 1,
		backgroundColor: '#0C365A',
  	},
	availableBalance: {
		color: 'white',
		fontSize: 14,
        marginBottom: 8,
	},
    balanceView: {
        marginTop: 24,
		marginLeft: 24,
    },
	scrollViewContentStyle: {
		paddingTop: 180,
	},
  	scrollView: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'transparent',
  	},
})
