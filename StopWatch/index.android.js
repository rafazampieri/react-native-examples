// import
var formatTime = require('minutes-seconds-milliseconds');
var React = require('react-native');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TouchableHighlight
} = React;

// render
var StopWatch = React.createClass({
  getInitialState: function(){
    return {
      timeElapsed: null
      , time: null
      , isRunning: false
      , startTime: null
      , laps: []
      , isPaused: false
      , pauseTime: null
      , timePausedElapsed: 0
    };
  },
  render: function(){
    return <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.timeWrapper}>
          <Text style={styles.timer}>
            {formatTime(this.state.time)}
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          {this.buttonStartStop()}
          {this.buttonClean()}
          {this.buttonPauseContinue()}
          {this.buttonLap()}
        </View>
      </View>
      <View style={styles.footer}>
        {this.showLaps()}
      </View>
    </View>
  },
  buttonStartStop: function(){
    var style = this.state.isRunning ? styles.stopButton : styles.startButton;
    //var style = styles.stopButton;

    return <TouchableHighlight 
              underlayColor="gray"
              style={[styles.button, style]} 
              onPress={this.handleStartStopPress}>
      <Text>
        {this.state.isRunning ? 'Stop' : 'Start'}
      </Text>
    </TouchableHighlight>
  },
    handleStartStopPress: function(){
      if(this.state.isRunning){
        clearInterval(this.interval);
        this.setState({
          isRunning: false
        });
        return;
      }

      this.setState({
        startTime: new Date()
        , timePausedElapsed: 0
        , laps: []
      });

      this.interval = setInterval(this.updateTime, 30);
    },
    updateTime: function(){
      this.setState({
        time: (new Date() - this.state.startTime) - this.state.timePausedElapsed
        , isRunning: true
      });
    },
  buttonClean: function(){
    if(this.state.laps.length == 0 || this.state.isRunning){
      return;
    }

    return <TouchableHighlight 
              underlayColor="gray"
              style={[styles.button, styles.cleanButton]} 
              onPress={this.handleCleanPress}>
      <Text>Clean</Text>
    </TouchableHighlight>
  },
  handleCleanPress: function(){
    this.setState({
      laps: []
      , time: null
    });
  },
  buttonPauseContinue: function(){
    if(this.state.isRunning == false){
      return;
    }

    return <TouchableHighlight 
        style={[styles.button, styles.lapButton]}
        onPress={this.handlePauseContinuePress}>
      <Text>
        {this.state.isPaused ? 'Continue' : 'Pause'}
      </Text>
    </TouchableHighlight>
  },
    handlePauseContinuePress: function(){
      if(this.state.isPaused){
        this.interval = setInterval(this.updateTime, 30);
        this.setState({
          isPaused: false
          , timePausedElapsed: new Date() - this.state.pauseTime
        });
      } else {
        clearInterval(this.interval);
        this.setState({
          pauseTime: new Date()
          , isPaused: true
        });
      }
    },
  buttonLap: function(){
    if(this.state.isRunning == false){
      return;
    }

    return <TouchableHighlight 
        style={[styles.button, styles.lapButton]}
        onPress={this.handleLapPress}>
      <Text>
        Lap
      </Text>
    </TouchableHighlight>
  },
    handleLapPress: function(){
      if(this.state.isRunning == false){
        return;
      }

      var lap = this.state.isPaused ? this.state.time : (new Date() - this.state.startTime) - this.state.timePausedElapsed;
      this.setState({
        laps: this.state.laps.concat([lap])
      });
    },
  showLaps: function(){
    if(this.state.laps.length == 0){
      return;
    }

    return this.state.laps.map( (lapTime, index) => {
      return <View style={styles.lap} key={index}>
        <Text style={styles.lapText}>
          Lap {index + 1}
        </Text>
        <Text style={styles.lapText}>
          {formatTime(lapTime)}
        </Text>
      </View>
    });
  }
});

// style
var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
    header: {
      flex: 1
    },
      timeWrapper: {
        flex: 5
        , alignItems: 'center'
        , justifyContent: 'center'
      },
        timer: {
          fontSize: 60
        },
      buttonWrapper: {
        flex: 3
        , flexDirection: 'row'
        , justifyContent: 'space-around'
        , alignItems: 'center'
      },
        button: {
          borderRadius: 50
          , borderWidth: 2
          , height: 100
          , width: 100
          , justifyContent: 'center'
          , alignItems: 'center'
        },
          startButton: {
            borderColor: 'blue'
          },
          stopButton: {
            borderColor: 'red'
          },
          cleanButton: {
            borderColor: 'green'
          },
          pauseButton: {
            borderColor: 'blue'
          },
          lapButton: {
            borderColor: 'green'
          },
    footer: {
      flex: 1
    },
      lap: {
        flexDirection: 'row'
        , justifyContent: 'space-around'
      },
        lapText: {
          fontSize: 20
        }
});

// registry
AppRegistry.registerComponent('StopWatch', () => StopWatch);





