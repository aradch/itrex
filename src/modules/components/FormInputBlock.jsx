import styled, { css } from "styled-components"
import { Input } from "../../components/Input"


const StyledFormInputBlock = styled.div`
  position: relative;
  height: 96px;
  margin-bottom: ${({ marginBottom }) => marginBottom};

  ${({ disabledUI }) => disabledUI && css`
    pointer-events: none;
  `}

  @media (min-width: 0) and (max-width: 599px) {
    height: auto;
  }
`

const Label = styled.label`
  position: absolute;
  left: -99999999px;

  ${({ showLabel }) => showLabel && css`
    position: static;
    font-weight: 600;
    font-size: 13px;
    line-height: 130%;
    letter-spacing: 0.1px;
  `}
`

const WrapperShowHidePassword = styled.div`
  position: relative;
`
const ShowHidePassword = styled.button`
  position: absolute;
  bottom: 15px;
  left: 417px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: none;
  background: url(${({ imageUrlShowHidePassword }) => imageUrlShowHidePassword}) no-repeat;

  @media (min-width: 0) and (max-width: 599px) {
    bottom: 7px;
    left: calc(90% - 39px);
  }
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

    @media (min-width: 0) and (max-width: 599px) {
      padding: 5% 10% 0 10%;
      line-height: 130%;
    }
  `
  }
`

export const FormInputBlock = (props) => {
  return (
    <StyledFormInputBlock
      marginBottom={props.marginBottom}
      disabledUI={props.disabledUI}
    >
      <Label
        htmlFor={props.inputId}
        showLabel={props.showLabel}
      >
        {props.labelText}
      </Label>
      <Input
        id={props.inputId}
        type={props.inputType}
        placeholder={props.inputPlaceholder}
        required={props.required}
        value={props.inputValue}
        onChange={props.inputOnChange}
        onBlur={props.inputOnBlur}
        bgImageUrl={props.inputBgImageUrl}
        bgImagePositionBottom={props.inputBgImagePositionBottomPx}
        bgImagePositionLeft={props.inputBgImagePositionLeftPx}
        borderColor={props.errorIlluminationInput}
        inputWidth={props.inputWidth}
        inputMargin={props.inputMargin}
        inputPadding={props.inputPadding}
        maxLength={props.maxLength}
      />

      {(props.inputId === "password" || props.inputId === "confirm-password") &&
        <WrapperShowHidePassword>
          <ShowHidePassword
            imageUrlShowHidePassword={props.imageUrlShowHidePassword}
            onClick={props.onTypeInputChanged}
          />
        </WrapperShowHidePassword>
      }

      <ErrorMessage
        showErrorMessage={props.showErrorMessage}
        errorPadding={props.errorPadding}
      >
        {props.textErrorMessage}
      </ErrorMessage>
    </StyledFormInputBlock>
  )
}