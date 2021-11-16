import React, { useState } from 'react'
import Select from 'react-select'
import styled, { css } from 'styled-components'


const StyledSelect = styled(Select)`
  .react-select__control {
    margin-top: 8px;
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
    border: 1px solid ${({ borderColor }) => borderColor || "#DCE0EC"};
    border-radius: 8px;
    caret-color: #7297FF;
    cursor: pointer;

    &:focus {
      border: 1px solid #7297FF;
    }
  }

  .react-select__placeholder,
  .react-select__single-value,
  .react-select__input-container {
    font-weight: normal;
    font-size: 17px;
    line-height: 24px;
    padding: 13px 0 13px 21px;
  }

  .react-select__single-value span {
    font-weight: normal !important;
  }

  .react-select__placeholder {
    color: #a1abc9;
  }

  .react-select__value-container {
    width: 90%;
    padding: 0;
  }

  .react-select__indicator-separator {
    position: absolute;
    left: -9999999px;
  }

  .react-select__indicators {
    margin-right: 17px;
  }

  .react-select__indicator {
    color: #A1ABC9;

    ${({ arrowIndicatorColorBlue }) => arrowIndicatorColorBlue && css`
      color: #7297FF;
      transform: rotate(180deg);
    `}
  }

  .react-select__menu {
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.56);
    margin-top: 4px;
    border-radius: 8px;
  }

  .react-select__menu-list {
    height: 128px;
    margin: 0 4px;

    &::-webkit-scrollbar {
      background-color: rgba(220, 224, 236, 0.32);
      border-radius: 8px;
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(220, 224, 236, 0.56);
      border-radius: 8px;
    }
}

  .react-select__option {
    width: 99%;
    border-radius: 6px;
    padding: 8px 0 7px 20px;
    letter-spacing: -0.5px;
    cursor: pointer;
  }
`
const OptionBold = styled.span`
  font-weight: bold;
`
const OptionNormal = styled.span`

`


export const SelectOption = ({ id, selectedOption, setSelectedOption, selectOnBlur, borderColor }) => {
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


  return (
    <StyledSelect
      inputId={id}
      defaultValue={selectedOption}
      onChange={setSelectedOption}
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