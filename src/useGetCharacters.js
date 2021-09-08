import { useCallback, useState } from 'react'

const getCharacters = (name) => {
  return window.fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
    .then((resJson) => resJson.json())
}

const useGetCharacters = () => {
  const [data, setData] = useState([])
  const [firstCall, setFirstCall] = useState([])

  const onSubmit = (search) => {
    getCharacters(search)
      .then(({ results }) => {
        setData(results)
        !firstCall.length && setFirstCall(results)
      })
  }

  const onCallbackSubmit = useCallback((search) => {
    getCharacters(search)
      .then(({ results }) => {
        setData(results)
        setFirstCall(prev => !prev.length ? results : prev)
      })
  }, [])

  return {
    data, onSubmit, onCallbackSubmit, firstCall
  }
}

export default useGetCharacters
