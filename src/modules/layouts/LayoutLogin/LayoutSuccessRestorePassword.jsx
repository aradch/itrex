import styled from "styled-components"
import { NavLink } from 'react-router-dom'
import { SidebarImageLogin } from "../../components/SidebarImageLogin"

import imgArrowLeft from "../../../assets/login/angle-left-b.svg"


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
    margin-top: -103.9%;
    border-radius: 24px 24px 0px 0px;
  }
`

const HeaderRestorePassword = styled.h1`
  width: 368px;
  margin: 264px 96px 0 96px;
  height: 32px;
  line-height: 31.4px;
  letter-spacing: 0.4px;
  color: #202225;

  @media (min-width: 0) and (max-width: 599px) {
    width: 83%;
    height: auto;
    font-size: 125%;
    margin: 10% 0 0 10%;
  }
`
const Text = styled.p`
  width: 368px;
  margin: 32px 96px 0 96px;
  font-size: 15px;
  line-height: 19.5px;
  color: #a1abc9;

  @media (min-width: 0) and (max-width: 599px) {
    width: 83%;
    margin: 8% 0 0 10%;
    letter-spacing: 0.2px;
    font-size: 92%;
  }
`

const StyledNavLink = styled(NavLink)`
  content: url(${imgArrowLeft});
  margin-right: 16px;
  vertical-align: -4px;

  @media (min-width: 0) and (max-width: 599px) {
    vertical-align: -6px;
  }
`


export const LayoutSuccessRestorePassword = ({ children, generalHeaderText, redirectUrl }) => {
  return (
    <Main>
      <SidebarImageLogin backgroundSize="contain" />
      <Wrapper>
        <HeaderRestorePassword>
          <StyledNavLink to={redirectUrl} />
          {generalHeaderText}
        </HeaderRestorePassword>
        <Text>{children}</Text>
      </Wrapper>
    </Main>
  )
}