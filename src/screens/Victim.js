import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Alert,
    Text,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';
import {Tile, List, Icon, ListItem, Button} from 'react-native-elements';
// import {me} from '../config/data';
import {FormLabel, FormInput} from 'react-native-elements'
class Victim extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            name: null,
            phone: null,
            groupsize: null,
            duration: null,
        };
    }
    validation = function () {
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed')
            }, {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => console.log('OK Pressed')
            }
        ], {cancelable: false})
    }
    // onChangeText={someFunction} <FormValidationMessage>Error
    // message</FormValidationMessage>
    render() {
        return (
            <ScrollView>
                <View style={styles.viewness}>
                    <FormLabel>
                        <Text style={styles.formness}>Name</Text>
                    </FormLabel>
                    <FormInput onChangeText={(name) => this.setState({name})}
    value={this.state.name}
    />

                    <FormLabel>
                        <Text style={styles.formness}>Group Size</Text>
                    </FormLabel>
                    <FormInput onChangeText={(groupsize) => this.setState({groupsize})}
    value={this.state.groupsize} keyboardType='numeric'/>

                    <FormLabel>
                        <Text style={styles.formness}>Duration(in hours)</Text>
                    </FormLabel>
                    <FormInput onChangeText={(duration) => this.setState({duration})}
    value={this.state.duration} keyboardType='numeric'/>

                    <Button
                        backgroundColor='#2ecc71'
                        raised
                        title='Find Home'
                        onPress={someVictimFunction}/>
                </View>
            </ScrollView>
        );
    }
    componentDidMount() {
            navigator
                .geolocation
                .getCurrentPosition((position) => {
                    this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude, error: null});
                }, (error) => this.setState({error: error.message}), {
                    enableHighAccuracy: true,
                    timeout: 20000,
                    maximumAge: 1000
                });
    }
    someVictimFunction () {
        console.log('begin victim method')
        fetch('https://lighthouse-backend.herokuapp.com/register/', {
  method: 'POST',
  body: JSON.stringify({
    'name': this.state.name,
    'phone': '7038351897',				//ALL OF THIS SHOULD BE
    'group-size': this.state.groupsize,			//THIS.STATE OR WHATEVER
    'duration': this.state.duration,
    'location': this.state.latitude+","+this.state.longitude,		//lat,long	// <-- here, location is the current latitiude and longitude
  }.bind(this))
}.bind(this))
}
}
const styles = StyleSheet.create({
    viewness: {
        // fontSize: 10
    },
    formness: {
        // backgroundColor: 'red'
        color: 'black',
        fontSize: 20
    }
});
// UserDetail.defaultProps = {     ...me };

export default Victim;
