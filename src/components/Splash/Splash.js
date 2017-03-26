import React, {Component} from 'react';
import {
    ScrollView,
    View,
    Alert,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import {StackNavigator} from 'react-navigation';
import {Button, SocialIcon} from 'react-native-elements';
// import Card from '../Card/Card' import {Card} from
// 'react-native-material-design';
import {Grid, Row} from 'react-native-elements';
class Splash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locationOfEvent: null,
            location2: null,
            eventID: null,
        };
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.logo} source={require('./logo.png')}/>
                    <Text style={styles.header}>
                        Lighthouse
                    </Text>
                    <Grid style={styles.overall}>
                        <Row style={styles.row}>
                            <Text style={styles.cardhead}>
                                {this.state.locationOfEvent}
                            </Text>
                            <Text style={styles.info}>General information about incident/problem</Text>
                            <SocialIcon
                                button
                                style={styles.buttons}
                                iconSize={0}
                                fontStyle={styles.fonting}
                                name
                                type='facebook'
                                title="Want to donate?"/>

                            <SocialIcon
                                button
                                style={styles.buttons}
                                iconSize={0}
                                fontStyle={styles.fonting}
                                name
                                type='facebook'
                                onPress={() => navigate('Tabs')}
                                title="Get/Give Help"/>
                        </Row>

                        <Row style={styles.row}>
                            <Text style={styles.cardhead}>
                                {this.state.location2}
                            </Text>
                            <Text style={styles.info}>General information about incident/problem</Text>
                            <SocialIcon
                                button
                                style={styles.buttons}
                                iconSize={0}
                                fontStyle={styles.fonting}
                                name
                                type='facebook'
                                title="Want to donate?"/>

                            <SocialIcon
                                button
                                style={styles.buttons}
                                iconSize={0}
                                fontStyle={styles.fonting}
                                name
                                type='facebook'
                                onPress={() => navigate('Tabs')}
                                title="Get/Give Help"/>
                        </Row>
                    </Grid>

                </View>
            </ScrollView>
        );
    }
    someFunction () {
        console.log('something')
        fetch('https://lighthouse-backend.herokuapp.com/incidents')
            .then(function (response) {
                console.log(response)
                console.log("fjdsk;lfjdskl;fjdskthis"+this)
                console.log('second point')
                var y = response
                    .json()
                    .then(function (jsonObj) {
                        console.log("first" + jsonObj)
                        console.log("second" + jsonObj[0])
                        this.setState({locationOfEvent: jsonObj[0].hashtag})
                        console.log('jklfjdskal;fjkdsl;j')
                        this.setState({location2: jsonObj[1].hashtag})
                        console.log('end of some function')
                        this.setState({eventID: jsonObj[0]['_id']['$oid']})
                }.bind(this))
            }.bind(this)
)    }

    componentDidMount() {
        console.log('init')
        this.someFunction()
        console.log('end')
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
        height: 800
    },
    overall: {
        flex: 4,
        margin: 0,
        width: 800,
        // height: 20,
        borderWidth: 0,
        justifyContent: 'center'
    },
    header: {
        fontSize: 50,
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'monospace',
        color: '#FFF',
        top: 10,
        // paddingTop: 20,
    },
    info: {
        textAlign: 'center'
    },
    buttons: {
        backgroundColor: '#66CD00',
        bottom: 0,
        top: 10,
        borderWidth: 0,
        width: 600,
        marginLeft: 200,
        // paddingRight: 15,
        margin: 0,
        padding: 0,
    },
    logo: {
        top: 20,
        width: 100,
        height: 100
    },
    // button: {     backgroundColor: '#841584',     width: 100 },
    cardhead: {
        textAlign: 'center',
        fontSize: 30
    },
    fonting: {
        color: 'black'
    },
    row: {
        justifyContent: 'center',
        paddingBottom: 30,
        marginBottom: 30,
        backgroundColor: '#F6FEDB',
        width: 700
    }
});
export default Splash;