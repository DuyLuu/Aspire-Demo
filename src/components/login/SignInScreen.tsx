import React, { useCallback, useReducer } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, ActivityIndicator } from 'react-native'
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

const initialState = {
    email: '',
    password: '',
    errorMessage: '',
    loading: false
}

const reducer = (state, action) => {
    switch (action.type) {
    case 'SignIn':
        return {
            ...state,
            errorMessage: '',
            loading: true
        }
    case 'SignIn_Failure':
        return {
            ...state,
            errorMessage: action.payload,
            loading: false
        }
    case 'SignIn_Success':
        return state
    case 'Email_Typing':
        return {
            ...state,
            errorMessage: '',
            email: action.payload
        }
    case 'Password_Typing':
        return {
            ...state,
            errorMessage: '',
            password: action.payload
        }
    default:
        return state
    }
}

const SignInScreen = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { email, password, errorMessage, loading } = state
    const signInOnPress = useCallback(() => {
        dispatch({ type: 'SignIn' })
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
                        dispatch({ type: 'SignIn_Failure', payload: error.message })
                    })
            })
    }, [email, password])

    const signInSuccess = useCallback(() => {
        dispatch({ type: 'SignIn_Success' })
    }, [])

    return (
        <View style={styles.container}>
            <FloatTextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => dispatch({ type: 'Email_Typing', payload: text })}
            />
            <Space height={8} />
            <FloatTextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => dispatch({ type: 'Password_Typing', payload: text })}
                secureTextEntry
            />
            <Space height={32} />
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <Space height={16} />
            <TouchableOpacity
                style={styles.button}
                onPress={signInOnPress}
            >
                {loading
                    ? <ActivityIndicator />
                    : <Text style={{ color: 'white', fontSize: 16 }}>Sign In</Text>}
            </TouchableOpacity>
        </View>
    )
}

export default SignInScreen
