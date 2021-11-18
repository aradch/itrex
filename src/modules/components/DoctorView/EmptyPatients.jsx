import { useTitle } from 'react-use'

import { LayoutDoctorEmptyPatients } from './../../layouts/LayoutDoctorView/LayoutDoctorEmptyPatients'



export const EmptyPatients = () => {

  useTitle("Patients")

  return (
    <LayoutDoctorEmptyPatients headerArticlePatients="My Patients">
      You have no patients yet. <br /> To create a patient profile, please contact
      your administrator.
    </LayoutDoctorEmptyPatients>
  )
}