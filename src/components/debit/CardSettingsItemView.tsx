import React, { useCallback, useEffect, useState } from 'react'
import {
    NativeModules,
    View, StyleSheet, Image, Text, Switch
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import R from '../../resources'

const { CalendarModule } = NativeModules

type Props = {
    data: Object,
    showSpendingLimit?: Function,
}

const CardSettingsItemView = (props: Props): JSX.Element => {
    const {
        title, sub, haveSwitch, icon, type
    } = props.data
    const navigation = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = (value: boolean) => {
        setIsEnabled(value)
    }
    const updateStatusSpendingLimit = useCallback(() => {
        type === R.Enums.CardActionType.SPENDING_LIMIT &&
                props.showSpendingLimit?.(isEnabled)
    }, [isEnabled])
    useEffect(() => {
        const didFocusListener = navigation.addListener('focus', updateStatusSpendingLimit)
        return didFocusListener
    }, [updateStatusSpendingLimit])
    useEffect(() => {
        if (isEnabled && type === R.Enums.CardActionType.SPENDING_LIMIT) {
            navigation.navigate('SpendingLimit')
        }
        if (isEnabled && type === R.Enums.CardActionType.FREEZE) {
            CalendarModule.createCalendarEvent('Luu test native module', 'testLocation')
        }
        !isEnabled && updateStatusSpendingLimit()
    }, [isEnabled])

    return (
        <View style={styles.container}>
            <Image source={icon} style={styles.icon}/>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.sub}>{sub}</Text>
            </View>
            {haveSwitch && <Switch
                style={styles.switch}
                trackColor={{ false: '#eeeeee', true: R.Colors.primary }}
                thumbColor={'#ffffff'}
                ios_backgroundColor="#eeeeee"
                onValueChange={toggleSwitch}
                disable={true}
                value={isEnabled}
            />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 73,
        flexDirection: 'row',
        paddingHorizontal: 24,
        paddingVertical: 16,
        alignItems: 'center'
    },
    icon: {
        width: 32,
        height: 32,
        marginRight: 12
    },
    title: {
        fontSize: 14,
        color: '#000000',
        marginBottom: 4
    },
    sub: {
        fontSize: 11,
        color: '#00000066'
    },
    switch: {
        position: 'absolute',
        right: 24,
        top: 24,
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }]
    }
})

export default CardSettingsItemView
