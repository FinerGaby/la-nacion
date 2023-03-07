import React from 'react'
import { AppStore } from './AppStore'

describe('<AppStore />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AppStore />)
  })
})