import { ArticleCreateAppointment } from "./ArticleCreateAppointment/ArticleCreateAppointment"
import { BlockSelectOption } from "./BlockSelectOption/BlockSelectOption"
import { FormInputBlock } from "../Login/FormInputBlock/FormInputBlock"
import { CalendarForAppointment } from "./CalendarForAppointment/CalendarForAppointment"
import { BlockRadioButton } from "./BlockRadioButton/BlockRadioButton"
import { Button } from "../../../components/Button/Button"
import { LayoutPatientCreateAppointments } from "../../layouts/LayoutPatientView/LayoutPatientCreateAppointments"

import { arrayRadioButtonData } from './../../constants/radioButton'

import { WrapperBlockRadioButton, WrapperButton, WrapperFieldsAppointment } from "./styles/createAppointment"

import imgNumberAction from "../../../assets/patientView/numberOneInCircle.svg"
import imgNumberAction2 from "../../../assets/patientView/numberTwoInCircle.svg"
import imgNumberAction3 from "../../../assets/patientView/numberThreeInCircle.svg"




export const CreateAppointment = (props) => {

  return (
    <LayoutPatientCreateAppointments
      goBack="Doctors"
      currentPage="Make an appointment"
      header="Make an appointment"
      sendFormData={props.sendFormData}
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
            selectedOption={props.selectOccupationValue}
            setSelectedOption={props.setSelectOccupationValue}
            selectOnBlur={props.onInputChoice}
            errorIlluminationInput={props.errorIlluminationInput["occupation"]}
            showErrorMessage={props.errorMessage["occupation"]}
            textErrorMessage={props.defaultErrorMessage["occupation"]}
          />
          <BlockSelectOption
            id="doctor-name"
            labelText="Doctor’s Name"
            errorPadding="7px 0 0 0"
            selectedOption={props.selectDoctorNameValue}
            setSelectedOption={props.setSelectDoctorNameValue}
            selectOnBlur={props.onInputChoice}
            errorIlluminationInput={props.errorIlluminationInput["doctor-name"]}
            showErrorMessage={props.errorMessage["doctor-name"]}
            textErrorMessage={props.defaultErrorMessage["doctor-name"]}
          />
          <FormInputBlock
            showLabel="true"
            labelText="Reason for the visit"
            inputId="reason-visit"
            inputPlaceholder="Indicate the reason for the visit"
            inputValue={props.reasonVisitValue}
            inputOnChange={props.onValueChange}
            inputOnBlur={props.onInputChoice}
            inputWidth="100%"
            inputMargin="8px 96px 0 0"
            inputPadding="16px 23px"
            marginBottom="24px"
            errorPadding="7px 0 0 0"
            errorIlluminationInput={props.errorIlluminationInput["reason-visit"]}
            showErrorMessage={props.errorMessage["reason-visit"]}
            textErrorMessage={props.defaultErrorMessage["reason-visit"]}
            disabledUI={props.disabledUI}
            required={true}
          />
          <FormInputBlock
            showLabel="true"
            labelText="Note"
            inputId="note"
            inputPlaceholder="Leave a note if needed"
            inputValue={props.noteValue}
            inputOnChange={props.onValueChange}
            inputWidth="100%"
            inputMargin="8px 96px 0 0"
            inputPadding="16px 23px"
            marginBottom="24px"
            disabledUI={props.disabledUI}
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
        disabledUI={props.disabledUI}
      >
        <CalendarForAppointment date={props.date} setDate={props.setDate} />
      </ArticleCreateAppointment>

      <ArticleCreateAppointment
        imgNumberAction={imgNumberAction3}
        imgAlt="two"
        actionName="Select an available timeslot"
        styledArticleRadioButton="ok"
        disabledUI={props.disabledUI}
      >
        <WrapperBlockRadioButton>
          {arrayRadioButtonData.map(item => {
            return (
              <BlockRadioButton
                id={item.id}
                labelTextTime={item.labelTextTime}
                value={item.value}
                selected={props.selectedRadioButton}
                onSelectedChange={props.onSelectRadioButtonChange}
                required={item.required}
                disabled={item.disabled}
              />
            )
          })}
        </WrapperBlockRadioButton>
        <WrapperButton>
          <Button
            padding="16px 49px"
            margin="37px 0 0 0"
            disabledUI={props.disabledUI}
          >
            Submit
          </Button>
        </WrapperButton>
      </ArticleCreateAppointment>
    </LayoutPatientCreateAppointments>
  )
}