import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import firebase from 'firebase'
import AppInfo from 'react-native-app-info'

const styles = StyleSheet.create({
    appInfo: {
        padding: 16,
        paddingTop: 64
    },
    textStyle: {
        fontSize: 20,
        color: 'white'
    }
})

const UserInfoScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#0C365A' }}>
            <View style={styles.appInfo}>
                <Text style={styles.textStyle}>AppVersion: {AppInfo.appVersion}</Text>
                <Text style={styles.textStyle}>BuildVersion: {AppInfo.buildVersion}</Text>
                <Text style={styles.textStyle}>BundleIdentifier: {AppInfo.bundleIdentifier}</Text>
                <Text style={styles.textStyle}>Flavor: {AppInfo.flavor}</Text>
                <Text style={styles.textStyle}>DeviceModel: {AppInfo.deviceModel}</Text>
            </View>
            <Button title="Sign out" onPress={() => {
                firebase.auth().signOut()
            }} />
        </View>
    )
}

export default UserInfoScreen
