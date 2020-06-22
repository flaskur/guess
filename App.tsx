import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font'; // no default export
import { AppLoading } from 'expo';

const fetchFonts = () => {
	console.log('fetching....');
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});
};

export default () => {
	const [ userNumber, setUserNumber ] = useState<number | undefined>(undefined);
	const [ guessRounds, setGuessRounds ] = useState(0);
	const [ dataLoaded, setDataLoaded ] = useState(false);

	if (!dataLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setDataLoaded(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}

	const startGameHandler = (selectedNumber: number) => {
		setUserNumber(selectedNumber);
		setGuessRounds(0);
	};

	const gameOverHandler = (numRounds: number) => {
		setGuessRounds(numRounds);
	};

	const newGameHandler = () => {
		setUserNumber(undefined);
		setGuessRounds(0);
	};

	let content = <StartGameScreen startGameHandler={startGameHandler} />;

	if (userNumber && guessRounds === 0) {
		content = <GameScreen userChoice={userNumber} gameOverHandler={gameOverHandler} />;
	} else if (guessRounds > 0) {
		content = <GameOverScreen guessRounds={guessRounds} userNumber={userNumber} newGameHandler={newGameHandler} />;
	}

	return (
		<View style={styles.screen}>
			<Header title="Guess a Number" />

			{content}
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	}
});
