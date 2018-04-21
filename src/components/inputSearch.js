import React, { Component } from 'react';
import { getReq } from '../utils/service';
import Suggestions from './suggestion';
import Search from '../utils/fuzzySearch';


class InputSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      countries: null,
      result: []
    }
  }

  autocomplete(valueToSearch) {
    if (!valueToSearch) { return false; }
    this.setState({
      result: Search(this.state.countries, valueToSearch)
    })
  }

  componentDidMount() {
    getReq()
      .then(res => this.setState({
        countries: res
      }));
  }

  updateInputValue(evt) {
    this.setState({
      searchValue: evt.target.value
    });
    this.autocomplete(evt.target.value);
  }

  closeAutoCompleteAndUpdateInputValue(val) {
    this.setState({
      result: [],
      searchValue: val
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Fuzzy Search Any Country</h2>
        <div className="autocomplete">
          <input
            id="search-input"
            placeholder='Start Typing'
            value={this.state.searchValue}
            onChange={this.updateInputValue.bind(this)}
          />
          <Suggestions countries={this.state.result}
            closeAutoCompleteAndUpdateInputValue={this.closeAutoCompleteAndUpdateInputValue.bind(this)} />
        </div>
      </div>
    );
  }
}

export default InputSearch;
