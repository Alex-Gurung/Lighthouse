import React, {Component} from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
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
                <FormLabel>Name</FormLabel>
                <FormInput />
                

                <FormLabel>Phone Number</FormLabel>
                <FormInput />
                

                <FormLabel>Group size</FormLabel>
                <FormInput />
                

                <FormLabel>Duration</FormLabel>
                <FormInput />
                

                <Button
                    raised
                    icon={{ name: 'home' }}
                    title='Find Home'/>
            </ScrollView>
        );
    }
}

// UserDetail.defaultProps = {
//     ...me
// };

export default Victim;