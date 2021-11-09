import { Patient } from './../../modules/components/Patient'
import { LayoutDoctorMyPatients } from './../../modules/layouts/LayoutDoctorView/LayoutDoctorMyPatients'
import { useTitle } from 'react-use'

import patientAvatar1 from "../../assets/doctorView/patient-avatar1.png"
import patientAvatar2 from "../../assets/doctorView/patient-avatar2.png"
import patientAvatar3 from "../../assets/doctorView/patient-avatar3.png"
import patientAvatar4 from "../../assets/doctorView/patient-avatar4.png"
import patientAvatar5 from "../../assets/doctorView/patient-avatar5.png"
import patientAvatar6 from "../../assets/doctorView/patient-avatar6.png"
import patientAvatar7 from "../../assets/doctorView/patient-avatar7.png"
import patientAvatar8 from "../../assets/doctorView/patient-avatar8.png"
import patientAvatar9 from "../../assets/doctorView/patient-avatar9.png"
import patientAvatar10 from "../../assets/doctorView/patient-avatar10.png"
import patientAvatar11 from "../../assets/doctorView/patient-avatar11.png"
import patientAvatar12 from "../../assets/doctorView/patient-avatar12.png"
import statusIndicator2 from "../../assets/doctorView/status-indicator2.png"
import statusIndicator3 from "../../assets/doctorView/status-indicator3.png"
import clipboardBlank from "../../assets/doctorView/clipboard-blank.png"




export const MyPatients = () => {

  useTitle("Patients")

  return (
    <LayoutDoctorMyPatients headerArticlePatients="My Patients">
      <Patient
        avatar={patientAvatar1}
        clipboardBlank={clipboardBlank}
        patientName="Jane Cooper" />
      <Patient
        avatar={patientAvatar2}
        clipboardBlank={clipboardBlank}
        patientName="Eleanor Pena" />
      <Patient
        avatar={patientAvatar3}
        clipboardBlank={clipboardBlank}
        patientName="Devon Lane" />
      <Patient
        avatar={patientAvatar4}
        clipboardBlank={clipboardBlank}
        patientName="Jenny Wilson" />
      <Patient
        avatar={patientAvatar5}
        clipboardBlank={clipboardBlank}
        patientName="Courtney Henry" />
      <Patient
        avatar={patientAvatar6}
        clipboardBlank={clipboardBlank}
        patientName="Arlene McCoy"
        statusIndicator={statusIndicator2}
        statusAppointment="Appointment is canceled" />
      <Patient
        avatar={patientAvatar7}
        clipboardBlank={clipboardBlank}
        patientName="Annette Black"
        statusIndicator={statusIndicator3}
        statusAppointment="Waiting for confirmation..." />
      <Patient
        avatar={patientAvatar8}
        clipboardBlank={clipboardBlank}
        patientName="Cameron Williamson" />
      <Patient
        avatar={patientAvatar9}
        clipboardBlank={clipboardBlank}
        patientName="Bessie Cooper" />
      <Patient
        avatar={patientAvatar10}
        clipboardBlank={clipboardBlank}
        patientName="Savannah Nguyen" />
      <Patient
        avatar={patientAvatar11}
        clipboardBlank={clipboardBlank}
        patientName="Esther Howard" />
      <Patient
        avatar={patientAvatar12}
        clipboardBlank={clipboardBlank}
        patientName="Jerome Bell" />
    </LayoutDoctorMyPatients>
  )
}