import './styles.css'
const Input = ({ name, value, placehoder, onChange, type = 'text', ...props }) => {
  return <input className='input' {...{ name, value, onChange, placehoder, type, ...props }} />
}

export default Input
