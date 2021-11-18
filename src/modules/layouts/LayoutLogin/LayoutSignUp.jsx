import { SidebarImageLogin } from "../../components/Login/SidebarImageLogin/SidebarImageLogin"
import { HeaderFormSignUpIn } from '../../components/Login/HeaderFormSignUpIn/HeaderFormSignUpIn'
import { FooterFormSignUpIn } from "../../components/Login/FooterFormSignUpIn/FooterFormSignUpIn"

import { Form, Wrapper } from './styles/signUp'



export const LayoutSignUp = ({
  children,
  headerText,
  sendFormData,
  redirectUrl,
  redirectText,
  footerContent }) => {

  return (
    <>
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
    </>
  )
}