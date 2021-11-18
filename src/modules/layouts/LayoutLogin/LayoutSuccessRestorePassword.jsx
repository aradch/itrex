import { SidebarImageLogin } from "../../components/Login/SidebarImageLogin/SidebarImageLogin"

import { HeaderRestorePassword, StyledNavLink, Text, Wrapper } from './styles/successRestorePassword'



export const LayoutSuccessRestorePassword = ({ children, generalHeaderText, redirectUrl }) => {
  return (
    <>
      <SidebarImageLogin backgroundSize="contain" />
      <Wrapper>
        <HeaderRestorePassword>
          <StyledNavLink to={redirectUrl} />
          {generalHeaderText}
        </HeaderRestorePassword>
        <Text>{children}</Text>
      </Wrapper>
    </>
  )
}