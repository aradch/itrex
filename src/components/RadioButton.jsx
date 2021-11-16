import styled from 'styled-components'


const Input = styled.input`
  margin-right: -15px;
  opacity: 0;
`


export const RadioButton = ({ id, value, selected, onSelectedChange, required }) => {
  return (
    <Input
      id={id}
      type="radio"
      name="time-slot"
      value={value}
      required={required}
      checked={selected}
      onChange={onSelectedChange}
    />
  )
}