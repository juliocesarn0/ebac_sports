import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types'

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: [] as Produto[],
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const existe = state.find((p) => p.id === action.payload.id)
      if (!existe) state.push(action.payload)
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
