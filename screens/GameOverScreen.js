import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from 'react-native';

import Colors from '../constants/colors';
import BodyText from '../components/BodyText';


const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <BodyText style={styles.titleText}>The Game is Over</BodyText>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: 'https://www.planetware.com/photos-large/JPN/japan-mt-fuji-and-cherry-blossoms.jpg' }}
                    style={styles.image}
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed
                    <Text style={styles.highlight}> {props.roundsNumber} </Text>
                    to guess the number
                    <Text style={styles.highlight}> {props.userNumber}.</Text>
                </BodyText>
            </View>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderColor: 'black',
        overflow: 'hidden',
        borderWidth: 3
    },
    image: {
        width: 300,
        height: 300,
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultContainer: {
        marginHorizontal: 30,
        padding: 20,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    titleText: {
        padding: 30
    }
})
export default GameOverScreen;