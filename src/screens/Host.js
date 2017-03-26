import React, { Component } from 'react';
import { ScrollView, Alert, View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
// import { me } from '../config/data';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
class Host extends Component {
//   handleSettingsPress = () => {
//     this.props.navigation.navigate('Settings');
//   };
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            phone: '8323983229',
            location: null,
            capacity: null,
            duartion: null,
            event: null,
        };
    }
    validation () {
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
  someFunction () {
      var x = 0;
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
render() {
    return (
      <ScrollView>
        <View style={styles.viewness}>
          <KeyboardAvoidingView behavior="padding">
            <FormLabel><Text style={styles.formness}>Name</Text></FormLabel>
            <FormInput  onChangeText={(name) => this.setState({name})}
                value={this.state.name}/>

            <FormLabel><Text style={styles.formness}>Capacity</Text></FormLabel>
            <FormInput keyboardType='numeric' onChangeText={(capacity) => this.setState({capacity})}
                value={this.state.capacity}/>

            <FormLabel><Text style={styles.formness}>Duration(in hours)</Text></FormLabel>
            <FormInput 
              keyboardType='numeric' 
              onChangeText={(duration) => this.setState({duration})}
                              value={this.state.duration}
            />

          <FormLabel><Text style={styles.formness}>Address</Text></FormLabel>
          <FormInput onChangeText={(address) => this.setState({address})}
                                        value={this.state.address}
                                      />    

          <Button backgroundColor='#2ecc71'
            raised
            title='Offer Home'
            onPress={hostFunction}
          />
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
    );
  }

  hostToServerFunction () {
    console.log('begin host method')
    let data = new FormData()
    data.append('name', this.state.name)
    data.append('phone', this.state.phone)
    data.append('duration', this.state.duration)
    data.append('capacity', this.state.capacity)
    data.append('location', this.state.name)
    data.append('event', '58d7ccc94740cc0004c6898f')

    fetch('https://lighthouse-backend.herokuapp.com/host', {
      method: 'POST',
      body: JSON.stringify({
        'name': this.state.name,
        'phone': this.state.phone,              //ALL OF THIS SHOULD BE
        'duration': this.state.duration,         //THIS.STATE OR WHATEVER
        'capacity': this.state.capacity,
        'location': this.state.latitude+","+this.state.longitude,       //lat,long  // <-- here, location is the current latitiude and longitude
        'event': this.state.event,
      }.bind(this))
    }.bind(this))
  }
}

hostFunction = function (condition, content) {
        Alert.alert('Request Sent', 'Your host request has been sent', [
            {
                text: 'OK',
                onPress: () => console.log('Great!')
            }
        ], {cancelable: false})
    }

const styles = StyleSheet.create({
    viewness: {
        // fontSize: 10
    },
    formness: {
        // backgroundColor: 'red'
        color: 'black',
        fontSize: 20
    },
});
// UserDetail.defaultProps = { ...me };

export default Host;
