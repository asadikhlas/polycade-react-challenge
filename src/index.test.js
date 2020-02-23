import React from 'react'
import { render } from '@testing-library/react'
import App from './Routes'

test('renders App', () => {
  const { getByText } = render(<App />)
  const loadingElement = getByText(/loading/i)
  expect(loadingElement).toBeInTheDocument()
})
