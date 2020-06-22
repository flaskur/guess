import React from 'react';
import { View, StyleSheet } from 'react-native';

interface CardInterface {
	style?: any;
	children: any;
}

export default ({ style, children }: CardInterface) => {
	return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: 'peachpuff',
		shadowColor: 'black',
		shadowOffset: { width: 3, height: 3 },
		shadowOpacity: 0.2,
		shadowRadius: 10,
		elevation: 5,
		padding: 20,
		borderRadius: 20
	}
});
