import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NewTransactionButton = styled.button`
  height: 50px;
  width: 150px;
  border: 0;
  border-radius: 8px;

  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;
  transition: 0.2s;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['green-300']};
  }
`
