import { MenuDoctorView } from "../../components/DoctorView/MenuDoctorView/MenuDoctorView"

import { ArticlePatients, Header, PatientsList, Wrapper } from './styles/myPatients'



export const LayoutDoctorMyPatients = ({ children, headerArticlePatients }) => {
  return (
    <Wrapper>
      <MenuDoctorView />
      <ArticlePatients>
        <Header>{headerArticlePatients}</Header>
        <PatientsList>{children}</PatientsList>
      </ArticlePatients>
    </Wrapper>
  )
}