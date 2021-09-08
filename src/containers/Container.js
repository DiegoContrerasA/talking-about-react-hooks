import Form from '../components/Form/Form'
import List from '../components/List/List'
import useGetCharacters from '../useGetCharacters'
const Container = () => {
  const { data, onSubmit, firstCall } = useGetCharacters()

  const momorizeNames = () => {
    console.log(firstCall)
    return firstCall.map(({ name }) => name).join('-')
  }

  return (
    <div>
      <Form onSubmit={onSubmit} />
      <div style={{ padding: 10 }}>{momorizeNames()}</div>
      <List data={data} />

    </div>
  )
}

export default Container
