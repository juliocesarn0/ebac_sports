// import { Produto as ProdutoType } from '../App'
// import Produto from '../components/Produto'

// import * as S from './styles'

// type Props = {
//   produtos: ProdutoType[]
//   favoritos: ProdutoType[]
//   adicionarAoCarrinho: (produto: ProdutoType) => void
//   favoritar: (produto: ProdutoType) => void
// }

// const ProdutosComponent = ({
//   produtos,
//   favoritos,
//   adicionarAoCarrinho,
//   favoritar
// }: Props) => {
//   const produtoEstaNosFavoritos = (produto: ProdutoType) => {
//     const produtoId = produto.id
//     const IdsDosFavoritos = favoritos.map((f) => f.id)

//     return IdsDosFavoritos.includes(produtoId)
//   }

//   return (
//     <>
//       <S.Produtos>
//         {produtos.map((produto) => (
//           <Produto
//             estaNosFavoritos={produtoEstaNosFavoritos(produto)}
//             key={produto.id}
//             produto={produto}
//             favoritar={favoritar}
//             aoComprar={adicionarAoCarrinho}
//           />
//         ))}
//       </S.Produtos>
//     </>
//   )
// }

// export default ProdutosComponent

import { useSelector } from 'react-redux'
import { RootState } from '../store'
import Produto from '../components/Produto'
import * as S from './styles'

const ProdutosComponent = () => {
  const produtos = useSelector((state: RootState) => state.produtos)

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
