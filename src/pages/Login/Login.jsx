import { Route, Switch } from "react-router"
import { SignUpContainer } from './SignUpContainer'
import { SignInContainer } from './SignInContainer'
import { RequestRestorePasswordContainer } from './RequestRestorePasswordContainer'
import { SuccessRestorePassword } from './SuccessRestorePassword'


export const Login = () => {

  return (
    <Switch>
      <Route exact path="/login" render={() => <SignUpContainer />} />
      <Route path="/login/sign-in" render={() => <SignInContainer />} />
      <Route path="/login/restore-password" render={() => <RequestRestorePasswordContainer />} />
      <Route path="/login/success-restore-password" render={() => <SuccessRestorePassword />} />
    </Switch>
  )
}