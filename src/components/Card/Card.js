import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native'
import {Card, Button} from 'react-native-material-design';
export default class CardExample extends Component {
    render() {
        return (
            <Card style={styles.overall}>
                <Card.Body style={styles.container}>
                    <Text style={styles.cardhead}>
                        City Name
                    </Text>
                    <Button
                        text=""
                        style={styles.buttonGet}
                        onPress={onPressGetHelp}
                        value="Need a host or can host?"></Button>
                    <Button
                        text=""
                        style={styles.buttonGive}
                        onPress={onPressDonate}
                        value="Want to donate?"></Button>
                </Card.Body>
            </Card>
        );
    }
}
onPressGetHelp = function () {
    var x = 0
}
onPressGiveHelp = function () {
    var x = 0
}
onPressDonate = function () {
    var x = 0
}
const styles = StyleSheet.create({
    container: {
        width: 100
    },
    cardhead: {
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#841584',
        width: 100
    }
});
