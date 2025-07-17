import { useEffect } from 'react'
import { useAppDispatch } from './store/hooks'

import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { fetchProdutos } from './store/reducers/produtos'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProdutos())
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </>
  )
}

export default App
