import styled from "styled-components"
import { MenuDoctorView } from "../../components/MenuDoctorView"
import { HeaderUser } from '../../components/HeaderUser'

import userAvatar from "../../../assets/doctorView/avatar.png"
import medicalHistory from "../../../assets/doctorView/medical-history 1.png"


const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background: #e4ebff;
`

const Wrapper = styled.section`
  height: calc(100vh - 128px);
  background-color: #f9faff;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.32);
  border-radius: 16px;
  margin: 0 64px;

  @media (min-width: 0) and (max-width: 599px) {
    height: calc(100vh - 72px);
    margin: 0;
    border-radius: 16px 16px 0px 0px;
  }
`
const ArticlePatients = styled.article`
`
const Header = styled.h1`
  margin: 54px 0 0 48px;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.4px;
  color: #202225;

  @media (min-width: 0) and (max-width: 599px) {
    margin: 13.4% 0 0 7.4%;
    font-size: 20px;
    line-height: 130%;
  }
`
const PatientsList = styled.div`
  padding: calc(8% + 113px) 0 15% 0;

  @media (min-width: 0) and (max-width: 599px) {
    padding: 23.5% 0 0 0;
  }
`
const ImageEmptyPatients = styled.img`
  display: block;
  margin: 0 auto;
`
const TextEmptyPatients = styled.p`
  width: 461px;
  margin: 0 auto;
  margin-top: 40px;
  text-align: center;
  font-size: 15px;
  color: #a1abc9;
  line-height: 21px;

  @media (min-width: 0) and (max-width: 599px) {
    width: 240px;
    margin-top: 31px;
  }
`


export const LayoutDoctorEmptyPatients = ({ children, headerArticlePatients }) => {

  return (
    <Main>
      <HeaderUser userName="Miranda Nelson" typeUser="Doctor" userAvatar={userAvatar} />
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
    </Main>
  )
}