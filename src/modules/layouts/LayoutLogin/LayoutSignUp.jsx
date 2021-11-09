import styled from "styled-components"
import { SidebarImageLogin } from "../../components/SidebarImageLogin"
import { HeaderFormSignUpIn } from './../../components/HeaderFormSignUpIn'
import { FooterFormSignUpIn } from "../../components/FooterFormSignUpIn"


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
    margin-top: -35%;
    border-radius: 24px 24px 0px 0px;
  }
`

const Form = styled.form`
  height: 720px;
  padding-bottom: 120px;

  @media (min-width: 0) and (max-width: 599px) {
    height: 75%;
    padding-bottom: 118px;
  }
`


export const LayoutSignUp = ({
  children,
  headerText,
  sendFormData,
  redirectUrl,
  redirectText,
  footerContent }) => {

  return (
    <Main>
      <SidebarImageLogin />
      <Wrapper>
        <HeaderFormSignUpIn>{headerText}</HeaderFormSignUpIn>
        <Form onSubmit={sendFormData}>{children}</Form>
        <FooterFormSignUpIn
          footerContent={footerContent}
          redirectUrl={redirectUrl}
          redirectText={redirectText}
        />
      </Wrapper>
    </Main>
  )
}