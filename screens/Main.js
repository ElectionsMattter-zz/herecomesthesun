import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class MainScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Button title="This is Main" onPress={() => this.props.navigation.goBack()} />
                <Button title="Go to State" onPress={() => this.props.navigation.navigate('State')} />
                <Button title="Go to Local" onPress={() => this.props.navigation.navigate('Local')} />
            </View>
        );
    }
}
export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});