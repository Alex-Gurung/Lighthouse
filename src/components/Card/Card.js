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
                    <Button
                        text=""
                        style={styles.buttonGet}
                        onPress={onPressGetHelp}
                        value="Need a host or can host?"></Button>
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
        width: 100,
        height: 100,
        padding: 0,
        margin: 0,
    },
    cardhead: {
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#841584',
        width: 100
    }
});
