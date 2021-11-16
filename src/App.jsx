import { BrowserRouter } from 'react-router-dom'
import { Redirect, Route, Switch } from 'react-router'
import { Login } from './pages/Login/Login'
import { DoctorView } from './pages/DoctorView/DoctorView'
import { PatientView } from './pages/PatientView/PatientView'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" render={() => <Login />} />
        <Route path="/doctor-view" render={() => <DoctorView />} />
        <Route path="/patient-view" render={() => <PatientView />} />
      </Switch>
    </BrowserRouter>
  )
}


export default App
