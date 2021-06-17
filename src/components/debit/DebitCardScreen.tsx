import React, { useEffect } from 'react'
import {
    StyleSheet, Text, View, ScrollView,
    SafeAreaView, StatusBar
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import BalanceView from './BalanceView'

import DebitInfoView from './DebitInfoView'
import TopView from '../TopView'
import { UserAction } from '../../actions'

const DebitCardScreen = (props: Props): JSX.Element => {
    const availableBalance = useSelector(state => state.user?.userInfo?.availableBalance)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(UserAction.getUserInfo())
    }, [])

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
                <BalanceView amount={availableBalance} />
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
        backgroundColor: '#0C365A'
    },
    availableBalance: {
        color: 'white',
        fontSize: 14,
        marginBottom: 8
    },
    balanceView: {
        marginTop: 24,
        marginLeft: 24
    },
    scrollViewContentStyle: {
        paddingTop: 180
    },
    scrollView: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent'
    }
})
