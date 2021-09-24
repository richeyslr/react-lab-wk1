import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'

export default class Filter extends Component {
  render() {
    return (
      <div>
        <Form>
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Sort by Horns
  </Dropdown.Toggle>

  <Dropdown.Menu onClick={(evt) => {this.props.setHorns(evt.target.getAttribute('value') )}}>
    <Dropdown.Item value=''>All</Dropdown.Item>
    <Dropdown.Item value={1}>1 horn</Dropdown.Item>
    <Dropdown.Item value={2}>2 horns</Dropdown.Item>
    <Dropdown.Item value={3}>3 horns</Dropdown.Item>
    <Dropdown.Item value={100}>100 horns</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</Form>
      </div>
    )
  }
}
