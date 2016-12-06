import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
		TouchableHighlight,
} from 'react-native';

class App extends React.Component {
		_onPressButton() {
			this.setState({count: this.state.count + 1})
		}

		constructor(props) {
				super(props)
				this.state = {count: 0};
				this._onPressButton = this._onPressButton.bind(this, this.state.count);
		}
  render() {
    return (
						<View style={styles.container}>
						<TouchableHighlight onPress={this._onPressButton}>
						<Text>Nose goes here. {this.state.count}</Text>
						</TouchableHighlight>
						</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Exponent.registerRootComponent(App);
