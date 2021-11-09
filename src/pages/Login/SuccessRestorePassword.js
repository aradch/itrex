import { NavLink } from "react-router-dom"
import { useTitle } from 'react-use'
import styled from "styled-components"
import { LayoutSuccessRestorePassword } from './../../modules/layouts/LayoutLogin/LayoutSuccessRestorePassword'

const StyledNavLink = styled(NavLink)`
  color: #7297ff;
`


export const SuccessRestorePassword = () => {

  useTitle("Login | Success Restore Password")

  return (
    <LayoutSuccessRestorePassword
      generalHeaderText="Restore Password"
      redirectUrl="/login/restore-password"
    >
      An email has been sent to <StyledNavLink to="#">example@exam.com</StyledNavLink>. Check your inbox, and click the reset link provided.
    </LayoutSuccessRestorePassword>
  )

}