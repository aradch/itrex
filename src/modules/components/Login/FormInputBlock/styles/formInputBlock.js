import styled, { css } from "styled-components"


export const StyledFormInputBlock = styled.div`
  position: relative;
  height: 96px;
  margin-bottom: ${({ marginBottom }) => marginBottom};

  ${({ disabledUI }) => disabledUI && css`
    pointer-events: none;
  `}

  @media (min-width: 0) and (max-width: 599px) {
    height: auto;
  }
`

export const Label = styled.label`
  position: absolute;
  left: -99999999px;

  ${({ showLabel }) => showLabel && css`
    position: static;
    font-weight: 600;
    font-size: 13px;
    line-height: 130%;
    letter-spacing: 0.1px;
  `}
`

export const WrapperShowHidePassword = styled.div`
  position: relative;
`
export const ShowHidePassword = styled.button`
  position: absolute;
  bottom: 15px;
  left: 417px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: none;
  background: url(${({ imageUrlShowHidePassword }) => imageUrlShowHidePassword}) no-repeat;

  @media (min-width: 0) and (max-width: 599px) {
    bottom: 7px;
    left: calc(90% - 39px);
  }
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

    @media (min-width: 0) and (max-width: 599px) {
      padding: 5% 10% 0 10%;
      line-height: 130%;
    }
  `
  }
`