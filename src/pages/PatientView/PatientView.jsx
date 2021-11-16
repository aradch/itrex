import { Switch } from 'react-router'
import { Redirect } from 'react-router'
import { Route } from 'react-router'
import { MyAppointments } from './MyAppointments'
import { CreateAppointments } from './CreateAppointments'


export const PatientView = () => {

  return (
    <Switch>
      <Redirect exact from="/patient-view" to="/patient-view/my-appointments" />
      <Route path="/patient-view/my-appointments" render={() => <MyAppointments />} />
      <Route path="/patient-view/create-appointments" render={() => <CreateAppointments />} />
    </Switch>
  )
}