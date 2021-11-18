import { Input } from "../../../../components/Input/Input"

import { ErrorMessage, Label, ShowHidePassword, StyledFormInputBlock, WrapperShowHidePassword } from './styles/formInputBlock'



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