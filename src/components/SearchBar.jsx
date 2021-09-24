import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <input placeholder='Search...' onChange={(evt) => {this.props.updateSearch(evt.target.value)}}></input>
    )
  }
}
