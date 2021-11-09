import { Redirect, Route, Switch } from "react-router"
import { MyPatients } from './MyPatients'
import { EmptyPatients } from './EmptyPatients'



export const DoctorView = () => {

  return (
    <Switch>
      <Redirect exact from="/doctor-view" to="/doctor-view/my-patients" />
      <Route path="/doctor-view/my-patients" render={() => <MyPatients />} />
      <Route path="/doctor-view/empty-patients" render={() => <EmptyPatients />} />
    </Switch>

  )
}