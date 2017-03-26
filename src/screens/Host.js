import React, { Component } from 'react';
import { ScrollView, Alert, View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
// import { me } from '../config/data';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
class Host extends Component {
//   handleSettingsPress = () => {
//     this.props.navigation.navigate('Settings');
//   };
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
                    onPress={validation}
                    />
                    </KeyboardAvoidingView>
                    </View>
            </ScrollView>
    );
  }
}
// validation = function (condition, content) {
//         Alert.alert('Request Sent', 'Your host request has been sent', [
//             {
//                 text: 'OK',
//                 onPress: () => console.log('Great!')
//             }
//         ], {cancelable: false})
//     }
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