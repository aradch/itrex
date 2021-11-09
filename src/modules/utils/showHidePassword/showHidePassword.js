export const showHidePassword = (showPassword, setShowPassword, setTypeInputPassword,) => {

  if (!showPassword) {
    setShowPassword(true)
    setTypeInputPassword("text")
  } else {
    setShowPassword(false)
    setTypeInputPassword("password")
  }

}


export const showHideConfirmPassword = (showHConfirmPassword, setShowConfirmPassword, setTypeInputConfirmPassword) => {

  if (!showHConfirmPassword) {
    setShowConfirmPassword(true)
    setTypeInputConfirmPassword("text")
  } else {
    setShowConfirmPassword(false)
    setTypeInputConfirmPassword("password")
  }
}