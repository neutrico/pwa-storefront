import React from 'react'
import { mount } from 'enzyme'
import MenuItem from 'pwa-storefront/menu/MenuItem'
import Link from 'pwa-storefront/link/Link'
import MenuContext from 'pwa-storefront/menu/MenuContext'
import MenuLeaf from 'pwa-storefront/menu/MenuLeaf'

describe('MenuItem', () => {
  let wrapper

  afterEach(() => {
    if (wrapper.exists()) {
      wrapper.unmount()
    }
  })

  const Test = ({ renderItem, ...props }) => {
    return (
      <MenuContext.Provider
        value={{
          renderItem,
          classes: {},
        }}
      >
        <MenuItem {...props} />
      </MenuContext.Provider>
    )
  }

  it('should render custom item', () => {
    wrapper = mount(<Test renderItem={() => 'hello'} item={{ href: 'test' }} />)
    expect(wrapper.text()).toBe('hello')
  })

  it('should render with pageData', () => {
    wrapper = mount(<Test item={{ pageData: { test: 'test' }, href: 'test' }} />)
    expect(wrapper.find(Link).prop('pageData')).toStrictEqual({ test: 'test' })
  })
})
