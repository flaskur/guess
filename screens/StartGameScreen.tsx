import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';

interface StartGameScreenInterface {
	startGameHandler: (selectedNumber: number) => void;
}

export default ({ startGameHandler }: StartGameScreenInterface) => {
	const [ inputValue, setInputValue ] = useState('');
	const [ confirmed, setConfirmed ] = useState(false);
	const [ guessNumber, setGuessNumber ] = useState(0);

	const inputChangeHandler = (inputText: string) => {
		// validate first
		setInputValue(inputText.replace(/[^0-9]/g, ''));
	};

	const resetPressHandler = () => {
		setInputValue('');
		setConfirmed(false);
	};

	const confirmPressHandler = () => {
		// validate
		const guess = parseInt(inputValue, 10);
		if (isNaN(guess) || guess <= 0 || guess > 99) {
			Alert.alert('Invalid number!', 'Number must be between 1 and 99 inclusive!', [
				{
					text: 'Alrighty Fellow',
					style: 'destructive',
					onPress: resetPressHandler
				}
			]);
			return;
		}

		setConfirmed(true);
		setInputValue('');
		setGuessNumber(guess); // 10 radix
		Keyboard.dismiss();
	};

	return (
		// if you click outside the keyboard it is dismissed
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.screen}>
				<Text style={styles.title}>Start a New Game</Text>

				<Card style={styles.inputContainer}>
					<Text>Select a Number</Text>

					{/* notice value and onChangeText, no event.target.value */}
					<Input
						style={styles.input}
						blurOnSubmit={true}
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType="number-pad"
						maxLength={2}
						onChangeText={inputChangeHandler}
						value={inputValue}
					/>

					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							{/* you can't style button directly */}
							<Button title="reset" onPress={resetPressHandler} color={Colors.primary} />
						</View>
						<View style={styles.button}>
							<Button title="confirm" onPress={confirmPressHandler} color={Colors.accent} />
						</View>
					</View>
				</Card>
				{confirmed && (
					<Card style={styles.summaryContainer}>
						<Text>CHOSEN NUM:</Text>
						<NumberContainer>{guessNumber}</NumberContainer>
						{/* <Button title="START GAME" onPress={() => startGameHandler(guessNumber)} /> */}
						<MainButton buttonPressHandler={() => startGameHandler(guessNumber)}>START GAME</MainButton>
					</Card>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
		fontFamily: 'open-sans-bold'
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center'
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15
	},
	button: {
		// borderWidth: 2,
		// borderColor: 'black'
	},
	input: {
		width: 100,
		textAlign: 'center'
	},
	summaryContainer: {
		marginVertical: 20,
		alignItems: 'center'
	}
});
