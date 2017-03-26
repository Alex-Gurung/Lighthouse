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
            phone: null,
            location: null,
            capacity: null,
            duartion: null,
            event: null,
        };
    }
  someFunction = function () {
      var x = 0;
  }
  render() {
    return (
      <ScrollView>
                <View style={styles.viewness}>
                <KeyboardAvoidingView behavior="padding">
                <FormLabel><Text style={styles.formness}>Name</Text></FormLabel>
                <FormInput />

                <FormLabel><Text style={styles.formness}>Group Size</Text></FormLabel>
                <FormInput keyboardType='numeric' />
            
                
                <FormLabel><Text style={styles.formness}>Duration(in hours)</Text></FormLabel>
                <FormInput 
                    keyboardType='numeric' 
                />

                                <FormLabel><Text style={styles.formness}>Address</Text></FormLabel>
                <FormInput />    

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
    fetch('https://lighthouse-backend.herokuapp.com/register/', {
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
        Alert.alert('Requestjjjj Sent', 'Your host request has been sent', [
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