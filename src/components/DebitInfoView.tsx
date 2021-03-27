/* @flow */

import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

import R from '../resources'
import CardView from './CardView'

const SCREEN_HEIGHT = Dimensions.get('window').height

const DebitInfoView = () : JSX.Element => {
    return (
        <View style={styles.container}>
            <CardView />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: SCREEN_HEIGHT,
        backgroundColor: R.Colors.header,
    },
})

export default DebitInfoView