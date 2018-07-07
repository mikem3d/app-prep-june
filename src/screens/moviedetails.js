'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text
} from 'react-native';
import {connect} from 'react-redux';

import Services from '../services';

import {GREYBG} from '../../styles';

class MovieDetails extends Component {

  render() {
    const {title, backdrop_path, poster_path, vote_average, overview} = this.props.selectedMovie;
    const {goBack} = this.props.navigation;
    console.log(this.props.selectedMovie);
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.backbtn} onPress={() => goBack()}>
          <Text style={styles.backtxt}>Back</Text>
        </TouchableOpacity>
        <Image source={{uri: `${Services.imageUrl}w500${backdrop_path}`}} style={styles.backdrop} />
        <View style={styles.info}>
          <Image source={{uri: `${Services.imageUrl}w500${poster_path}`}} style={styles.poster} />
          <View style={styles.meta}>
            <Text style={styles.title}>{title.toUpperCase()}</Text>
            <Text style={styles.votes}>{vote_average}</Text>
          </View>
        </View>
        <Text style={styles.description}>{overview}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREYBG,
  },
  backtxt: {
    color: '#fff',
    fontSize: 18
  },
  description: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 14,
    fontSize: 20,
    color: 'rgb(102,102,102)'
  },
  meta: {
    height: 180,
    marginTop: -60,
    marginLeft: 15
  },
  info: {
    flexDirection: 'row',
    marginLeft: 20
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  votes: {
    fontSize: 20,
    color: 'rgb(214, 24, 42)',
    marginTop: 45
  },
  poster: {
    marginTop: -80,
    width: 120,
    height: 180,
    borderRadius: 5
  },
  backbtn: {
    position: 'absolute',
    top: 54,
    left: 7,
    padding: 10,
    zIndex: 10
  },
  backdrop: {
    width: '100%',
    height: 280
  }
});

const mapStateToProps = state => ({
  selectedMovie: state.search.selectedMovie
})

export default connect(mapStateToProps)(MovieDetails);