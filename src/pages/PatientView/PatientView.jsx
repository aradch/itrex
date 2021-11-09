import { LayoutPatientView } from './../../modules/layouts/LayoutPatientView/LayoutPatientView'
import { Patient } from './../../modules/components/Patient'
import { useTitle } from 'react-use'

import avatar1 from "../../assets/patientView/avatar1.png"
import imgHeart from "../../assets/patientView/heart.png"
import imgPlus from "../../assets/patientView/plus.png"




export const PatientView = () => {

  useTitle("Appointments")


  return (
    <LayoutPatientView
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
    </LayoutPatientView>
  )
}