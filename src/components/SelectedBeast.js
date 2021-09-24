import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

class SelectedBeast extends Component {
  render() {
    return (
      <Modal show={this.props.displayState} onHide={this.props.closemodal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img style={{ width: '18rem'}} src={this.props.beast.image_url} alt={this.props.beast.description}></img><p>{this.props.beast.description}</p></Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closemodal} variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
