import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

interface HeaderProps {
	title: string;
}

export default ({ title }: HeaderProps) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerTitle}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		backgroundColor: Colors.primary,
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerTitle: {
		color: 'black',
		fontSize: 18
	}
});
