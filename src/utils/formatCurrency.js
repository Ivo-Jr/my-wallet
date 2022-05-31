const formatedCurrency = (current) => {
  return current.toLocaleString(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL'
    }
  )
}

export default formatedCurrency;