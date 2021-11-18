import styled, { css } from 'styled-components'


export const Wrapper = styled.div`
  height: 89px;
  margin-bottom: 31px;
`
export const Label = styled.label`
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
`
export const ErrorMessage = styled.p`
  position: absolute;
  left: -9999999px;

  ${({ showErrorMessage }) => showErrorMessage && css`
    position: static; 
    padding: ${({ errorPadding }) => errorPadding || " 7px 96px 0 96px"};
    color: #f6657f;
    font-size: 13px;
    letter-spacing: -0.24px;

    ${'' /* @media (min-width: 0) and (max-width: 599px) {
      padding: 5% 10% 0 10%;
      line-height: 130%;
    } */}
  `
  }
`