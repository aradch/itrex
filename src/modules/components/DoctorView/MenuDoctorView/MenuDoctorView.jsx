import { MenuItem } from "../MenuItem/MenuItem"

import { Navigation, List } from './styles/menuDoctorView'


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