/**
 * Sample React Native App
 */

import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';

import Welcome from './src/screens/welcome';
import MovieList from './src/screens/movielist';
import MovieDetails from './src/screens/moviedetails';
import store from './src/redux/store';

const RootStack = createStackNavigator({
  welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  },
  movielist: {
    screen: MovieList,
    navigationOptions: {
      header: null
    }
  },
  moviedetails: {
    screen: MovieDetails,
    navigationOptions: {
      header: null
    }
  }
})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

