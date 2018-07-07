import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  ActivityIndicator
} from 'react-native';
import {connect} from 'react-redux';

import {fetchSearchResults, updateSearchQuery} from '../redux/actions/search';

import {PINK} from '../../styles';

class SearchBar extends Component {

  onChange = text => {
    this.props.updateSearchQuery(text);
  }

  onSubmit = () => {
    const {query, fetchSearchResults, isSearching} = this.props;
    if(!isSearching) {
      this.props.fetchSearchResults(query)
    }
  }

  render () {
    const {isSearching} = this.props;
    const _disabled = {
      opacity: isSearching ? 0.3 : 1
    }
    return (
      <View style={[styles.container, _disabled]}>
        <TextInput
          style={styles.textinput}
          value={this.props.query}
          onChangeText={this.onChange}
          onSubmitEditing={this.onSubmit} />
        { isSearching ? <ActivityIndicator animating style={styles.spinner} color='#fff' /> : null }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: PINK,
    marginTop: 50,
    marginRight: 20,
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center'
  },
  textinput: {
    fontSize: 16,
    color: '#fff'
  },
  spinner: {
    position: 'absolute',
    right: 20,
    top: 15
  }
});

const mapStateToProps = state => ({
  query: state.search.query,
  isSearching: state.activity
});

const mapDispatchToProps = dispatch => ({
  fetchSearchResults: query => dispatch(fetchSearchResults(query)),
  updateSearchQuery: query => dispatch(updateSearchQuery(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);