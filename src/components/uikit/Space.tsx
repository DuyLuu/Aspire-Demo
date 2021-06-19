import React from 'react'
import { View } from 'react-native'

type Props = {
    height?: number,
    width?: number,
}

const Space = ({ height = '100%', width = '100%' } : Props) => {
    return (
        <View style={{
            height,
            width
        }} />
    )
}

export default Space
