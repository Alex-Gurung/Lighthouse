import React, { Component } from 'react';
import { ScrollView } from 'react-native';
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
                <FormLabel>Name</FormLabel>
                <FormInput />
                

                <FormLabel>Phone Number</FormLabel>
                <FormInput />
                

                <FormLabel>Location</FormLabel>
                <FormInput />
                

                <FormLabel>Group size</FormLabel>
                <FormInput />
                

                <FormLabel>Duration</FormLabel>
                <FormInput />
                

                <Button
                    raised
                    icon={{ name: 'cached' }}
                    title='Offer Home'/>

            </ScrollView>
    );
  }
}

// UserDetail.defaultProps = { ...me };

export default Host;