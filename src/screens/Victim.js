import React, {Component} from 'react';
import { View, ScrollView, Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import {Tile, List, Icon, ListItem, Button} from 'react-native-elements';
// import {me} from '../config/data';
import {FormLabel, FormInput} from 'react-native-elements'
class Victim extends Component {
    
    someFunction = function () {
        var x = 0;
    } //onChangeText={someFunction}
    //<FormValidationMessage>Error message</FormValidationMessage>
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
                <FormInput keyboardType='numeric' />
                

                <Button backgroundColor='#2ecc71'
                    raised
                    title='Find Home'/>
                    </KeyboardAvoidingView>
                    </View>
            </ScrollView>
        );
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
// UserDetail.defaultProps = {
//     ...me
// };


export default Victim;