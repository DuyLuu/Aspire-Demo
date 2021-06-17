import React, { useState } from 'react'

import { View, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'

import R from '../../resources'
import CardSettingsItemView from './CardSettingsItemView'

const CardSettingsList = (): JSX.Element => {
    const user = useSelector(root => root.user)
    const [showSpendingLimit, setShowSpendingLimit] = useState(false)

    return (
        <View style={styles.container}>
            {showSpendingLimit && (
                <View style={styles.spendingLimit}>
                    <Text>Debit card spending limit</Text>
                    <Text>
                        <Text style={styles.currentSpend}>{`$${user?.userInfo?.spending}`}</Text>
                        <Text style={styles.spendingLimitText}>{` | $${user?.spendingLimit}`}</Text>
                    </Text>
                </View>
            )}
            {R.Constants.CardSettingsListInfo.map((item, index): JSX.Element => {
                return (
                    <CardSettingsItemView
                        key={`${item.title}-${index}`}
                        data={item}
                        showSpendingLimit={(value) => setShowSpendingLimit(value)}
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
        alignItems: 'center'
    },
    spendingLimit: {
        height: 24,
        flexDirection: 'row',
        marginHorizontal: 24,
        justifyContent: 'space-between'
    },
    currentSpend: {
        color: R.Colors.primary
    },
    spendingLimitText: {
        color: R.Colors.subText
    }
})

export default CardSettingsList
