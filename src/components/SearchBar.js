import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import {connect} from 'react-redux';

import {updateSearchResults, updateSearchQuery} from '../redux/actions/search';

import Services from '../services';
import {PINK} from '../../styles';

class SearchBar extends Component {

  onChange = text => {
    this.props.updateSearchQuery(text);
  }

  onSubmit = () => {
    // call api
    Services.getSearchResults(this.props.query).then(response => console.log(response));
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          value={this.props.query}
          onChangeText={this.onChange}
          onSubmitEditing={this.onSubmit} />
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
  }
});

const mapStateToProps = state => ({
  query: state.search.query,
  isSearching: state.activity
});

const mapDispatchToProps = dispatch => ({
  updateSearchResults: results => dispatch(updateSearchResults(results)),
  updateSearchQuery: query => dispatch(updateSearchQuery(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);