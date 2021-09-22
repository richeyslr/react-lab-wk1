import React, { Component } from 'react'

class HornedBeasts extends Component { 
  render() {
    return (
      <div>
        <figure>
        <h2>{this.props.title}</h2>
        <img src={this.props.img_url} alt={this.props.description} title={this.title} />
        <p>{this.props.description} | </p>
        </figure>
      </div>
    )
  }
}

export default HornedBeasts
