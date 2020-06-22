import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface InputInterface {
	style?: any;
	blurOnSubmit?: any;
	autoCapitalize?: any;
	autoCorrect?: any;
	keyboardType?: any;
	maxLength?: number;
	onChangeText?: any;
	value?: string;
}

export default (props: InputInterface) => {
	return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
	input: {
		height: 30,
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
		marginVertical: 10
	}
});
