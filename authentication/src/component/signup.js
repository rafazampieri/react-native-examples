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
			, passwordConfirmation: ''
			, errorMessage: ''
		};
	},
	render: function(){
		return(
			<View style={styles.container}>
				<Text>Create new User</Text>
				
				<TextInput 
					style={styles.input} placeholder={'Username'} 
					value={this.state.username} 
					onChangeText={ (text) => this.setState({username: text}) } />
				<TextInput 
					style={styles.input} placeholder={'Password'} 
					secureTextEntry={true} value={this.state.password} 
					onChangeText={ (text) => this.setState({password: text}) } />
				<TextInput 
					style={styles.input} placeholder={'Password Confirmation'} 
					secureTextEntry={true} value={this.state.passwordConfirmation} 
					onChangeText={ (text) => this.setState({passwordConfirmation: text}) } />

				<Text>{this.state.errorMessage}</Text>
				
				<Button text='Sign Up' onPress={this.onSignUpPress}/>
				<Button text='Sign In' onPress={this.onSignInPress} />
			</View>
		);
	},
	onSignUpPress: function(){
		var s = this.state;
		if(s.username === '' || s.password === ''
				|| s.password !== s.passwordConfirmation){
			return this.setState({
				password: '', passwordConfirmation: ''
				, errorMessage: 'Incorret Form.'
			});
		}

		this.props.navigator.immediatelyResetRouteStack([{name: 'logged'}]);
	},
	onSignInPress: function(){
		this.props.navigator.pop();
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
