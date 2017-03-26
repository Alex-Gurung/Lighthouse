import React, {Component} from 'react';
import {ScrollView, View, Alert, Text, StyleSheet, Button} from 'react-native'
import { StackNavigator } from 'react-navigation';
import Card from '../Card/Card'
class Splash extends Component {
    constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Lighthouse
                </Text>
                <Card style={styles.header}/>
                <Card style={styles.header}/>
                {/*<Button onPress={validation} title="Get Help"/>*/}
            </View>
        );
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
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
        // flex: 1,
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