import styled from "styled-components"
import { MenuItem } from "./MenuItem"


const Navigation = styled.nav`
`
const List = styled.ul`
  display: flex;
  padding: 40px 0 0 48px;

  @media (min-width: 0) and (max-width: 599px) {
    padding: 12.5% 0 0 7.4%;
  }
`

export const MenuDoctorView = () => {
  return (
    <Navigation>
      <List>
        <MenuItem linkText="Patients" active />
        <MenuItem linkText="Resolutions" />
      </List>
    </Navigation>
  )
}