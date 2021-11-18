import { Input } from './style'


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