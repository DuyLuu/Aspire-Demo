import React from 'react'
import { View, Button } from 'react-native'
import { useDispatch } from 'react-redux'

const SignInScreen = () => {
    const dispatch = useDispatch()
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
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
