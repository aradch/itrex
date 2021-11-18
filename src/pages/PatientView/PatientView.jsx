import { PatientViewRoutes } from './../../routes/PatientViewRoutes'
import { HeaderUser } from '../../modules/components/DoctorView/HeaderUser/HeaderUser'

import { Footer, Main } from './styles/patientView'

import userAvatar from "../../assets/patientView/userAvatar.png"



export const PatientView = () => {
  return (
    <Main>
      <HeaderUser userName="Larry Prinston" typeUser="Patient" userAvatar={userAvatar} />
      <PatientViewRoutes />
      <Footer />
    </Main>
  )
}