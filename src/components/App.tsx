import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'

import DebitInfoView from './DebitInfoView'

const Dimension = Dimensions.get('window')

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      	<ScrollView
		  	showsVerticalScrollIndicator={false}
			style={styles.scrollView}
			contentContainerStyle={styles.scrollViewContentStyle}
			alwaysBounceVertical={true}
		>
			<View>
				<DebitInfoView />
			</View>
      	</ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  	container: {
		flex: 1,
		backgroundColor: '#0C365A',
		alignItems: 'center',
		justifyContent: 'center',
  	},
	scrollViewContentStyle: {
		paddingTop: 120,
	},
  	scrollView: {
		width: '100%',
		height: Dimension.height - 100,
		backgroundColor: 'transparent',
  	},
})
