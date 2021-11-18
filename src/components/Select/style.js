import Select from 'react-select'
import styled, { css } from 'styled-components'


export const StyledSelect = styled(Select)`
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
export const OptionBold = styled.span`
  font-weight: bold;
`
export const OptionNormal = styled.span`

`