import React, { useState, useCallback } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import firebase from 'firebase'

import FloatTextInput from './FloatTextInput'
import Space from '../uikit/Space'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 32
    },
    button: {
        backgroundColor: 'purple',
        width: '70%',
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }
})

const SignInScreen = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signInOnPress = useCallback(() => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                signInSuccess()
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
            })
    }, [email, password])

    const signInSuccess = useCallback(() => {
        dispatch({
            type: 'LOGGED_IN',
            payload: true
        })
    }, [dispatch])

    return (
        <View style={styles.container}>
            <FloatTextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <Space height={8} />
            <FloatTextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <Space height={32} />
            <TouchableOpacity
                style={styles.button}
                onPress={signInOnPress}
            >
                <Text style={{ color: 'white', fontSize: 16 }}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignInScreen
