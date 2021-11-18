import { Select } from '../../../../components/Select/Select'

import { Wrapper, Label, ErrorMessage } from './styles/blockSelectOption'


export const BlockSelectOption = ({
  id, labelText, selectedOption, setSelectedOption, selectOnBlur, errorIlluminationInput, showErrorMessage, textErrorMessage, errorPadding
}) => {

  return (
    <Wrapper>
      <Label htmlFor={id}>{labelText}</Label>
      <Select
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