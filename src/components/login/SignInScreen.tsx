import React, { useState, useCallback } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
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
    },
    errorMessage: {
        fontSize: 14,
        color: 'red'
    }
})

const SignInScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const signInOnPress = useCallback(() => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                signInSuccess()
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((res) => {
                        signInSuccess()
                    })
                    .catch((error) => {
                        setErrorMessage(error.message)
                    })
            })
    }, [email, password])

    const signInSuccess = useCallback(() => {
        setErrorMessage('')
    }, [])

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
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <Space height={16} />
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
