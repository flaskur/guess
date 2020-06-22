import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import Colors from '../constants/Colors';

interface GameOverScreenInterface {
	guessRounds: number;
	userNumber: number | undefined;
	newGameHandler: () => void;
}

export default ({ guessRounds, userNumber, newGameHandler }: GameOverScreenInterface) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>The Game is Over! Good Job!</Text>
			<View style={styles.imageContainer}>
				<Image
					// source={require('../assets/success.png')}
					source={{
						uri:
							'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQEhUSEhMSFRUXGBcaFxYYGBUVGhYWGRcXFhUSFRgYHSggGBolHRgYITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OFxAQFysdFx0tLSstLSsrKy0rLSstLS0tLS0rKysrKy0tLS03LS03LS0tKy03KzcrNys3Kys3LS0rN//AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQYBBwIDBAj/xABLEAABAwIDBAYFBQ0FCQAAAAABAAIDBBEFEiEGMUFRBxMiYXGBFDKRobEzQlJichUjNENzgpKTosHC0fA1U7LT8RYkVFVjo7PS4f/EABcBAQEBAQAAAAAAAAAAAAAAAAABAwL/xAAbEQEBAQADAQEAAAAAAAAAAAAAARECITESQf/aAAwDAQACEQMRAD8A3iiIgIiICIiAiIgIiICIonaTHIqCmkqZjZrBe3FzuDR3k6IOjazailw2ITVL8oOjWjVzzya3j+5erZ7GYq6COphJMcguL6EHcQRzBFlpfB8PlxOU4liF3OffqIfmRRk6WB7r29p1Vl6E610L6vDHn5B5kiF/xTzqBzsbG/N6mmNrIsXWVQREQYuqxi+3eH0tW2jmmyzOy6WJa3Newe7c06X8wu3b3aZmGUclQdXWyxjnIdG+QOp8FqLAtio5Kdz6xueonu57jqY7nQNPAgak99twClsiya3+0gi6ytO7BbU1GHVLMLr354X6UtQdCLbonniOA4gm24jLuFVGUREBERAREQEREBERAREQEREBERAREQEREBERAREQYutM7d133VxJtE03paQ5p9dHzaWj0+ju8c19wWxdvNohhtFNU6FzRaMHjI7Rg8L6+AWtNhMKdT0wdJczTEySE7yXajNfjr7SueVyLIsQFtBp7vIdyp2PVz8KxCDE2Mc+MtdHO1ptdpGUAncNS0jvaFcVEbXUb56KeKMXe5mg5kEOsO82WfG9u7OklSdOGGP9eOsi73RtI8sjyT7FKx9L+CEAmrI7jDUXHsjIWifShO0QxNLpndgMy6tPqm/IBenEsGZh8xZIG9W9rXRvI0JDQHtudxvr4ELXXGN7U/Sngr72rWC30mTM9mdgusz9J2DNGY1sRtyEjj7GtJ9y+fZsGc+J1cI/vLJIwBb1o7OEklrbgS3XxT0OOqc2CmY1z3kDM0aRt4vceGiaYveJ499369uQOFFS2cy4t1smlnEHdrcW5DXerauump2xtDWNAAFtABewtrZdiy5Xa7kxFbS4KytgdG7Rw7Ub+LJAOy4f1qrJ0UbUvrad0E4IqaUiOUHe4bmyd97e5eBVPaB0uG1LMWp9ctmVDP7yIkA+eg15gLrjfxOU/W90Xnoaxk8bJYzmY9rXtPNrhcFd91o4ZREQEREBERAREQEREBERAREQEREBERAREQFi68mL1joYZJWRulcxpcI2mxeRuaO8qj0PS1ROZIKhktJPGwu6mUavsLgRu0DyToBoTroggOkas+6WJx4eCTBTDrZxwc/e1h8iNORKmFWNhYnyMlrZtZap5kJ5M1ysB5BWdZc674wRR+NY1BRsD535QdALXLjyAGq44Nj1NVg9RIHEWzN3EX4kHgucVINjaCSALneQLE+J4rE0LXiz2tcN9nAEX52IXNEVjKLWAFrWtbhy8O5cIadjL5GNbfflaBfxsNV2IgIuMkgaC5xAA3k6Ae1Q+A7RMrJJRGx3Vxmwl+bIeIaN6YiaXnxKibPFJC7c9rmnuuLXHhv8l6FAbX4+aRjWRNz1EpyxMtfW/rW5BJFezoy23p6LD309dK2N9JI6O28vFyQGDe6xuPYrbsRto/FJJS2kmigaGmOaS4625toOW83F9y0/hOC+hYlRz1+SoFQ8tlL2gtZKbdXbmb213Cy+jmNGlrWC3jJzREQEREBERAREQEREBERAREQEREBERAREQV7GdtcOpJDDUVUMcgtdhJLm3AIzBoNrgg2PAhax6ZdosNroaeKnkppZZJheQFt4omjtXcbFlyW2vvActqV2yVBPK6aWlhfI/Lme5ty7KA0X8AAPJaUZgVHWYrW5YYxTQgRtY0ENL9xeO+zXe0KW4JvZfZ/0MyZKh0kLsvVsOoZYam5Ot+4KwKLwHAIKIObAHAONyCSdd2l1KLG3Wkap6YIJOvheQerMWUHhnD3F3gbFvsUf0W9Z6e3IDlySdYRuDct23/ODVt+to452FkrGvad7XC48fFdWG4VBTAiCJkYO/KN/iu/vrEzt7E/rgoPbcyChnMbnNcG3u0kGwIvYjXcoDFtruqwyCSGVrp3sibe+YhwaBKXDncHU8T3rmTV1fAP6/wBFhUjG9r430DepkvUTta1rGHttebBxNtWka+dla8HheyCJshLnhjQ4nUk21uUsw1RtuaqodUCOojnbQtIzOiF+s0Bu48BfSytmzOJ0UsYjpHsys06sdlzed2usfPVTDgDvAN999bqMg2epY5xUMiDJLEXbdoN95IGl03oxKBeOfC4XzMnc28kYcGOudA7fpuv3r2IotUbpMxSmMJg60ekNc17GtBcWuGupGjNPO3BWrDOlSrqY2ehYXPO5rG9a+9mZgLODCN+t7G9zyXCLAKZrpHtiYHy5i51rm7r3Ivu33Xt6B6wimqaN/r01Q7Tkx+o/abJ7VrxvTjk2HhFY+aGOSSN0L3tBdE71mEi5ae8L2rFlldORERAREQEREBERAREQEREBERAREQEREHjxesEEMspNgxjnX5WF1pbo4jPohmfo6aSSV3De7L7LC/mr50zYkYMKny2zS5YgOYebOt32uqXWU5psLexhN2UzgCN98nracdLrnk64vHVbZufI6Oipn1OS4e4HI0HkDbUrlQbaffWw1dPJTPcbNJ7TCeWbRc9iKqmhoacZ42l4F+0AS8ncRxK9+2OGtqKSVhALg0uaeTmi4PcuetxU0ihNiq4z0MEjrk5cpJ3ksJZfzyn2hTa4dBF9N/dz7lB0WyFFDKZmQtDtbXu5ovvytOgU4iaiKpNm6OGTro4GNk1s4X0J3loJsD3gKVREBEUDttiz6WmLordY5wY0n5pdpfyvdIqbMrb2zNvyuL/Fc1SaXo8gdGDLNUOlcAS8PtZxF+yLbr8127N109NVuw+pkMnZzQSO3uaN7DzNuHcVcTVxVf2aqvQMe7XZirowL8OtG7zuL/nqwKq9IlK70dtQwffKaRso8AQHA924n7KvG5Tl43oFlR+BYi2qp4p2G7ZGNdfxHu4qQWrMREQEREBERAREQEREBERAREQEREBERBqrpxlzuw6lH4yoL/KMAG/6a9L2AjKQCDoQd1rWtblZQ+3U4qcfgiBu2lgzO+rI8l1j4tMftUys+dd8WuK/ZqlhxWkjjjsx+d5bckZmNc5u86C4Gi2NIwOBBFwQQRzB0IVY2zwieQw1VKLzwHstuO00+s3XTirJTPc5jXPblcWgube+VxFy2/G3NTkRwoaOOBgjiaGMF7NG4E6m3tXeiLl0IiICIiAozaLBmVsDoXG19Wu+i8atPf4BSaBIKRshiVd6U+jlMcjIGnrJBe/1Ggn53dyDl3bdQkT0EjQc4qGtzN+iS248Fw2GdarxBjvlOsaTrvb2gPYT7wrqure0k6YXXUQiRjmOFw4EEcwdF2IuVY6Cq4mlnpXHWmne1rTe4jd2mk+ef2LZa05sBUejY9UQXGWpgD7c5GWcP2TItxreMmUREBERAREQEREBERAREQEREBERAWCsri9wAudw3oNIYdJ1+MYpOfmyCH9X97B9kasyp3Rxd7auodvlqXnxtr/ErisuXrTj4IiLlRERAREQEREBERBE/wCz8XpgrAXNkylpANmuuLZnDjp7wDwUsiICre2ePOpmNihP3+W4afoNGjpD4cFZFr/bhuWvjcRo6nytP1myPLh42c32qz1L4i9ln+iYrQTFziXS5XvcSS4yAxkknuevp5fKWPHKxkg/FyMd7+HnZfU1DUCWNkg3PY1w8HAOHxWsZ16ERFQREQEREBERAREQEREBERAREQFHbRy5KWode1oZTfvyOspFVrpIm6vDKx3KF3vsEGsejNlsPiP0jI4+PWOb/CrQoTYiLJQUw/6YP6RLv3qbWPL1pBERRRERAREQEREBERAREQFF7RYIysiyOJa5pzMeN7HAb/C3DkpRVbb/ABJ8cTIIzZ85Lcw3tjaAXke0DzVnqVrbGqp/VyxEMkDCAZYychIcOY3+C+rNm/wSm/Ixf+Nq+Xsdjaylc1osBlAH5wX1Ds6P90p/yMX+Bq1jOpFERUEREBERAREQEREBERAREQEREBVTpU/smt/JH4hWtVjpLjz4XWN5xH9xQUbZP8CpvyMf+EKVUFsLLnw+mN79i36LnNt7lOrG+tIIiKKIiICIiAiIgIiICIiAqX0jRFppp/msc9ju4SNbZx7uzbzV0XVU07JGlj2hzXCxB3EcVZcGoMf1jaPpSMHvJ/cvqegiyRsYd7WNHsAC+b9oNk2wVVHFFI8xz1LGiN2uQ5mjR28jtL6XC1njOsoiKoIiICIiAiIgIiICIiAiIgIiICi9qKQzUlREN7ongeOU2UouLig0X0ZTA0DGcY3ysPjmL9PJ4VrVE+6MOF4tVUwkjdTzv6xjmHMI3OJIjNtBa5b5DwV7BWXKdtIIiLlRERAREQEREBEXCeZrGlz3Na0b3EgAeaDmirc+3WHsNuuBtxAJC9mFbT0dS7LFM0u4NOhPKwO/wVypsTCIiiqzWM67G8Lh07LnS/oB0nwjW7187YpjsuH4w+ojgbM8U4bGHGzWF1ry+wObbT1lmHabGsQqRA+sMAc1zy2FoblAsDY+trfmtZ4zvr6ILkz+C+X9osNlbU9RJWVUw6prnF8j3HtEgN1O6w96j6PZ9hqaeKJ0kb3vJztJBY1ou5wPPUK7DH1iCsr52n2hxfDKjqIa107Q3PlnGe4JtYuPaPgCti9HvSW2vf6NUsEFUALNuMsv2O/jZVGxEWGrKAiIgIiICIiAiIgIiIMFal6S9oairq/uTSSGJoaDVSjeGkAiMHhoQdN9/FbaK1ftrsRWtrH4jhpY98gaJoJDYPygAOY6/IDS4QROG7I0MDQBAxxGueQB7yRxJO4+CnFWW4njA0ODTk8SHEC/d2Nyy2sxx3q4S5o+s8//ABZfNd7FlRV6Nm0L/Vw6Jv232+Lwuz7j7Sv3U9HH4vDv43J8VfqJ1FDN2Q2lOvX4eO7taf8AaPxXGTZXaaPtdZQS/VBI95Y34q/FT6ibRV6SPaGP1sOid9iS/wAHlceux7/lf7Z/mp8VfqLGir0Y2gkNmYbG083v097guw4ZtL/wdH+sb/mJ8U+onVQIqY4zVSmVzvRKdxYxjTl6x3EkjU7ib8iALcbF6DtIN9DSHwkH+Yqzg+DY9hrpA2gdIyRxcWN7YDubXNJtpoupxsc2xc6XA6WJuVlPC0fYaT5ki581D7VbIRVMeaBkcU7SHNkaMhuOBLbeR4LyQbZVMZIqsOqWWP4tpd7Q4Bd46QaQfKR1UX24v5ErnLF2LNRh4jYJCHSBozuAsC+1nEDgL6ruVWPSFhv9879XJ/6rzTbfsk7NHTVFQ87rNLW+3U+4eKmU2Izab+0Jr8I4QPAhxPwXbsV+HSd0I97nX+C91L0fYvicrqqXq6EOAbldmc+zd3Z/mQpeDoZrInF8WKkPIyk9SQSOXyhWnz051UdojfEZ+6OIe6/71y2XbfEY/qwyEeJIafcVZZOhvEJJDJJiMd3WDniNxcQNBpcfFein6FqqOTrG4q5rrEZhBrY7x8ru0TDVV2n1r5e6KL351A4lI5ssBhsahsrDEOJdmFh4E2Wx5+hCd7zI/FXuc6wLjT6kDcPllbdkujGgw57ZQHzzDdLKblp+o0CzfHU96shq7s3BclgLKqCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMFdEtHE71o2O8Wg/EIiDpdhFMdDBD+rZ/JdtLRRRfJxsZ9loHwREHpREQEREBERAREQEREBERB/9k='
					}}
					style={styles.image}
					resizeMode="cover"
					fadeDuration={1000}
				/>
			</View>

			<View style={styles.resultContainer}>
				<Text style={styles.result}>
					Number of Rounds: <Text style={styles.highlight}>{guessRounds}</Text> and Number was:{' '}
					<Text style={styles.highlight}>{userNumber}</Text>
				</Text>
			</View>
			<View style={styles.buttonContainer}>
				<Button title="New Game" onPress={newGameHandler} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	imageContainer: {
		width: '80%',
		height: 300,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: 'black',
		overflow: 'hidden',
		marginVertical: 10
	},
	image: {
		width: '100%',
		height: '100%'
	},
	highlight: {
		color: Colors.primary
	},
	title: {
		fontWeight: '700',
		fontSize: 24
	},
	resultContainer: {
		borderWidth: 3,
		backgroundColor: 'paleturquoise',
		padding: 30,
		borderRadius: 10,
		width: '80%',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center'
	},
	result: {
		fontSize: 20,
		fontWeight: '400'
	},
	buttonContainer: {
		borderWidth: 2,
		color: Colors.primary,
		backgroundColor: 'lightpink',
		padding: 10,
		borderRadius: 10
	}
});
