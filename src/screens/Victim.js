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
            error: null
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
                    <FormInput/>

                    <FormLabel>
                        <Text style={styles.formness}>Group Size</Text>
                    </FormLabel>
                    <FormInput keyboardType='numeric'/>

                    <FormLabel>
                        <Text style={styles.formness}>Duration(in hours)</Text>
                    </FormLabel>
                    <FormInput keyboardType='numeric'/>

                    <Button
                        backgroundColor='#2ecc71'
                        raised
                        title='Find Home'
                        onPress={someddFunction}/>
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
                },);
    }
}
someddFunction = function () {
    fetch('https://lighthouse.naitian.org/hosts')  
    .then(function(response) {
        var y =  response.json().then(function(jsonObj) {
            console.log(jsonObj)
        })
    }
)
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