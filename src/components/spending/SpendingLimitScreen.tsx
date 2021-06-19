import React, { useCallback, useState, useMemo } from 'react'

import {
    SafeAreaView, StyleSheet, Text,
    View, Image, Dimensions,
    TouchableOpacity
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import R from '../../resources'
import BalanceView from '../debit/BalanceView'
import TopView from '../uikit/TopView'

import { UserAction } from '../../actions'

const SCREEN_WIDTH = Dimensions.get('window').width
const PADDING_SAVE_BUTTON = 56

const SpendingLimitScreen = (props: Props): JSX.Element => {
    const dispatch = useDispatch()
    const user = useSelector(root => root.user)
    const navigation = useNavigation()

    const currentLimitIndex = useMemo(() => Math.max(
        R.Constants.ListSpendingLimit.findIndex(item => item === user?.spendingLimit),
        0))
    const [selectedIndex, setSelectedIndex] = useState(currentLimitIndex)
    const selectSpendingLimit = useCallback((index: number) => () => {
        setSelectedIndex(index)
    }, [setSelectedIndex])
    const selectedValue = R.Constants.ListSpendingLimit[selectedIndex]

    const saveSpendingLimit = useCallback((): void => {
        dispatch(UserAction.updateSpendingLimit(selectedValue))
        navigation.goBack()
    }, [navigation, selectedValue])
    return (
        <SafeAreaView style={styles.container}>
            <TopView backButton={true} />
            <Text style={styles.titleScreen}>Spending Limit</Text>
            <View style={styles.contentView}>
                <View>
                    <View style={styles.topContent}>
                        <Image source={R.Images.SpendingLimitIcon} style={styles.icon} />
                        <Text style={styles.guideline}>Set a weekly debit card spending limit</Text>
                    </View>
                    <BalanceView amount={selectedValue} textColor="#000000"/>
                    <View style={styles.line} />
                    <Text style={styles.descriptionText}>
                        Here weekly means the last 7 days - not the calendar week
                    </Text>
                    <View style={styles.selectingView}>
                        {R.Constants.ListSpendingLimit.map((value: string, index: number) => {
                            const hightlightStyle = index === selectedIndex
                                ? {
                                    borderWidth: 2, borderColor: R.Colors.primary
                                }
                                : {}
                            return (
                                <TouchableOpacity
                                    key={`${value}-${index}`}
                                    style={[styles.selectedButton, hightlightStyle]}
                                    onPress={selectSpendingLimit(index)}
                                >
                                    <Text style={styles.selectedButtonText}>
                                        {`S$ ${value}`}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
                <TouchableOpacity style={styles.saveButton} onPress={saveSpendingLimit}>
                    <Text style={styles.saveButtonTitle}>Save</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: R.Colors.header,
        flex: 1
    },
    titleScreen: {
        fontSize: 24,
        fontWeight: 'bold',
        height: 33,
        color: 'white',
        marginLeft: 24
    },
    contentView: {
        flex: 1,
        marginTop: 40,
        marginBottom: 0,
        backgroundColor: 'white',
        borderRadius: 24,
        padding: 24,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    topContent: {
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 13
    },
    icon: {
        width: 16,
        height: 16
    },
    guideline: {
        fontSize: 14,
        marginLeft: 8
    },
    line: {
        height: StyleSheet.hairlineWidth,
        width: '100%',
        backgroundColor: R.Colors.subText,
        marginTop: 8
    },
    descriptionText: {
        color: R.Colors.subText,
        fontSize: 13,
        marginTop: 8
    },
    saveButton: {
        bottom: 0,
        width: SCREEN_WIDTH - (PADDING_SAVE_BUTTON * 2),
        height: 56,
        borderRadius: 28,
        backgroundColor: R.Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    saveButtonTitle: {
        fontSize: 16,
        color: 'white'
    },
    selectingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32
    },
    selectedButton: {
        width: (SCREEN_WIDTH - (24 * 2) - 12 * 2) / 3,
        height: 40,
        backgroundColor: '#20D16712',
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedButtonText: {
        color: R.Colors.primary,
        fontSize: 12
    }
})

export default SpendingLimitScreen
