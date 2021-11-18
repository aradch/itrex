import { SidebarImageLogin } from "../../components/Login/SidebarImageLogin/SidebarImageLogin"
import { HeaderFormSignUpIn } from '../../components/Login/HeaderFormSignUpIn/HeaderFormSignUpIn'
import { FooterFormSignUpIn } from '../../components/Login/FooterFormSignUpIn/FooterFormSignUpIn'

import { Wrapper, Article, Form, WrapperForgotPassword, StyledColorNavLink } from './styles/signIn'



export const LayoutSignIn = ({
  children,
  headerText,
  sendFormData,
  redirectUrlForgotPassword,
  forgotPasswordText,
  redirectUrl,
  redirectText,
  footerContent }) => {

  return (
    <>
      <SidebarImageLogin />
      <Wrapper>
        <HeaderFormSignUpIn
          marginTopDesktop="264px"
          marginTopMobile="10%"
        >
          {headerText}
        </HeaderFormSignUpIn>

        <Article>
          <Form onSubmit={sendFormData}>{children}</Form>
          <WrapperForgotPassword>
            <StyledColorNavLink to={redirectUrlForgotPassword}>{forgotPasswordText}</StyledColorNavLink>
          </WrapperForgotPassword>
        </Article>

        <FooterFormSignUpIn
          footerContent={footerContent}
          redirectUrl={redirectUrl}
          redirectText={redirectText}
          footerSignIn
        />
      </Wrapper>
    </>
  )
}