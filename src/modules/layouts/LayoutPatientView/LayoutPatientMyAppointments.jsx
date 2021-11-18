import { MenuPatientView } from '../../components/PatientView/MenuPatientView/MenuPatientView'
import { Button } from "../../../components/Button/Button"

import { AppointmentsList, ArticleAppointments, FlexSpaceBetween, Header, Wrapper } from './styles/myAppointments'



export const LayoutPatientMyAppointments = ({ children, headerArticleAppointments, buttonText, imgPlus }) => {
  return (
    <Wrapper>
      <MenuPatientView />
      <ArticleAppointments>
        <FlexSpaceBetween>
          <Header>{headerArticleAppointments}</Header>
          <Button imgPlus={imgPlus}>{buttonText}</Button>
        </FlexSpaceBetween>
        <AppointmentsList>{children}</AppointmentsList>
      </ArticleAppointments>
    </Wrapper>
  )
}