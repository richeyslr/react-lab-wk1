import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

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
      <div className='cards' id={this.keyword}>
      <Card style={{ width: '18rem' }}>
  <Card.Img onClick={this.handleClick} variant="top" src={this.props.img_url} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
      {this.props.description} | &hearts; {this.state.favs}
    </Card.Text>
    <Button onClick={() => {this.props.selectBeast(this.props.title)}} variant="primary">View</Button>
  </Card.Body>
</Card>
</div>
      // <div>
      //   <figure>
      //   <h2>{this.props.title}</h2>
      //   <img width='300px' onClick={this.handleClick} src={this.props.img_url} alt={this.props.description} title={this.title} />
      //   <p>{this.props.description} | &hearts; {this.state.favs}</p>
      //   </figure>
      // </div>
    )
  }
}

export default HornedBeasts
