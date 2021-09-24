import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import data from './data.json'

export default class Main extends Component {
  render() {
    return (
        <div className='cont'>
          {data.filter((filteredBeast)=> filteredBeast.title.toLowerCase().includes(this.props.searchBarValue.toLowerCase())).filter((byHorns)=> byHorns.horns === parseInt(this.props.hornFilter)).map((item)=>{
         return  <HornedBeasts selectBeast={this.props.selectBeastModal} title={item.title} img_url={item.image_url} description={item.description} horns={item.horns} />
     })}
        </div>
    )
  }
}
