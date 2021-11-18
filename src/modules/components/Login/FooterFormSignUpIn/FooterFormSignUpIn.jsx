import { FooterForm, FooterText, StyledNavLink } from './styles/footerFormSignUpIn'


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