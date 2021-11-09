import styled, { css } from "styled-components"
import { NavLink } from 'react-router-dom'

const FooterForm = styled.footer`
  display: flex;
  margin: 0 202px 80px 96px;
  font-size: 15px;
  color: #a1abc9;

  ${({ footerSignIn }) => footerSignIn && css`
    width: 270px;
    margin: 0 194px 0 96px;
    line-height: 24px;
  `}

  @media (min-width: 0) and (max-width: 599px) {
    flex-direction: column;
    margin: 0 0 0 10%;

    ${({ footerSignIn }) => footerSignIn && css`
      width: 80%;
    `}
  }
`

const FooterText = styled.p`
  ${({ footerSignIn }) => footerSignIn && css`
    width: 198px;
    letter-spacing: -0.1px;
  `}
`

const StyledNavLink = styled(NavLink)`
  letter-spacing: 0.3px;
  margin-left: 14px;
  font-weight: 600;
  color: #7297ff;

  ${({ footerSignIn }) => footerSignIn && css`
    margin-left: 12px;
  `}

  @media (min-width: 0) and (max-width: 599px) {
    margin-left: 0;
  }
`

export const FooterFormSignUpIn = ({ footerContent, redirectUrl, redirectText, footerSignIn }) => {
  return (
    <FooterForm footerSignIn={footerSignIn}>
      <FooterText footerSignIn={footerSignIn}>{footerContent}</FooterText>
      <StyledNavLink
        footerSignIn={footerSignIn}
        to={redirectUrl}
      >
        {redirectText}
      </StyledNavLink>
    </FooterForm>
  )
}