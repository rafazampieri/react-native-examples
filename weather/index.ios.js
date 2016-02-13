// import
var React = require('react-native');
var {
  View
  , Text
  , MapView
  , StyleSheet
  , AppRegistry
} = React;
var api = require('./src/OpenWeatherMapApi.js');

// render
var weather = React.createClass({
  getInitialState: function(){
    return {
      pin: []
      , weather: {
        city: ''
        , description: ''
        , temperature: ''
      }
    }
  },
  render: function(){
    return <View style={styles.container}>
      <MapView style={styles.map}
        annotations={this.state.pin}
        onRegionChangeComplete={this.onRegionChangeComplete}>
      </MapView>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.text}>{this.state.weather.temperature}</Text>
        <Text style={styles.text}>{this.state.weather.city}</Text>
        <Text style={styles.text}>{this.state.weather.description}</Text>
      </View>
    </View>
  },
  onRegionChangeComplete: function(region){
    this.setState({
      pin: [{
        latitude: region.latitude
        , longitude: region.longitude
      }]
    });

    api(region.latitude, region.longitude)
      .then((data) => {
        this.setState({
          weather: data
        });
      });
  }
});

// style
var styles = StyleSheet.create({
  container: {
    flex: 1
    , justifyContent: 'center'
    , alignItems: 'stretch'
  },
    map: {
      flex: 3
    },
    descriptionWrapper: {
      flex: 1
      , justifyContent: 'space-around'
      , alignItems: 'center'
      , padding: 20
    },
      text: {
        fontSize: 30
      }
});

// registry
AppRegistry.registerComponent('weather', () => weather);