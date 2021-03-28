import React, { useState } from 'react'

import { FlatList, View, StyleSheet, Text } from 'react-native'
import { ConnectedProps, connect } from 'react-redux'

import R from '../resources'
import CardSettingsItemView from './CardSettingsItemView'

type MappedProps = {
    spendingLimit: string
}
const mapState = (state: RootState): MappedProps => ({
    spendingLimit: state.user.spendingLimit,
})
const connector = connect(mapState, null)
interface Props extends ConnectedProps<typeof connector> {}

const CardSettingsList = (props: Props): JSX.Element => {
    const { spendingLimit } = props
    const [showSpendingLimit, setShowSpendingLimit] = useState(false)
    const toggeSwitch = (value: boolean): void => {
        setShowSpendingLimit(value)
    }
    return (
        <View style={styles.container}>
            {showSpendingLimit && (
                <View style={styles.spendingLimit}>
                    <Text>Debit card spending limit</Text>
                    <Text>
                        <Text style={styles.currentSpend}>$0</Text>
                        <Text style={styles.spendingLimitText}>{` | $${spendingLimit}`}</Text>
                    </Text>
                </View>
            )}
            {R.Constants.CardSettingsListInfo.map((item, index): JSX.Element => {
                return (
                    <CardSettingsItemView
                        key={`${item.title}-${index}`}
                        data={item}
                        toggleSwitch={toggeSwitch}
                    />
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        marginTop: 90,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingTop: 180,
    },
    spendingLimit: {
        height: 24,
        flexDirection: 'row',
        marginHorizontal: 24,
        justifyContent: 'space-between',
    },
    currentSpend: {
        color: R.Colors.primary,
    },
    spendingLimitText: {
        color: R.Colors.subText,
    }
})

export default connector(CardSettingsList)