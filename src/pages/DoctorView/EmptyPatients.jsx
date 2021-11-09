import { LayoutDoctorEmptyPatients } from './../../modules/layouts/LayoutDoctorView/LayoutDoctorEmptyPatients'
import { useTitle } from 'react-use'



export const EmptyPatients = () => {

  useTitle("Patients")

  return (
    <LayoutDoctorEmptyPatients headerArticlePatients="My Patients">
      You have no patients yet. <br /> To create a patient profile, please contact
      your administrator.
    </LayoutDoctorEmptyPatients>
  )
}