import { useTitle } from 'react-use'

import { Patient } from '../DoctorView/Patient/Patient'
import { LayoutPatientMyAppointments } from './../../layouts/LayoutPatientView/LayoutPatientMyAppointments'

import avatar1 from "../../../assets/patientView/avatar1.png"
import imgHeart from "../../../assets/patientView/heart.png"
import imgPlus from "../../../assets/patientView/plus.png"



export const MyAppointments = () => {

  useTitle("Appointments")

  return (
    <LayoutPatientMyAppointments
      headerArticleAppointments="My Appointments"
      buttonText="Create an appointment"
      imgPlus={imgPlus}
    >
      <Patient
        typeUser="Patient"
        avatar={avatar1}
        patientName="Joe Milton"
        statusAppointment="Therapist"
        clipboardBlank={imgHeart}
        textAppointment="Headache, pant" />
      <Patient
        typeUser="Patient"
        avatar={avatar1}
        patientName="Joe Milton"
        statusAppointment="Therapist"
        clipboardBlank={imgHeart}
        textAppointment="Headache, pant" />
      <Patient
        typeUser="Patient"
        avatar={avatar1}
        patientName="Joe Milton"
        statusAppointment="Therapist"
        clipboardBlank={imgHeart}
        textAppointment="Headache, pant" />
    </LayoutPatientMyAppointments>
  )
}