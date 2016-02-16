var React = require('react-native');
var {
	View
	, Text
	, TextInput
	, StyleSheet
	, TextInput
} = React;
var Button = require('./common/button');

module.exports = React.createClass({
	getInitialState: function(){
		return {
			username: ''
			, password: ''
			, errorMessage: ''
		}
	},
	render: function(){
		return(
			<View style={styles.container}>
				<Text>Welcome to Authentication!</Text>
				<TextInput 
					style={styles.input} placeholder={'Username'} 
					value={this.state.username} 
					onChangeText={ (text) => this.setState({username: text}) } />

				<TextInput 
					style={styles.input} placeholder={'Password'} 
					value={this.state.password} secureTextEntry={true} 
					onChangeText={ (text) => this.setState({password: text}) } />

				<Text>{this.state.errorMessage}</Text>

				<Button text='Sign In' onPress={this.onSignIn} />
				<Button text='Sign Up' onPress={this.onSignUpPress} />
			</View>
		);
	},
	onSignIn: function(){
		var s = this.state
		if(s.username !== 'User' || s.password !== '123'){
			return this.setState({
				password: ''
				, errorMessage: 'Incorrect Username or Password.'
			});
		}

		this.props.navigator.immediatelyResetRouteStack([{name: 'logged'}]);
	},
	onSignUpPress: function(){
		this.props.navigator.push({name: 'signup'});
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1
		, justifyContent: 'center'
		, alignItems: 'center'
	},
	input: {
		width: 200
		, height: 50
		, marginTop: 20
		, borderColor: 'black'
		, borderWidth: 2
		, alignSelf: 'center'
		, padding: 10
		, borderRadius: 10
	}
});
