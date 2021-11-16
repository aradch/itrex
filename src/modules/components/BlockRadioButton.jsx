import styled from 'styled-components'
import { RadioButton } from '../../components/RadioButton'
import { css } from 'styled-components'


const Wrapper = styled.div`
  height: 40px;
	margin: 0 16px 16px 0;
  background-color: white;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
  border: 1px solid white;
  border-radius: 8px;

  &:hover {
    border-color: hsl(0, 0%, 70%);
  }

  ${({ checked }) => checked && css`
    border: 1px solid #7297FF;
    color: #7297FF;

    &:hover {
      border-color: #7297FF;
    }
  `}

  ${({ disabled }) => disabled && css`
    pointer-events: none;
    background-color: #DCE0EC;
    border: 1px solid #DCE0EC;
    color: #F9FAFF;
  `}
`
const Label = styled.label`
  width: 72px;
  display: inline-block;
  margin: 9px 16px;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  line-height: 130%;
  letter-spacing: 0.4px;
	user-select: none;
  cursor: pointer;
`


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