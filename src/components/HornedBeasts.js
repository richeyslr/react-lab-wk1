import React, { Component } from 'react'

class HornedBeasts extends Component { 
  constructor(props){
    super(props);
    this.state = {favs: 0};
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = () => {
    this.setState((state) => {return {favs: state.favs + 1}});
  }
  render() {
    return (
      <div>
        <figure>
        <h2>{this.props.title}</h2>
        <img width='300px' onClick={this.handleClick} src={this.props.img_url} alt={this.props.description} title={this.title} />
        <p>{this.props.description} | &hearts; {this.state.favs}</p>
        </figure>
      </div>
    )
  }
}

export default HornedBeasts
