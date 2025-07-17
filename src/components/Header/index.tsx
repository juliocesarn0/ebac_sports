// import * as S from './styles'

// import { Produto } from '../../App'

// import cesta from '../../assets/cesta.png'
// import { paraReal } from '../Produto'

// type Props = {
//   itensNoCarrinho: Produto[]
//   favoritos: Produto[]
// }

// const Header = ({ itensNoCarrinho, favoritos }: Props) => {
//   const valorTotal = itensNoCarrinho.reduce((acc, item) => {
//     acc += item.preco
//     return acc
//   }, 0)

//   return (
//     <S.Header>
//       <h1>EBAC Sports</h1>
//       <div>
//         <span>{favoritos.length} favoritos</span>
//         <img src={cesta} />
//         <span>
//           {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
//         </span>
//       </div>
//     </S.Header>
//   )
// }

// export default Header

import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const Header = () => {
  const carrinho = useSelector((state: RootState) => state.carrinho)
  const favoritos = useSelector((state: RootState) => state.favoritos)

  const valorTotal = carrinho.reduce((acc, item) => acc + item.preco, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {carrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
