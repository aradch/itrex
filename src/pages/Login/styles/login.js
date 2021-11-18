import styled from 'styled-components'


export const Main = styled.main`
  min-height: 100vh;
  display: flex;

  @media (min-width: 0) and (max-width: 599px) {
    flex-wrap: wrap;
  }
`