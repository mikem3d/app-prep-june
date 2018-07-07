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
import {connect} from 'react-redux';

import {ORANGE, PINK, WHITE, GREYBG} from '../../styles';

import UpcomingListItem from '../components/UpcomingListItem';
import NowListItem from '../components/NowListItem';
import SearchBar from '../components/SearchBar';

import Services from '../services';

class MovieList extends Component {
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
    const {results, query} = this.props;
    console.log(results);
    return (
      <ScrollView style={styles.container}>
        <SearchBar />
        {
          results && query.length != 0 ? <View/> :
          <View>
            <View>
              <Text style={styles.title}>MOVIES</Text>
              <FlatList
                data={this.state.upcoming}
                extraData={this.state}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderUpcoming}
                horizontal
              />
            </View>
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
          </View>
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GREYBG,
    paddingLeft: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 80
  },
});

const mapStateToProps = state => ({
  results: state.search.searchResults,
  query: state.search.query,
  isLoading: state.activity
});

export default connect(mapStateToProps)(MovieList) // = ReactNative Component with all the props injected
