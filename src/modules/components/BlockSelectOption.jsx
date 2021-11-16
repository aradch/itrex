import styled, { css } from 'styled-components'
import { SelectOption } from './../../components/SelectOption'


const Wrapper = styled.div`
  height: 89px;
  margin-bottom: 31px;
`
const Label = styled.label`
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
`
const ErrorMessage = styled.p`
  position: absolute;
  left: -9999999px;

  ${({ showErrorMessage }) => showErrorMessage && css`
    position: static; 
    padding: ${({ errorPadding }) => errorPadding || " 7px 96px 0 96px"};
    color: #f6657f;
    font-size: 13px;
    letter-spacing: -0.24px;

    ${'' /* @media (min-width: 0) and (max-width: 599px) {
      padding: 5% 10% 0 10%;
      line-height: 130%;
    } */}
  `
  }
`

export const BlockSelectOption = ({
  id, labelText, selectedOption, setSelectedOption, selectOnBlur, errorIlluminationInput, showErrorMessage, textErrorMessage, errorPadding
}) => {

  return (
    <Wrapper>
      <Label htmlFor={id}>{labelText}</Label>
      <SelectOption
        id={id}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        selectOnBlur={selectOnBlur}
        borderColor={errorIlluminationInput}
      />
      <ErrorMessage
        showErrorMessage={showErrorMessage}
        errorPadding={errorPadding}
      >
        {textErrorMessage}
      </ErrorMessage>
    </Wrapper>
  )
}