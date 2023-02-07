import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './style'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque a sua transação" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
