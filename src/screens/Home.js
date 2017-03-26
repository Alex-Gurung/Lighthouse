import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native'
import { List, ListItem } from 'react-native-elements';
import Card from '../components/Card/Card'
class Home extends Component {
    onLearnMore = (user) => {
        this.props.navigation.navigate('Details', { ...event });
    };
    render() {
        return (
            <ScrollView> 
            <List>
                <ListItem  title="Some Event"
                    onPress={() => this.onLearnMore(event)}
                />
            </List>

            </ScrollView>
            
        );
    }
}

export default Home;
