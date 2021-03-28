import React from 'react'

import {
    View, Text, Image, StyleSheet, TouchableOpacity,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import R from '../resources'

type Props = {
    title?: string,
    backButton?: boolean,
}

const TopView = (props: Props): JSX.Element => {
    const { title = '', backButton = false } = props
    const navigation = useNavigation()

    const renderTitle = (): JSX.Element | undefined => {
        if (title) {
            return <Text style={styles.screenName}>{title}</Text>
        }
        return undefined
    }
    const onBackPress = (): void => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            {renderTitle()}
            <TouchableOpacity onPress={onBackPress}>
                {backButton && <Image source={R.Images.Back} style={styles.backButton} />}
            </TouchableOpacity>
            <Image source={R.Images.Logo} style={styles.logo}/>
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
        justifyContent: 'space-between',
    },
    backButton: {
        width: 24,
        height: 24,
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