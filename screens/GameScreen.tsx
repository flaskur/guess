import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert, ScrollView } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import { Ionicons } from '@expo/vector-icons';
import MainButton from '../components/MainButton';

type generateRandomFunc = (min: number, max: number, exclude: number) => number;

// logic to determine computer guess
const generateRandomBetween: generateRandomFunc = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randomNumber = Math.floor(Math.random() * (max - min)) + min;

	// to avoid first time accurate guess
	if (randomNumber === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else return randomNumber;
};

const renderListItem = (guess: number, round: number) => {
	return (
		<View key={guess} style={styles.listItem}>
			<Text>ROUND {round}</Text>
			<Text>GUESS {guess}</Text>
		</View>
	);
};

interface GameScreenInterface {
	userChoice: number;
	gameOverHandler: (numRounds: number) => void;
}

export default ({ userChoice, gameOverHandler }: GameScreenInterface) => {
	const initialGuess = generateRandomBetween(1, 100, userChoice);
	const [ currentGuess, setCurrentGuess ] = useState(initialGuess);
	const [ pastGuesses, setPastGuesses ] = useState([ initialGuess ]);
	const [ rounds, setRounds ] = useState(0);

	// will survive rerenders
	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	useEffect(
		() => {
			// game is over
			if (currentGuess === userChoice) {
				gameOverHandler(rounds);
			}
		},
		// why gameOverHandler dependency? it's a constant function
		[ currentGuess, userChoice, gameOverHandler ]
	);

	const nextGuessHandler = (direction: string) => {
		if (
			(direction === 'lower' && currentGuess < userChoice) ||
			(direction === 'higher' && currentGuess > userChoice)
		) {
			Alert.alert('Stop Lying!', 'This is obviously wrong!', [
				{
					text: 'Sorry',
					style: 'cancel'
				}
			]);
			return;
		}

		if (direction === 'lower') {
			currentHigh.current = currentGuess;
		}
		if (direction === 'higher') {
			currentLow.current = currentGuess + 1;
		}
		const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
		setCurrentGuess(nextNumber);
		setRounds((prevRounds) => prevRounds + 1);

		setPastGuesses((prevPastGuesses) => [ ...prevPastGuesses, nextNumber ]);
	};

	return (
		<View style={styles.screen}>
			<Text>Opponent's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				{/* <Button title="LOWER" onPress={() => nextGuessHandler('lower')} />
				<Button title="HIGHER" onPress={() => nextGuessHandler('higher')} /> */}
				<MainButton buttonPressHandler={() => nextGuessHandler('lower')}>
					<Ionicons name="md-remove" size={24} color="white" />
				</MainButton>
				<MainButton buttonPressHandler={() => nextGuessHandler('higher')}>
					<Ionicons name="md-add" size={24} color="white" />
				</MainButton>
			</Card>

			{/* flatlist is not necessary since scrollview will render very little */}
			<ScrollView style={styles.list}>
				<Text style={styles.listTitle}>HISTORY</Text>
				{pastGuesses.map((guess) => renderListItem(guess, pastGuesses.indexOf(guess) + 1)).reverse()}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center'
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '80%'
	},
	list: {
		marginVertical: 20,
		backgroundColor: 'lightcyan',
		width: '80%',
		borderWidth: 2,
		borderColor: 'black',
		borderRadius: 5,
		padding: 5
	},
	listItem: {
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
		marginVertical: 15,
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '100%'
	},
	listTitle: {
		fontWeight: '700',
		fontSize: 20,
		textAlign: 'center'
	}
});
