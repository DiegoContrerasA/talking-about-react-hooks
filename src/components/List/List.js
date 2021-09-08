import './styles.css'
const List = ({ data }) => {
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

export default List
