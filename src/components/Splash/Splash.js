import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native'
import { StackNavigator } from 'react-navigation';
import Card from '../Card/Card'
class Splash extends Component {
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Lighthouse
                </Text>
                <Card style={styles.header}/>
                <Card style={styles.header}/>
                {/*<Button onPress={() => navigate('GetHelp')} title="Get Help"/>*/}
            </View>
        );
    }
}
/*<Text style={styles.header}> Lighthouse </Text>
                <Button style={styles.buttonGet} onPress={onPressGetHelp} title="You gonna die?"></Button>
                <Button style={styles.buttonGive} onPress={onPressGiveHelp} title="You wanna help?"></Button>*/
onPressGetHelp = function () {
    var x = 0
}
onPressGiveHelp = function () {
    var x = 0
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 0,
        margin: 0
    },
    card: {
        flex: 3,
        padding: 0,
        margin: 0,
        width: 100,
        borderWidth: 1
    },
    header: {
        fontSize: 50,
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'monospace',
        color: '#FFF',
        paddingBottom: 20
    }
});
export default Splash;