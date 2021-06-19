import React from 'react'
import { View, Button } from 'react-native'
import { useDispatch } from 'react-redux'

import FloatTextInput from './FloatTextInput'
import Space from '../uikit/Space'

const SignInScreen = () => {
    const dispatch = useDispatch()

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FloatTextInput />
            <Space height={8} />
            <FloatTextInput />
            <Button
                title="Sign In"
                onPress={() => {
                    dispatch({
                        type: 'LOGGED_IN',
                        payload: true
                    })
                }}
            />
        </View>
    )
}

export default SignInScreen
