import { render } from '@redwoodjs/testing'

import LoggedinPage from './LoggedinPage'

describe('LoggedinPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoggedinPage />)
    }).not.toThrow()
  })
})
