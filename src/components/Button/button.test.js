import { screen, render } from '@testing-library/react'
import Button from '.'

describe('Button Compoment', () => {
  test('Should render button correctly', () => {
    render(<Button>test</Button>)
    expect(screen.getByText(/test/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /test/i })).toBeInTheDocument()
  })
})
