import React, { Component } from 'react'

import './field.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Field extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: false
    }
    this.validateField = this.validateField.bind(this)
    this.initial = this.initial.bind(this)
  }
  initial () {
    this.setState({
      error: false
    })
  }
  validateField (e) {
    const pattern = this.props.pattern
    this.setState({ error: !pattern.test(e.target.value) })
    console.log('validation', pattern.test(e.target.value))
  }

  render () {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
            >
        <span className='field-type'>
          {this.props.fieldType}
        </span>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
                >
          <label className='input-label'>
            {this.props.label}
          </label>
          <label
            className='icon-label'
            style={{
              display: this.props.icon ? 'flex' : 'none',
              backgroundColor: this.props.backgroundColor,
              border: '1px solid' + this.props.borderColor,
              borderRight: 'none'
            }}
                    >
            {' '}<FontAwesomeIcon icon={this.props.icon} />
          </label>
          <input
            id='input_field'
            type={this.props.type}
            placeholder={this.props.placeholder}
            className='basic'
            onBlur={e => {
              if (this.props.pattern) {
                this.validateField(e)
              } else {
              }
            }}
            style={{
              display:
                                this.props.category === 'input'
                                    ? 'initial'
                                    : 'none',
              backgroundColor: this.props.backgroundColor,
              border: this.state.error
                                ? '1px solid #fb7469'
                                : '1px solid' + this.props.borderColor,
              borderRadius: this.props.icon
                                ? '0px 7px 7px 0px'
                                : '7px',
              boxShadow: this.state.error
                                ? '0px 0px 3px 1px #fb7469b5'
                                : ''
            }}
                    />
          <textarea
            id='text_field'
            type={this.props.type}
            placeholder={this.props.placeholder}
            className='basic textfield'
            onBlur={e => {
              if (this.props.pattern) {
                this.validateField(e)
              } else {
              }
            }}
            style={{
              display:
                                this.props.category === 'textarea'
                                    ? 'initial'
                                    : 'none',
              backgroundColor: this.props.backgroundColor,
              border: this.state.error
                                ? '1px solid #fb7469'
                                : '1px solid' + this.props.borderColor,
              borderRadius: this.props.icon
                                ? '0px 7px 7px 0px'
                                : '7px',
              boxShadow: this.state.error
                                ? '0px 0px 3px 1px #fb7469b5'
                                : ''
            }}
                    />
        </div>
        <span
          className='error'
          style={{ display: this.state.error ? 'initial' : 'none' }}
                >
          <FontAwesomeIcon
            icon={['fas', 'exclamation-triangle']}
                    />{' '}
          {this.props.error}
        </span>
      </div>
    )
  }
}
export default Field
