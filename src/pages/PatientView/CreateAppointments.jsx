import { LayoutPatientCreateAppointments } from "../../modules/layouts/LayoutPatientView/LayoutPatientCreateAppointments"
import styled from 'styled-components'
import { useState } from 'react'
import { validatorCreateAppointment } from './../../modules/utils/validation/validatorCreateAppointment'
import { setSuccessFor } from './../../modules/utils/validation/setSuccessFor'
import { createAppointment } from "../../apiService"
import { ArticleCreateAppointment } from "../../modules/components/ArticleCreateAppointment"
import { BlockSelectOption } from "../../modules/components/BlockSelectOption"
import { FormInputBlock } from "../../modules/components/FormInputBlock"
import { CalendarForAppointment } from "../../modules/components/CalendarForAppointment"
import { BlockRadioButton } from "../../modules/components/BlockRadioButton"
import { Button } from "../../components/Button"
import { useTitle } from 'react-use'

import imgNumberAction from "../../assets/patientView/numberOneInCircle.svg"
import imgNumberAction2 from "../../assets/patientView/numberTwoInCircle.svg"
import imgNumberAction3 from "../../assets/patientView/numberThreeInCircle.svg"



const WrapperBlockRadioButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`
const WrapperFieldsAppointment = styled.div`
  margin: 23px 48px 0 0;

  @media (min-width: 600px) and (max-width: 1365px) {
    margin: 23px 18px 0 0;
  }
`
const WrapperButton = styled.div`
  display: flex;
  justify-content: end;
`



export const CreateAppointments = () => {

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

  return (
    <LayoutPatientCreateAppointments
      goBack="Doctors"
      currentPage="Make an appointment"
      header="Make an appointment"
      sendFormData={sendFormData}
    >
      <ArticleCreateAppointment
        imgNumberAction={imgNumberAction}
        imgAlt="three"
        actionName="Select a doctor and define the reason of your visit"
        styledArticleSelectOption="ok"
      >
        <WrapperFieldsAppointment>
          <BlockSelectOption
            id="occupation"
            labelText="Occupation"
            errorPadding="7px 0 0 0"
            selectedOption={selectOccupationValue}
            setSelectedOption={setSelectOccupationValue}
            selectOnBlur={onInputChoice}
            errorIlluminationInput={errorIlluminationInput["occupation"]}
            showErrorMessage={errorMessage["occupation"]}
            textErrorMessage={defaultErrorMessage["occupation"]}
          />
          <BlockSelectOption
            id="doctor-name"
            labelText="Doctor’s Name"
            errorPadding="7px 0 0 0"
            selectedOption={selectDoctorNameValue}
            setSelectedOption={setSelectDoctorNameValue}
            selectOnBlur={onInputChoice}
            errorIlluminationInput={errorIlluminationInput["doctor-name"]}
            showErrorMessage={errorMessage["doctor-name"]}
            textErrorMessage={defaultErrorMessage["doctor-name"]}
          />
          <FormInputBlock
            showLabel="true"
            labelText="Reason for the visit"
            inputId="reason-visit"
            inputPlaceholder="Indicate the reason for the visit"
            inputValue={reasonVisitValue}
            inputOnChange={onValueChange}
            inputOnBlur={onInputChoice}
            inputWidth="100%"
            inputMargin="8px 96px 0 0"
            inputPadding="16px 23px"
            marginBottom="24px"
            errorPadding="7px 0 0 0"
            errorIlluminationInput={errorIlluminationInput["reason-visit"]}
            showErrorMessage={errorMessage["reason-visit"]}
            textErrorMessage={defaultErrorMessage["reason-visit"]}
            disabledUI={disabledUI}
            required={true}
          />
          <FormInputBlock
            showLabel="true"
            labelText="Note"
            inputId="note"
            inputPlaceholder="Leave a note if needed"
            inputValue={noteValue}
            inputOnChange={onValueChange}
            inputWidth="100%"
            inputMargin="8px 96px 0 0"
            inputPadding="16px 23px"
            marginBottom="24px"
            disabledUI={disabledUI}
            required={false}
            maxLength="100"
          />
        </WrapperFieldsAppointment>
      </ArticleCreateAppointment>

      <ArticleCreateAppointment
        imgNumberAction={imgNumberAction2}
        imgAlt="one"
        actionName="Choose a day for an appointment"
        styledArticleCalendar="ok"
        disabledUI={disabledUI}
      >
        <CalendarForAppointment date={date} setDate={setDate} />
      </ArticleCreateAppointment>

      <ArticleCreateAppointment
        imgNumberAction={imgNumberAction3}
        imgAlt="two"
        actionName="Select an available timeslot"
        styledArticleRadioButton="ok"
        disabledUI={disabledUI}
      >
        <WrapperBlockRadioButton>
          <BlockRadioButton
            id="time-12-am"
            labelTextTime="12:00 am"
            value="12:00 am"
            selected={selectedRadioButton}
            onSelectedChange={onSelectRadioButtonChange}
            required={true}
          />
          <BlockRadioButton
            id="time-1-pm"
            labelTextTime="1:00 pm"
            value="1:00 pm"
            selected={selectedRadioButton}
            onSelectedChange={onSelectRadioButtonChange}
          />
          <BlockRadioButton
            id="time-2-pm"
            labelTextTime="2:00 pm"
            value="2:00 pm"
            selected={selectedRadioButton}
            onSelectedChange={onSelectRadioButtonChange}
            disabled
          />
          <BlockRadioButton
            id="time-3-pm"
            labelTextTime="3:00 pm"
            value="3:00 pm"
            selected={selectedRadioButton}
            onSelectedChange={onSelectRadioButtonChange}
          />
          <BlockRadioButton
            id="time-4-pm"
            labelTextTime="4:00 pm"
            value="4:00 pm"
            selected={selectedRadioButton}
            onSelectedChange={onSelectRadioButtonChange}
          />
          <BlockRadioButton
            id="time-5-pm"
            labelTextTime="5:00 pm"
            value="5:00 pm"
            selected={selectedRadioButton}
            onSelectedChange={onSelectRadioButtonChange}
          />
          <BlockRadioButton
            id="time-6-pm"
            labelTextTime="6:00 pm"
            value="6:00 pm"
            selected={selectedRadioButton}
            onSelectedChange={onSelectRadioButtonChange}
            disabled
          />
          <BlockRadioButton
            id="time-7-pm"
            labelTextTime="7:00 pm"
            value="7:00 pm"
            selected={selectedRadioButton}
            onSelectedChange={onSelectRadioButtonChange}
          />
          <BlockRadioButton
            id="time-8-pm"
            labelTextTime="8:00 pm"
            value="8:00 pm"
            selected={selectedRadioButton}
            onSelectedChange={onSelectRadioButtonChange}
          />
          <BlockRadioButton
            id="time-9-pm"
            labelTextTime="9:00 pm"
            value="9:00 pm"
            selected={selectedRadioButton}
            onSelectedChange={onSelectRadioButtonChange}
          />
        </WrapperBlockRadioButton>
        <WrapperButton>
          <Button
            padding="16px 49px"
            margin="37px 0 0 0"
            disabledUI={disabledUI}
          >
            Submit
          </Button>
        </WrapperButton>
      </ArticleCreateAppointment>
    </LayoutPatientCreateAppointments>
  )
}