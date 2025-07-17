export const api = {
  getProdutos: async () => {
    const res = await fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
    return res.json()
  }
}
