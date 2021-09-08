import { useState } from 'react'
import Input from '../Input'
import Button from '../Button'

const Form = ({ onSubmit }) => {
  const [search, setSearch] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit && onSubmit(search)
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input placehoder='Search character' name='search' value={search} onChange={({ target }) => setSearch(target.value)} />
      <Button>
        Submit
      </Button>
    </form>
  )
}

export default Form
