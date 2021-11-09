import styled, { css } from "styled-components"

import sidebarBgImage from "../../assets/login/bg.png"

const SidebarImage = styled.figure`
  width: 100%;
  background: url(${sidebarBgImage}) no-repeat;
  background-size: cover;

  @media (min-width: 0) and (max-width: 599px) {
    min-height: 26.3vmax;

    ${({ backgroundSize }) => backgroundSize && css`
      background-size: contain;
    `}
  }
`
export const SidebarImageLogin = (props) => {
  return <SidebarImage {...props} />
}