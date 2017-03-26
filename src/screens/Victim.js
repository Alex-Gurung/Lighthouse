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
// import SendSMS from 'react-native-sms'
class Victim extends Component {
    constructor(props) {
        super(props);
        this.someVictimFunction = this
            .someVictimFunction
            .bind(this);
        this.componentDidMount = this
            .componentDidMount
            .bind(this);
        this.state = {
            initialPosition: null,
            latitude: null,
            longitude: null,
            name: null,
            phone: null,
            groupsize: null,
            duration: null
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
                    <FormInput
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}/>

                    <FormLabel>
                        <Text style={styles.formness}>Group Size</Text>
                    </FormLabel>
                    <FormInput
                        onChangeText={(groupsize) => this.setState({groupsize})}
                        value={this.state.groupsize}
                        keyboardType='numeric'/>

                    <FormLabel>
                        <Text style={styles.formness}>Duration(in hours)</Text>
                    </FormLabel>
                    <FormInput
                        onChangeText={(duration) => this.setState({duration})}
                        value={this.state.duration}
                        keyboardType='numeric'/>

                    <Button
                        backgroundColor='#2ecc71'
                        raised
                        title='Find Home'
                        onPress={this.someVictimFunction}/>
                </View>
            </ScrollView>
        );
    }
    componentDidMount() {
        console.log('mounted')
        navigator
            .geolocation
            .getCurrentPosition((position) => {
                var initialPosition = JSON.stringify(position);
                this.setState({longitude: initialPosition.longitude, latitude: initialPosition.latitude});
        console.log('da real finish')
        console.log(this.state.longitude)    
        }, (error) => alert(JSON.stringify(error)), {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000
            });

        console.log('finished mounting')
    }
    someVictimFunction() {
        console.log(this.state)
        console.log('begin victim method')
        var formData = new FormData();
        formData.append("name", this.state.name)
        formData.append("phone", '7038351897')
        formData.append("group_size", this.state.groupsize)
        formData.append("duration", this.state.duration)
        formData.append("location", '41.8781' + "," + '87.6298')
        formData.append("event", '58d7ccc94740cc0004c6898f')
        // var request = new XMLHttpRequest();
        // request.open("POST")
        fetch('https://lighthouse-backend.herokuapp.com/register', {
                method: 'POST',
                body: formData,
            }).then(function (response) {
            return response.json();
        })
            .then(function (data) {
                if (data["status"] === '200'){
                 console.log('success')   
                }
                else{console.log('failure')}
                return data;
            })
    }
}

idkkkk = function () {
    var z = 0
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




// JSON.stringify({
//                     // 'name': 'this.state.name', 'phone': '7038351897', //ALL OF THIS SHOULD BE
//                     // 'group_size': 9, //THIS.STATE OR WHATEVER 'duration': 3, 'location': '8' +
//                     // "," + '9', //lat,long	// <-- here, location is the current latitiude and
//                     // longitude 'event': '58d7cc5a4740cc0004c6898e'

//                     'name': this.state.name,
//                     'phone': '7038351897', //ALL OF THIS SHOULD BE
//                     'group_size': this.state.groupsize, //THIS.STATE OR WHATEVER
//                     'duration': this.state.duration,
//                     'location': this.state.latitude + "," + this.state.longitude, //lat,long	// <-- here, location is the current latitiude and longitude
//                     'event': '58d7cc5a4740cc0004c6898e'
//                 })