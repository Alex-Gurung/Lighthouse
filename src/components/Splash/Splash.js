import React, {Component} from 'react';
import {ScrollView, View, Alert, Text, StyleSheet, Image} from 'react-native'
import { StackNavigator } from 'react-navigation';
import {Button} from 'react-native-elements';
// import Card from '../Card/Card'
import {Card} from 'react-native-material-design';
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
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('./logo.png')} />
                <Text style={styles.header}>
                    Lighthouse
                </Text>
            <Card style={ styles.overall }>
                <Card.Body style={ styles.container }>
                    <Text style={styles.cardhead}>
                        City Name
                    </Text>
                    <Text style={styles.info}>General information about incident/problem</Text>
                    <Button large buttonStyle={styles.buttons} color='white' title="Want to donate?"></Button>
                    
                    <Button large buttonStyle={styles.buttons} color='white' onPress={() => navigate('Tabs')} title="Get/Give Help"/>
                </Card.Body>
            </Card>
                
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
                        <Button large buttonStyle={styles.buttons} onPress={() => navigate('Tabs')} title="Get/Give Help"/>
                </Card.Body>
            </Card>
                

            </View>
            </ScrollView>
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
        margin: 0,
        height: 800,
    },
    overall: {
        flex: 3,
        paddingTop: 50,
        margin: 0,
        width: 800,
        height: 20,
        borderWidth: 0
    },
    header: {
        fontSize: 50,
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'monospace',
        color: '#FFF',
        paddingTop: 20
    },
    info: {
        textAlign: 'center',
    },
    buttons: {
        backgroundColor: '#f1c40f',
        bottom: 0,
    }, 
    logo: {
        width: 100,
        height: 100,

    },
    // button: {
    //     backgroundColor: '#841584',
    //     width: 100
    // },
    cardhead: {
        textAlign: 'center',
        fontSize: 30
    },
});
export default Splash;