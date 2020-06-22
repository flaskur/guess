import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Colors from '../constants/Colors';

interface MainButtonInterface {
	buttonPressHandler: (...args: any[]) => void;
	children: any;
}

export default ({ buttonPressHandler, children }: MainButtonInterface) => {
	return (
		<TouchableOpacity onPress={buttonPressHandler} activeOpacity={0.8}>
			<View style={styles.buttonContainer}>
				<Text style={styles.buttonText}>{children}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: Colors.primary,
		paddingVertical: 10,
		paddingHorizontal: 30,
		borderRadius: 5
	},
	buttonText: {
		color: 'white',
		fontFamily: 'open-sans',
		fontSize: 18
	}
});
