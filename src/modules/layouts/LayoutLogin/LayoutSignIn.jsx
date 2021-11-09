import styled from "styled-components"
import { NavLink } from 'react-router-dom'
import { SidebarImageLogin } from "../../components/SidebarImageLogin"
import { HeaderFormSignUpIn } from './../../components/HeaderFormSignUpIn'
import { FooterFormSignUpIn } from './../../components/FooterFormSignUpIn';


const Main = styled.main`
  min-height: 100vh;
  display: flex;

  @media (min-width: 0) and (max-width: 599px) {
    flex-wrap: wrap;
  }
`

const Wrapper = styled.section`
  width: 560px;
  background-color: #f9faff;

  @media (min-width: 0) and (max-width: 599px) {
    width: 100%;
    margin-top: -45%;
    border-radius: 24px 24px 0px 0px;
  }
`

const Article = styled.article`
  height: 625px;
  padding-bottom: 265px;

  @media (min-width: 0) and (max-width: 599px) {
    height: 408px;
    padding-bottom: 26px;
  }
`

const Form = styled.form`

`

const WrapperForgotPassword = styled.div`
  margin: 32px 330px 0 96px;
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;

  @media (min-width: 0) and (max-width: 599px) {
    margin: 10% 0 0 10%;
  }
`

const StyledColorNavLink = styled(NavLink)`
  color: #7297ff;
`


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
    <Main>
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
    </Main>
  )
}