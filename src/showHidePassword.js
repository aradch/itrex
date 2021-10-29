export const showHidePassword = ((eye, nameBlockInput, input) => {
  if (eye.classList.contains(`form__${nameBlockInput}_show-password`)) {
    input.type = "password"

    eye.classList.remove(`form__${nameBlockInput}_show-password`)
    eye.classList.add(`form__${nameBlockInput}_hide-password`)
  } else {
    input.type = "text"

    eye.classList.remove(`form__${nameBlockInput}_hide-password`)
    eye.classList.add(`form__${nameBlockInput}_show-password`)
  }
})
