import React from 'react'
import { mount } from 'enzyme'
import Row from 'pwa-storefront/Row'

describe('Row', () => {
  let wrapper

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render without error', () => {
    expect(() => {
      wrapper = mount(<Row />)
    }).not.toThrowError()
  })
})
