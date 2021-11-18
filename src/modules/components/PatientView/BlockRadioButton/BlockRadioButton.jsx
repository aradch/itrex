import { RadioButton } from '../../../../components/RadioButton/RadioButton'

import { Wrapper, Label } from './styles/blockRadioButton'


export const BlockRadioButton = ({
  id, labelTextTime, disabled, value, selected, onSelectedChange, required
}) => {

  return (
    <Wrapper
      checked={selected === id}
      disabled={disabled}
    >
      <Label htmlFor={id}>{labelTextTime}</Label>
      <RadioButton
        id={id}
        value={value}
        required={required}
        selected={selected === id}
        onSelectedChange={onSelectedChange}
      />
    </Wrapper>
  )
}