import { screen, render } from '@testing-library/react'
import Input from '.'

const props = {
  name: 'search', value: 'default', placehoder: 'Search', onChange: jest.fn()
}

describe('Input Component', () => {
  test('Should render with props', () => {
    render(<Input {...props} aria-label='search' />)
    const input = screen.getByLabelText(/search/i)
    expect(input).toBeInTheDocument()
  })

  test('Should change value', () => {
    render(<Input {...props} aria-label='search' />)
    const input = screen.getByRole('textbox', { name: /search/i })
    expect(input.value).toEqual('default')
  })

  test('Should dont have props', () => {
    render(<Input aria-label='search' />)
    const input = screen.getByRole('textbox', { name: /search/i })
    expect(input.value).toEqual('default')
  })
})
