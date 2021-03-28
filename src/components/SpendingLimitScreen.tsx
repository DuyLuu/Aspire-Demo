import React from 'react'

import {
    SafeAreaView, StyleSheet, Text, View, Image, Dimensions,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import R from '../resources'
import BalanceView from './BalanceView'
import TopView from './TopView'

const SCREEN_WIDTH = Dimensions.get('window').width
const PADDING_SAVE_BUTTON = 56
const ListSpendingLimit = [
    '5,000',
    '10,000',
    '20,000',
]

const SpendingLimitScreen = (): JSX.Element => {
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
                    <BalanceView amount="5,000" textColor="#000000"/>
                    <View style={styles.line} />
                    <Text style={styles.descriptionText}>
                        Here weekly means the last 7 days - not the calendar week
                    </Text>
                    <View style={styles.selectingView}>
                        {ListSpendingLimit.map((value: string) => {
                            return (
                                <TouchableOpacity style={styles.selectedButton}>
                                    <Text style={styles.selectedButtonText}>
                                        {`S$ ${value}`}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonTitle}>Save</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: R.Colors.header,
        flex: 1,
    },
    titleScreen: {
        fontSize: 24,
        fontWeight: 'bold',
        height: 33,
        color: 'white',
        marginLeft: 24,
    },
    contentView: {
        flex: 1,
        marginTop: 40,
        marginBottom: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topContent: {
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 13,
    },
    icon: {
        width: 16,
        height: 16,
    },
    guideline: {
        fontSize: 14,
        marginLeft: 8,
    },
    line: {
        height: StyleSheet.hairlineWidth,
        width: '100%',
        backgroundColor: R.Colors.subText,
        marginTop: 8,
    },
    descriptionText: {
        color: R.Colors.subText,
        fontSize: 13,
        marginTop: 8,
    },
    saveButton: {
        bottom: 0,
        width: SCREEN_WIDTH - (PADDING_SAVE_BUTTON * 2),
        height: 56,
        borderRadius: 28,
        backgroundColor: R.Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButtonTitle: {
        fontSize: 16,
        color: 'white',
    },
    selectingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32,
    },
    selectedButton: {
        width: (SCREEN_WIDTH - (24 * 2) - 12 * 2) / 3,
        height: 40,
        backgroundColor: '#20D16712',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedButtonText: {
        color: R.Colors.primary,
        fontSize: 12,
    },
})

export default SpendingLimitScreen