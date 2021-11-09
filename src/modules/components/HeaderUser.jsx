import styled from "styled-components"

import logo from "../../assets/doctorView/logo.png"
import indicator from "../../assets/doctorView/indicator.png"


const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 80px;

  @media (min-width: 0) and (max-width: 599px) {
    height: 10%;
  }
`
const Logo = styled.img`
  margin: 24px 0 24px 64px;

  @media (min-width: 0) and (max-width: 599px) {
    margin: 20px 0 20px 24px;
  }
`
const BlockLoginAccount = styled.div`
  display: grid;
  grid-template-areas:
    "name avatar"
    "profession avatar";
  grid-template-rows: 23px 21px;
  margin-right: 64px;
  text-align: right;
  align-content: center;

  @media (min-width: 0) and (max-width: 599px) {
    margin-right: 24px;
  }
`
const UserName = styled.p`
  grid-area: name;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.2px;
  color: #202225;

  @media (min-width: 0) and (max-width: 599px) {
    position: absolute;
    left: -9999999px;
  }
`
const TypeUser = styled.p`
  grid-area: profession;
  font-size: 13px;
  font-weight: 500;
  color: #a1abc9;

  @media (min-width: 0) and (max-width: 599px) {
    position: absolute;
    left: -9999999px;
  }
`
const Avatar = styled.img`
  grid-area: avatar;
  margin-left: 16px;
  margin-top: 2px;
`
const StatusIndicator = styled.img`
  position: absolute;
  right: 61px;
  top: 17px;

  @media (min-width: 0) and (max-width: 599px) {
    right: 21px;
    top: 13px;
  }
`


export const HeaderUser = ({ userName, typeUser, userAvatar }) => {

  return (
    <Wrapper>
      <Logo src={logo} alt="Logo 'PALM CLINIC'" />
      <BlockLoginAccount>
        <UserName>{userName}</UserName>
        <TypeUser>{typeUser}</TypeUser>
        <Avatar src={userAvatar} alt="User avatar" />
        <StatusIndicator src={indicator} alt="User status" />
      </BlockLoginAccount>
    </Wrapper>
  )
}