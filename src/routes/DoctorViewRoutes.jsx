import { Switch, Redirect, Route } from 'react-router'

import { MyPatients } from '../modules/components//DoctorView/MyPatients'
import { EmptyPatients } from '../modules/components/DoctorView/EmptyPatients'



export const DoctorViewRoutes = () => {
  return (
    <Switch>
      <Redirect exact from="/doctor-view" to="/doctor-view/my-patients" />
      <Route path="/doctor-view/my-patients" render={() => <MyPatients />} />
      <Route path="/doctor-view/empty-patients" render={() => <EmptyPatients />} />
    </Switch>
  )
}