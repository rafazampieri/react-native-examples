var React = require('react-native');
var {
	Navigator
} = React;

var SignIn = require('./component/signin');
var SignUp = require('./component/signup');
var Logged = require('./component/logged');

var ROUTES = {
	signin: SignIn
	, signup: SignUp
	, logged: Logged
}

module.exports = React.createClass({
	renderScene: function(route, navigator){
		var Component = ROUTES[route.name];
		return <Component route={route} navigator={navigator} />
	},
	render: function(){
		return(
			<Navigator 
			initialRoute={{name: 'signin'}} 
			renderScene={this.renderScene}
			configureScene={ () => Navigator.SceneConfigs.FloatFromRight } />
		);
	}
});

// var styles = StyleSheet.create({
// 	container: {
// 		flex: 1
// 		, justifyContent: 'center'
// 		, alignItems: 'center'
// 	},
// 	input: {
// 		width: 200
// 		, height: 50
// 		, marginTop: 20
// 		, borderColor: 'black'
// 		, borderWidth: 2
// 		, alignSelf: 'center'
// 		, padding: 10
// 		, borderRadius: 10
// 	}
// });
