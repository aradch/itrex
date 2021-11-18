import { Wrapper, Logo, BlockLoginAccount, UserName, TypeUser, Avatar, StatusIndicator } from './styles/headerUser'

import logo from "../../../../assets/doctorView/logo.png"
import indicator from "../../../../assets/doctorView/indicator.png"



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