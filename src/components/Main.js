import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import data from './data.json'
import { bind } from 'lodash';

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {favs: 0};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState((state) => {return {favs: state.favs + 1}});
  }
  render() {
    return (
        <div>
          {data.map((item)=>{
         return  <HornedBeasts title={item.title} img_url={item.image_url} description={item.description} />
     })}
        </div>
    )
  }
}
