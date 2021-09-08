import { useMemo } from 'react'
import FormMemo from '../components/Form/FormMemo'
import ListMemo from '../components/List/ListMemo'
import useGetCharacters from '../useGetCharacters'
const Container = () => {
  const { data, onCallbackSubmit, firstCall } = useGetCharacters()

  const momorizeNames = useMemo(() => {
    console.log(firstCall)
    return firstCall.map(({ name }) => name).join('-')
  }, [firstCall])

  return (
    <div>
      <FormMemo onSubmit={onCallbackSubmit} />
      <div style={{ padding: 10 }}>{momorizeNames}</div>
      <ListMemo data={data} />
    </div>
  )
}

export default Container
