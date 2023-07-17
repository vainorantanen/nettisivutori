/**
 * @jest-environment jsdom
 */

import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import LoginForm from '../src/components/LoginForm'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders login form', () => {
  render(
    <Router>
      <LoginForm />
    </Router>
  )

  const username = screen.getByLabelText('Username')
  const password = screen.getByLabelText('Password')

  expect(username).toBeDefined()
  expect(password).toBeDefined()
})
