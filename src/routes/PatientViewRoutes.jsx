import { Switch, Redirect, Route } from 'react-router'

import { MyAppointments } from './../modules/components/PatientView/MyAppointments'
import { CreateAppointmentContainer } from './../modules/components/PatientView/CreateAppointmentContainer'



export const PatientViewRoutes = () => {
  return (
    <Switch>
      <Redirect exact from="/patient-view" to="/patient-view/my-appointments" />
      <Route path="/patient-view/my-appointments" render={() => <MyAppointments />} />
      <Route path="/patient-view/create-appointments" render={() => <CreateAppointmentContainer />} />
    </Switch>
  )
}