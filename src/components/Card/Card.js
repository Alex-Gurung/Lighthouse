import React, {Component} from 'react';
import {Text, StyleSheet, Alert} from 'react-native'
import {Card, Button} from 'react-native-material-design';
export default class CardExample extends Component {
    render() {
        return (
            <Card style={ styles.overall }>
                <Card.Body style={ styles.container }>
                    <Text style={styles.cardhead}>
                        City Name
                    </Text>
                    <Text style={styles.info}>General information about incident/problem</Text>
                    <Button
                        text=""
                        style={styles.buttonGive}
                        onPress={validation}
                        value="Want to donate?"></Button>
                </Card.Body>
            </Card>
        );
    }
}
validation = function (condition, content) {
        Alert.alert('Request Sent', 'Your host request has been sent', [
            {
                text: 'OK',
                onPress: () => console.log('Great!')
            }
        ], {cancelable: false})
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
        width: 1000,
        height: 100,
    },
    cardhead: {
        textAlign: 'center',
        fontSize: 30
    },
    button: {
        backgroundColor: '#841584',
        width: 100
    },
    info: {
        textAlign: 'center'
    },
    overall: {
        width: 800
    }
});
