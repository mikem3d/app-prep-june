'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Services from '../services';

import {ORANGE, PINK, WHITE} from '../../styles';

export default class UpcomingListItem extends Component {
  
  render() {
    const {title, backdrop_path} = this.props.data;
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.wrapper}>
          <Image source={{uri:`${Services.imageUrl}w500${backdrop_path}`}} style={styles.img}/>
          <LinearGradient colors={[ORANGE, PINK]} style={styles.overlay}/>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.imgshadow} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 180,
    marginRight: 20
  },
  wrapper: {
    borderRadius: 6,
    zIndex: 1,
    overflow: 'hidden',
    width: 320,
    height: 160
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 320,
    height: 160,
    opacity: 0.3,
    zIndex: 2
  },
  title: {
    fontSize: 20,
    color: WHITE,
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 3
  },
  img: {
    backgroundColor: 'rgb(230, 230, 230)',
    width: 320,
    height: 160
  },
  imgshadow: {
    top: 16,
    left: 16,
    backgroundColor: '#000',
    opacity: 0.5,
    width: 293,
    height: 144,
    zIndex: 0,
    position: 'absolute',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 1,
    shadowRadius: 9
  }
});
