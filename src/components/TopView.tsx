import React from 'react'

import { View, Text, Image, StyleSheet } from 'react-native'

import R from '../resources'

const TopView = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Image source={R.Images.Logo} style={styles.logo}/>
            <Text style={styles.screenName}>Debit Card</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        justifyContent: 'flex-end',
    },
    screenName: {
        position: 'absolute',
        bottom: 0,
        left: 24,
        height: 33,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    logo: {
        width: 32,
        height: 32,
    },
})

export default TopView