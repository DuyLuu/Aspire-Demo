import React from 'react'
import { TextInput } from 'react-native'

// type Props = {
//     placeholder?: string,
//     value: string,
//     onChangeText: Function,
// }

const FloatTextInput = (props) => {
    return (
        <TextInput
            style={{
                height: 44,
                width: '90%',
                borderColor: 'grey',
                borderWidth: 1,
                padding: 8
            }}
            autoCapitalize="none"
            autoCorrect={false}
            {...props}
        />
    )
}

export default FloatTextInput
