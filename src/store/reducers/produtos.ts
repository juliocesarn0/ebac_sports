import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Produto } from '../../types'
import { api } from '../../services/api'

export const fetchProdutos = createAsyncThunk('produtos/fetch', api.getProdutos)

const produtosSlice = createSlice({
  name: 'produtos',
  initialState: [] as Produto[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProdutos.fulfilled, (_, action) => action.payload)
  }
})

export default produtosSlice.reducer
