import React, { Component } from 'react'
import './form-fields.css'
import Field from './field'

class ColorPallet extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div style={{ padding: '5vw' }}>
        <div>
          <div className='section-wrapper'>
            <div className='section-title'>Form Fields</div>
            <div className='section-row'>
              <div className='row-title'>Input</div>
              <div className='row-swatch'>
                <Field
                  category='input'
                  fieldType='Basic input with no validation'
                  label='Full Name:'
                  backgroundColor='#fff'
                  borderColor='#869EAF'
                  placeholder='John Doe'
                                />
                <Field
                  category='input'
                  fieldType='email input with validation'
                  label='Email:'
                  type='email'
                  error='Please enter a valid email address'
                  pattern={
                                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
                                    }
                  backgroundColor='#fff'
                  borderColor='#869EAF'
                  placeholder='abcd@xyz.com'
                                />
                <Field
                  category='input'
                  fieldType='Input with icon label'
                  type='email'
                  error='Please enter a valid email address'
                  pattern={
                                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
                                    }
                  backgroundColor='#fff'
                  borderColor='#869EAF'
                  icon={['fas', 'envelope']}
                  placeholder='abcd@xyz.com'
                                />
              </div>
            </div>
            <div className='section-row'>
              <div className='row-title'>Textarea</div>
              <div className='row-swatch'>
                <Field
                  category='textarea'
                  fieldType='Basic textarea with no validation'
                  label='Your thoughts:'
                  backgroundColor='#fff'
                  borderColor='#869EAF'
                  placeholder='Add text here...'
                                />
                <Field
                  category='textarea'
                  fieldType='Textarea with validation for special characters'
                  label='Comments:'
                  type='text'
                  error='Avoid using any blacklisted characters'
                  pattern={/^[a-zA-Z0-9äöüÄÖÜ,.!()&%]*$/}
                  backgroundColor='#fff'
                  borderColor='#869EAF'
                  placeholder='Add comment here'
                                />
              </div>
            </div>
            <div className='section-row'>
              <div className='row-title'>Dropdown</div>
              <div className='row-swatch'>
                <Field
                  category='textarea'
                  fieldType='Basic textarea with no validation'
                  label='Your thoughts:'
                  backgroundColor='#fff'
                  borderColor='#869EAF'
                  placeholder='Add text here...'
                                />
                <Field
                  category='textarea'
                  fieldType='Textarea with validation for special characters'
                  label='Comments:'
                  type='text'
                  error='Avoid using any blacklisted characters'
                  pattern={/^[a-zA-Z0-9äöüÄÖÜ,.!()&%]*$/}
                  backgroundColor='#fff'
                  borderColor='#869EAF'
                  placeholder='Add comment here'
                                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ColorPallet
