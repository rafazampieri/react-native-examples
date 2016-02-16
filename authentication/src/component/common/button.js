'use strict'
var React = require('react-native');
var {
	TouchableHighlight
	, Text
	, StyleSheet
} = React;

module.exports = function(){
	return {
		render: function(){
			return (
				<TouchableHighlight
						style={styles.button}
						underlayColor={'gray'} 
						onPress={this.props.onPress}>
					<Text style={styles.text}>{this.props.text}</Text>
				</TouchableHighlight>
			);
		}
	}
}

var styles = StyleSheet.create({
	button: {
		alignSelf: 'center'
		, width: 200
		, height: 50
		, justifyContent: 'center'
		, alignItems: 'center'
		, borderWidth: 2
		, borderColor: 'black'
		, borderRadius: 10
		, marginTop: 20
	},
	text: {
		fontSize: 20
	}
});