import React, { useState } from 'react'

import { StyledSelect, OptionBold, OptionNormal } from './style'


export const Select = ({ id, selectedOption, setSelectedOption, selectOnBlur, borderColor }) => {
  const [selectValue, setSelectValue] = useState("")
  const [arrowIndicatorColorBlue, setArrowIndicatorColorBlue] = useState(false)

  const [optionTextBold, setOptionTextBold] = useState("")

  const [objectDoctorsName, setObjectDoctorsName] = useState({
    "John Milton": "John Milton",
    "Joe Charles": "Joe Charles",
    "Jonathan Meyers": "Jonathan Meyers",
  })

  const optionsDoctorsName = [
    {
      value: "John Milton",
      label:
        <>
          <OptionBold>{optionTextBold}</OptionBold>
          <OptionNormal>{objectDoctorsName["John Milton"]}</OptionNormal>
        </>
    },
    {
      value: "Joe Charles",
      label:
        <>
          <OptionBold>{optionTextBold}</OptionBold>
          <OptionNormal>{objectDoctorsName["Joe Charles"]}</OptionNormal>
        </>
    },
    {
      value: "Jonathan Meyers",
      label:
        <>
          <OptionBold>{optionTextBold}</OptionBold>
          <OptionNormal>{objectDoctorsName["Jonathan Meyers"]}</OptionNormal>
        </>
    },
  ]

  const [objectOccupation, setObjectOccupation] = useState({
    "Therapist": "Therapist",
    "Surgeon": "Surgeon",
    "Ophthalmologist": "Ophthalmologist",
    "Pediatrician": "Pediatrician",
    "Neurologist": "Neurologist",
  })

  const optionsOccupation = [
    {
      value: "Therapist",
      label:
        <>
          <OptionBold>{optionTextBold}</OptionBold>
          <OptionNormal>{objectOccupation["Therapist"]}</OptionNormal>
        </>
    },
    {
      value: "Surgeon",
      label:
        <>
          <OptionBold>{optionTextBold}</OptionBold>
          <OptionNormal>{objectOccupation["Surgeon"]}</OptionNormal>
        </>
    },
    {
      value: "Ophthalmologist",
      label:
        <>
          <OptionBold>{optionTextBold}</OptionBold>
          <OptionNormal>{objectOccupation["Ophthalmologist"]}</OptionNormal>
        </>
    },
    {
      value: "Pediatrician",
      label:
        <>
          <OptionBold>{optionTextBold}</OptionBold>
          <OptionNormal>{objectOccupation["Pediatrician"]}</OptionNormal>
        </>
    },
    {
      value: "Neurologist",
      label:
        <>
          <OptionBold>{optionTextBold}</OptionBold>
          <OptionNormal>{objectOccupation["Neurologist"]}</OptionNormal>
        </>
    },
  ]

  let objectCurrentSelect = (id === "doctor-name" ? objectDoctorsName : objectOccupation)

  const onArrowIndicatorColorBlueChange = () => {
    setArrowIndicatorColorBlue(true)
  }

  const onArrowIndicatorColorDefaultChange = () => {
    setArrowIndicatorColorBlue(false)
  }

  const onOptionChange = (e) => {
    if (
      e.key === "Backspace" &&
      optionTextBold.length > 0 &&
      optionTextBold.length === selectValue.length
    ) {
      setOptionTextBold(optionTextBold.slice(0, -1))
      for (let key in objectCurrentSelect) {
        objectCurrentSelect[key] = key.substr(optionTextBold.length - 1)
      }
    } else if (
      e.key.length === 1 &&
      optionTextBold.length === selectValue.length &&
      Object.values(objectCurrentSelect).some((item) => item.substr(0, 1).includes(e.key))
    ) {
      setOptionTextBold(optionTextBold + e.key)
      for (let key in objectCurrentSelect) {
        objectCurrentSelect[key] = objectCurrentSelect[key].substr(1)
      }
    }
  }


  const onValueChange = (e) => {
    setSelectValue(e)
  }

  const onSelectedOptionChange = (e) => {
    setSelectedOption(e)
    setOptionTextBold("")
    for (let key in objectCurrentSelect) {
      objectCurrentSelect[key] = key
    }
  }


  return (
    <StyledSelect
      inputId={id}
      defaultValue={selectedOption}
      onChange={onSelectedOptionChange}
      onKeyDown={onOptionChange}
      onInputChange={onValueChange}
      onBlur={selectOnBlur}
      options={id === "doctor-name" ? optionsDoctorsName : optionsOccupation}
      classNamePrefix="react-select"
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: "#7297FF",
          primary25: '#F9FAFF',
        },
      })}
      borderColor={borderColor}
      arrowIndicatorColorBlue={arrowIndicatorColorBlue}
      onMenuOpen={onArrowIndicatorColorBlueChange}
      onMenuClose={onArrowIndicatorColorDefaultChange}
    />
  )
}