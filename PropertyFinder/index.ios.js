/**
 * React Native Tutorial: Building Apps with JavaScript
 * http://www.raywenderlich.com/99473/introducing-react-native-building-apps-javascript
 */
'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage'); // import SearchPage.js

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white', 
    fontSize: 30,
    margin: 80
  },
  container: { flex: 1 }
}); 

class HelloWorld extends React.Component{
  render(){
    return <React.Text style={styles.text}>Hello World (Again)</React.Text>;
    /*return React.createElement(React.Text, {style: styles.text}, "Hello World!");*/
  }
}

class PropertyFinderApp extends React.Component {
  render(){
    return  (
      <React.NavigatorIOS style={styles.container}
          initialRoute={{ title: 'PropertyFinder', component: SearchPage }} />
    );
  }
}

React.AppRegistry.registerComponent('PropertyFinder', function() { 
  return PropertyFinderApp;
}); 



/*
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var PropertyFinder = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
*/
