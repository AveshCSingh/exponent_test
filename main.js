import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
		TouchableHighlight,
} from 'react-native';

class App extends React.Component {
		_incrementCounter() {
			this.setState({count: this.state.count + 1})
		}

		_resetCounter() {
				this.setState({count: 0})
		}

		constructor(props) {
				super(props)
				this.state = {count: 0};
				this._incrementCounter = this._incrementCounter.bind(this, this.state.count);
				this._resetCounter = this._resetCounter.bind(this, this.state.count);
		}
  render() {
    return (
				<View style={{flex: 1}}>
						<View style={styles.container}>
  						<TouchableHighlight onPressIn={this._incrementCounter}>
	  				  	<View style={{width: 250, height: 250, alignItems: 'center', justifyContent: 'center'}}>
		    			  	<Text style={[styles.bigred]}>{this.state.count}</Text>
				  		  </View>
					  	</TouchableHighlight>
						</View>
						<View style={styles.bottom}> 
  						<TouchableHighlight onPress={this._resetCounter}>
     						<Text style={{fontSize: 25}}> Reset </Text>
						  </TouchableHighlight>
	    			</View>
				</View>
    );
  }
}

const styles = StyleSheet.create({
		bigred: {
				color: 'red',
				fontWeight: 'bold',
				fontSize: 100,
		},
		bottom: {
				bottom: 0,
				right: 0,
		},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Exponent.registerRootComponent(App);
