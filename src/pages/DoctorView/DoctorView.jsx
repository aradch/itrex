import { DoctorViewRoutes } from './../../routes/DoctorViewRoutes'
import { HeaderUser } from '../../modules/components/DoctorView/HeaderUser/HeaderUser'

import { Footer, Main } from './styles/doctorView'

import userAvatar from "../../assets/doctorView/avatar.png"



export const DoctorView = () => {
  return (
    <Main>
      <HeaderUser userName="Miranda Nelson" typeUser="Doctor" userAvatar={userAvatar} />
      <DoctorViewRoutes />
      <Footer />
    </Main>
  )
}