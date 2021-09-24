import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import data from './data.json'

export default class Main extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className='cont'>
          {data.map((item)=>{
         return  <HornedBeasts selectBeast={this.props.selectBeastModal} title={item.title} img_url={item.image_url} description={item.description} />
     })}
        </div>
    )
  }
}
