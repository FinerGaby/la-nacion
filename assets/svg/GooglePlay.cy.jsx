import React from 'react'
import { GooglePlay } from './GooglePlay'

describe('<GooglePlay />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GooglePlay />)
  })
})