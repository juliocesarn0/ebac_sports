// import { Produto as ProdutoType } from '../../App'
// import * as S from './styles'

// type Props = {
//   produto: ProdutoType
//   aoComprar: (produto: ProdutoType) => void
//   favoritar: (produto: ProdutoType) => void
//   estaNosFavoritos: boolean
// }

// export const paraReal = (valor: number) =>
//   new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
//     valor
//   )

// const ProdutoComponent = ({
//   produto,
//   aoComprar,
//   favoritar,
//   estaNosFavoritos
// }: Props) => {
//   return (
//     <S.Produto>
//       <S.Capa>
//         <img src={produto.imagem} alt={produto.nome} />
//       </S.Capa>
//       <S.Titulo>{produto.nome}</S.Titulo>
//       <S.Prices>
//         <strong>{paraReal(produto.preco)}</strong>
//       </S.Prices>
//       <S.BtnComprar onClick={() => favoritar(produto)} type="button">
//         {estaNosFavoritos
//           ? '- Remover dos favoritos'
//           : '+ Adicionar aos favoritos'}
//       </S.BtnComprar>
//       <S.BtnComprar onClick={() => aoComprar(produto)} type="button">
//         Adicionar ao carrinho
//       </S.BtnComprar>
//     </S.Produto>
//   )
// }

// export default ProdutoComponent

import * as S from './styles'
import { Produto } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { toggleFavorito } from '../../store/reducers/favoritos'
import { adicionarAoCarrinho } from '../../store/reducers/carrinho'

type Props = {
  produto: Produto
}

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favoritos)

  const estaNosFavoritos = favoritos.some((p) => p.id === produto.id)

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => dispatch(toggleFavorito(produto))}
        type="button"
      >
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => dispatch(adicionarAoCarrinho(produto))}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)

export default ProdutoComponent
