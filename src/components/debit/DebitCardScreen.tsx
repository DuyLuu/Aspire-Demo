import React, { useEffect } from 'react'
import {
    StyleSheet, Text, View, ScrollView,
    SafeAreaView, StatusBar
} from 'react-native'
import { connect, ConnectedProps } from 'react-redux'

import BalanceView from './BalanceView'

import DebitInfoView from './DebitInfoView'
import TopView from '../TopView'
import { UserAction } from '../../actions'
import { RootState } from '../../reducers'

type MappedProps = {
    availableBalance: string
}
const mapState = (state: RootState): MappedProps => {
    return {
        availableBalance: state.user?.userInfo?.availableBalance
    }
}

const mapDispatch = (dispatch) => {
    return {
        getUserInfo: () => dispatch(UserAction.getUserInfo())
    }
}

const connector = connect(mapState, mapDispatch)
interface Props extends ConnectedProps<typeof connector> {}

const DebitCardScreen = (props: Props): JSX.Element => {
    const { getUserInfo, availableBalance } = props
    useEffect(() => {
        getUserInfo()
    }, [getUserInfo])

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

export default connector(DebitCardScreen)

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
