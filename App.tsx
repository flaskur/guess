import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font'; // no default export
import { AppLoading } from 'expo';

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});
};

export default () => {
	const [ userNumber, setUserNumber ] = useState<number | undefined>(undefined); // generic to allow both types
	const [ guessRounds, setGuessRounds ] = useState(0);
	const [ dataLoaded, setDataLoaded ] = useState(false);

	// conditional render loading screen
	if (!dataLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setDataLoaded(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}

	// logic handlers passed down as props to screens
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

	// determines which screen to render
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
			{/* should prob have nav as footer in later apps */}
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	}
});
