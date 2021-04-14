/* @flow */

import React, { useCallback, useState } from 'react'
import {
    View, StyleSheet, Image, Text, TouchableWithoutFeedback, Dimensions,
} from 'react-native'
import { ConnectedProps, connect } from 'react-redux'

import R from '../../resources'
import { UserInfoType } from '../../types'

const PADDING = 24
const WIDTH = Dimensions.get('window').width

type MappedProps = {
    userInfo: UserInfoType
}
const mapState = (state: RootState): MappedProps => ({
    userInfo: state.user.userInfo,
})

const connector = connect(mapState, null)
interface Props extends ConnectedProps<typeof connector> {}

const CardView = (props: Props): JSX.Element => {
    const { userInfo } = props
    const [hideCardNumber, setHideCardNumber] = useState(false)
    const hideCardNumberAction = useCallback((): void => {
        setHideCardNumber(!hideCardNumber)
    })
    const textHideNumberButton = hideCardNumber ? "Hide card number" : "Show card number"
    const iconHideNumberButton = hideCardNumber ? R.Images.HideNumberIcon : R.Images.ShowNumberIcon

    const cvvText = hideCardNumber ? userInfo?.cvv : "***"
    const numerCard = userInfo?.cardNumber
        && (hideCardNumber ? formartNumberCard(userInfo?.cardNumber) : hideNumber(userInfo?.cardNumber))

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={hideCardNumberAction}>
                <View style={styles.hideCardNumer}>
                    <Image
                        source={iconHideNumberButton}
                        style={styles.hideCardNumerIcon}
                    />
                    <Text style={styles.hideCardNumberText}>{textHideNumberButton}</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.cardView}>
                <Image source={R.Images.AspireLogo} style={styles.aspireLogo} />
                <Image source={R.Images.VisaLogo} style={styles.visaLogo} />
                <Text style={styles.userName}>{userInfo?.name}</Text>
                <Text style={styles.cardNumber}>{numerCard}</Text>
                <View style={styles.expireView}>
                    <Text style={styles.expireDateText}>{`Thru: ${userInfo?.expireDate}`}</Text>
                    <Text style={styles.cvvText}>{`CVV: ${cvvText}`}</Text>
                </View>
            </View>
        </View>
    )
}

const formartNumberCard = (input: string): string => {
    return input.match(/.{1,4}/g).join('    ')
}
const hideNumber = (input: string): string => {
    const hidingPart = input.slice(0, 11).replace(/.{1,4}/g, '●●●●')
    const rest = input.slice(12, 16)
    return formartNumberCard(hidingPart.concat(rest))
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        width: WIDTH - 48,
        height: 255,
        backgroundColor: 'transparent',
        alignItems: "flex-end",
        marginLeft: 24,
    },
    cardView: {
        ...StyleSheet.absoluteFillObject,
        top: 35,
        backgroundColor: R.Colors.primary,
        borderRadius: 12,
        padding: PADDING,
    },
    aspireLogo: {
        position: 'absolute',
        top: PADDING,
        right: PADDING,
        width: 74,
        height: 21,
    },
    visaLogo: {
        position: 'absolute',
        bottom: PADDING,
        right: PADDING,
        width: 59,
        height: 20,
    },
    userName: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 45,
    },
    cardNumber: {
        marginTop: 24,
        fontSize: 14,
        fontWeight: "bold",
        color: "white",
    },
    expireView: {
        flexDirection: 'row',
        marginTop: 15,
    },
    expireDateText: {
        fontSize: 13,
        color: "white",
        marginRight: 32,
        fontWeight: '700',
    },
    cvvText: {
        fontSize: 13,
        color: "white",
        fontWeight: '700',
    },
    hideCardNumer: {
        width: 151,
        height: 44,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: "white",
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
    },
    hideCardNumerIcon: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
    hideCardNumberText: {
        color: R.Colors.primary,  
        fontSize: 12,
    },
})

export default connector(CardView)