import { useState } from 'react'
import { useTitle } from 'react-use'

import { CreateAppointment } from "./CreateAppointment"

import { validatorCreateAppointment } from '../../utils/validation/validatorCreateAppointment'
import { setSuccessFor } from '../../utils/validation/setSuccessFor'
import { createAppointment } from "../../../apiService"



export const CreateAppointmentContainer = () => {

  useTitle("Make an appointment")

  const [selectOccupationValue, setSelectOccupationValue] = useState("")
  const [selectDoctorNameValue, setSelectDoctorNameValue] = useState("")

  const [reasonVisitValue, setReasonVisitValue] = useState("")
  const [noteValue, setNoteValue] = useState("")

  const [date, setDate] = useState(new Date())

  const [selectedRadioButton, setSelectedRadioButton] = useState("time-1-pm")

  const [disabledUI, setDisabledUI] = useState(true)


  const [defaultErrorMessage, setDefaultErrorMessage] = useState(
    {
      "reason-visit": "Error message",
      "occupation": "Error message",
      "doctor-name": "Error message",
    }
  )
  const [errorMessage, setErrorMessage] = useState(
    {
      "reason-visit": "",
      "occupation": "",
      "doctor-name": "",
    }
  )
  const [choiceIdInput, setChoiceIdInput] = useState("")
  const [errorIlluminationInput, setErrorIlluminationInput] = useState(
    {
      "reason-visit": "",
      "occupation": "",
      "doctor-name": "",
    }
  )

  const onInputChoice = (e) => {
    validatorCreateAppointment(e.target.id, reasonVisitValue, selectOccupationValue, selectDoctorNameValue, setDefaultErrorMessage, setErrorMessage, setChoiceIdInput, setErrorIlluminationInput, setDisabledUI)
  }

  const onValueChange = (e) => {
    switch (e.target.id) {
      case "reason-visit":
        setReasonVisitValue(e.target.value)
        setSuccessFor(setErrorIlluminationInput, setErrorMessage, setDefaultErrorMessage, e.target.id)
        break

      case "note":
        setNoteValue(e.target.value)
        break

      default:
        break
    }
  }

  const onSelectRadioButtonChange = (e) => {
    setSelectedRadioButton(e.target.id)
  }

  const sendFormData = (e) => {
    e.preventDefault()

    let errorChecked = Object.values(errorMessage).includes(true)

    if (!errorChecked && selectOccupationValue && selectDoctorNameValue && reasonVisitValue && selectedRadioButton) {
      let formData = {
        occupation: selectOccupationValue["label"],
        doctorName: selectDoctorNameValue["label"],
        reasonVisit: reasonVisitValue,
        note: noteValue,
        date: date.toDateString(),
        time: selectedRadioButton,
      }

      createAppointment(formData.occupation, formData.doctorName, formData.reasonVisit, formData.note, formData.date, formData.time)
    }
  }

  return <CreateAppointment
    sendFormData={sendFormData}
    selectOccupationValue={selectOccupationValue}
    setSelectOccupationValue={setSelectOccupationValue}
    onInputChoice={onInputChoice}
    errorIlluminationInput={errorIlluminationInput}
    errorMessage={errorMessage}
    defaultErrorMessage={defaultErrorMessage}
    selectDoctorNameValue={selectDoctorNameValue}
    setSelectDoctorNameValue={setSelectDoctorNameValue}
    reasonVisitValue={reasonVisitValue}
    onValueChange={onValueChange}
    disabledUI={disabledUI}
    noteValue={noteValue}
    date={date}
    setDate={setDate}
    selectedRadioButton={selectedRadioButton}
    onSelectRadioButtonChange={onSelectRadioButtonChange}
  />
}