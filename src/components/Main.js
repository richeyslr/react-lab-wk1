import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import data from './data.json'

export default class Main extends Component {
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
