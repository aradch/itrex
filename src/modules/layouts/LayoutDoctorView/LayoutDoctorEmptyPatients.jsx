import { MenuDoctorView } from "../../components/DoctorView/MenuDoctorView/MenuDoctorView"

import { ArticlePatients, Header, ImageEmptyPatients, PatientsList, TextEmptyPatients, Wrapper } from './styles/emptyPatients'

import medicalHistory from "../../../assets/doctorView/medical-history 1.png"



export const LayoutDoctorEmptyPatients = ({ children, headerArticlePatients }) => {
  return (
    <Wrapper>
      <MenuDoctorView />
      <ArticlePatients>
        <Header>{headerArticlePatients}</Header>
        <PatientsList>
          <ImageEmptyPatients src={medicalHistory} alt="You don't have patients" />
          <TextEmptyPatients>{children}</TextEmptyPatients>
        </PatientsList>
      </ArticlePatients>
    </Wrapper>
  )
}