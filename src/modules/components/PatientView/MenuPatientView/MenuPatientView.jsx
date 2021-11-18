import { MenuItem } from "../../DoctorView/MenuItem/MenuItem"

import { Navigation, List } from './styles/menuPatientView'


export const MenuPatientView = () => {
  return (
    <Navigation>
      <List>
        <MenuItem linkText="Profile" />
        <MenuItem linkText="Appointments" active />
        <MenuItem linkText="Resolutions" />
      </List>
    </Navigation>
  )
}