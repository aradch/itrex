import { PatientInfo, Wrappper, Avatar, PatientName, StatusIndicator, StatusAppointment, PatientDescriptionAppointment, ImageClock, Date, ImageBlank, Text } from './styles/patient'

import indicator from "../../../../assets/doctorView/status-indicator1.png"
import clockThree from "../../../../assets/doctorView/clock-three.png"



export const Patient = ({
  avatar,
  patientName,
  statusIndicator = indicator,
  statusAppointment = "Appointment is confirmed",
  dateAppointment = "Thu Sept 10, 2021 4 pm - 5 pm",
  textAppointment = "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
  typeUser,
  clipboardBlank }) => {


  return (
    <Wrappper>

      <PatientInfo typeUser={typeUser}>
        <Avatar src={avatar} alt="Patient avatar" />
        <PatientName typeUser={typeUser}>{patientName}</PatientName>
        <StatusIndicator
          typeUser={typeUser}
          src={statusIndicator}
          alt="Patient status" />
        <StatusAppointment typeUser={typeUser}>{statusAppointment}</StatusAppointment>
      </PatientInfo>

      <PatientDescriptionAppointment typeUser={typeUser}>
        <ImageClock
          src={clockThree}
          alt="Clock" />
        <Date>{dateAppointment}</Date>
        <ImageBlank
          typeUser={typeUser}
          src={clipboardBlank}
          alt="Blank" />
        <Text typeUser={typeUser}>{textAppointment}</Text>
      </PatientDescriptionAppointment>

    </Wrappper>
  )
}