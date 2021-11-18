import { Switch, Redirect, Route } from 'react-router'

import { SignUpContainer } from './../modules/components/Login/SignUpContainer'
import { SignInContainer } from './../modules/components/Login/SignInContainer'
import { RequestRestorePasswordContainer } from './../modules/components/Login/RequestRestorePasswordContainer'
import { SuccessRestorePassword } from './../modules/components/Login/SuccessRestorePassword'



export const LoginRoutes = () => {
  return (
    <Switch>
      <Redirect exact from="/login" to="/login/sign-up" />
      <Route path="/login/sign-up" render={() => <SignUpContainer />} />
      <Route path="/login/sign-in" render={() => <SignInContainer />} />
      <Route path="/login/restore-password" render={() => <RequestRestorePasswordContainer />} />
      <Route path="/login/success-restore-password" render={() => <SuccessRestorePassword />} />
    </Switch>
  )
}
