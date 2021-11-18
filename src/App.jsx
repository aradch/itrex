import { BrowserRouter } from 'react-router-dom'
import { Switch } from 'react-router'

import { MainRoutes } from './routes/MainRoutes'


export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <MainRoutes />
      </Switch>
    </BrowserRouter>
  )
}

