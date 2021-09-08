import { memo } from 'react'
import './styles.css'
const ListMemo = ({ data }) => {
  return (
    <div className='list'>
      {data.map(({ name, id, image }) => (
        <div key={id} className='card'>
          <h3>{name}</h3>
          <img src={image} alt={name} />
        </div>
      ))}
    </div>
  )
}

export default memo(ListMemo, (prevProps, props) => {
  return ((JSON.stringify(prevProps) === JSON.stringify(props)))
})
