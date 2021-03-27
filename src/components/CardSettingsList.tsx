import React from 'react'

import { FlatList, View, StyleSheet } from 'react-native'

import R from '../resources'
import CardSettingsItemView from './CardSettingsItemView'

const CardSettingsList = (): JSX.Element => {
    return (
        <View style={styles.container}>
            {R.Constants.CardSettingsListInfo.map((item, index): JSX.Element => {
                return (
                    <CardSettingsItemView key={`${item.title}-${index}`} data={item} />
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
})

export default CardSettingsList