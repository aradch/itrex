import { SidebarImageLogin } from "../../components/Login/SidebarImageLogin/SidebarImageLogin"

import { Wrapper, GeneralHeader, HeaderRestorePassword, StyledNavLink, HeaderText, Form } from './styles/restorePassword'



export const LayoutRestorePassword = ({
  children,
  generalHeaderText,
  sendFormData,
  headerContent,
  redirectUrl }) => {

  return (
    <>
      <SidebarImageLogin backgroundSize="contain" />
      <Wrapper>
        <GeneralHeader>
          <HeaderRestorePassword>
            <StyledNavLink to={redirectUrl} />
            {generalHeaderText}
          </HeaderRestorePassword>
          <HeaderText>{headerContent}</HeaderText>
        </GeneralHeader>
        <Form onSubmit={sendFormData}>{children}</Form>
      </Wrapper>
    </>
  )
}