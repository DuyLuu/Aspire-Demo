import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'

const Dimension = Dimensions.get('window')

const App = () => {
  return (
    <View style={styles.container}>
      	<ScrollView
		  	showsVerticalScrollIndicator={false}
			style={styles.scrollView}
			contentContainerStyle={styles.scrollViewContentStyle}
			alwaysBounceVertical={true}
		>
			<View>
				<View style={styles.content1}/>
				<View style={styles.content2}/>
				<View style={styles.content3}/>
				<View style={styles.content4}/>
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
    	marginTop: 80,
		width: '100%',
		height: Dimension.height - 100,
		backgroundColor: 'transparent',
  	},
	content1: {
		backgroundColor: 'grey',
		width: '100%',
		height: 200,
	},
	content2: {
		backgroundColor: 'white',
		width: '100%',
		height: 200,
	},
	content3: {
		backgroundColor: 'grey',
		width: '100%',
		height: 200,
	},
	content4: {
		backgroundColor: 'white',
		width: '100%',
		height: 200,
	},
	content5: {
		backgroundColor: 'grey',
		width: '100%',
		height: 200,
	},
})
