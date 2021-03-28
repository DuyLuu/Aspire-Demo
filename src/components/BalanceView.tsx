import React from 'react'

import { StyleSheet, View, Text } from 'react-native'

import R from '../resources'

type Props = {
    amount: string,
    currency?: string,
    textColor?: string,
}

const BalanceView = (props: Props): JSX.Element => {
    const { amount, currency = 'S$', textColor = 'white' } = props
    return (
        <View style={styles.balanceView}>
            <View style={styles.currencyView}>
                <Text style={styles.currencyText}>{currency}</Text>
            </View>
            <Text style={[styles.balanceAmount, {color: textColor}]}>{amount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    balanceView: {
		flexDirection: 'row',
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
})

export default BalanceView