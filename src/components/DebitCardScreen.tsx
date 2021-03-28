import React, { useEffect } from 'react'
import {
	StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView, StatusBar,
} from 'react-native'
import { ConnectedProps, connect } from 'react-redux'

import R from '../resources'
import BalanceView from './BalanceView'

import DebitInfoView from './DebitInfoView'
import TopView from './TopView'
import { UserAction } from '../actions'
import { UserInfoType } from '../types'

const Dimension = Dimensions.get('window')

type MappedProps = {
    userInfo: UserInfoType
}
const mapState = (state: RootState): MappedProps => ({
    userInfo: state.user.userInfo,
})

const mapDispatch = {
    getUserInfo: UserAction.getUserInfo,
}

const connector = connect(mapState, mapDispatch)
interface Props extends ConnectedProps<typeof connector> {}

const DebitCardScreen = (props: Props): JSX.Element => {
	const { userInfo, getUserInfo } = props
	useEffect(() => {
		getUserInfo()
	},[])
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
				<BalanceView amount={userInfo?.availableBalance} />
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

export default connector(DebitCardScreen)

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
