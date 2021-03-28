import React from 'react'
import {
	StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView, StatusBar,
} from 'react-native'

import R from '../resources'

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
		<TopView />
		<Text style={styles.availableBalance}>Available balance</Text>
		<View style={styles.balanceView}>
			<View style={styles.currencyView}>
				<Text style={styles.currencyText}>S$</Text>
			</View>
			<Text style={styles.balanceAmount}>3,000</Text>
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
		marginTop: 24,
		marginLeft: 24,
	},
	balanceView: {
		flexDirection: 'row',
		marginTop: 16,
		marginLeft: 24,
		height: 33,
		alignItems: 'center',
	},
	currencyView: {
		width: 40,
		height: 22,
		backgroundColor: R.Colors.primary,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		marginRight: 10,
	},
	currencyText: {
		color: 'white',
		fontSize: 12,
		fontWeight: 'bold',
	},
	balanceAmount: {
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
	},
	scrollViewContentStyle: {
		paddingTop: 180,
	},
  	scrollView: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'transparent',
  	},
})
