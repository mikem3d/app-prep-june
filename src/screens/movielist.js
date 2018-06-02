/**
 * Sample React Native App
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  LayoutAnimation,
  View
} from 'react-native';

import {ORANGE, PINK, WHITE, GREYBG} from '../../styles';

import UpcomingListItem from '../components/UpcomingListItem';
import NowListItem from '../components/NowListItem';

import Services from '../services';

export default class MovieList extends Component {
  state = {
    upcoming: [
      {id:0, title: ''},
      {id:1, title: ''},
      {id:2, title: ''}
    ],
    nowplaying: [
      {id:0, title: ''},
      {id:1, title: ''},
      {id:2, title: ''}
    ]
  }

  componentDidMount() {
    Services.getUpcomingMovies().then(response => {
      this.setState({upcoming: response.results});
    })
    Services.getNowPlaying().then(response => {
      this.setState({nowplaying: response.results});
    })
  }

  componentWillUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }

  keyExtractor = item => `${item.id}`;

  renderUpcoming = ({item}) => (
    <UpcomingListItem data={item} />
  );

  renderNowPlaying = ({item}) => (
    <NowListItem data={item} />
  )

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>MOVIES</Text>
        <FlatList
          data={this.state.upcoming}
          extraData={this.state}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderUpcoming}
          horizontal
        />
        <View style={styles.listcontainer}>
          <Text>NOW</Text>
          <FlatList
            data={this.state.nowplaying}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderNowPlaying}
            horizontal
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREYBG,
    paddingLeft: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 80
  }
});
