import styled from "styled-components"
import { HeaderUser } from "../../components/HeaderUser"
import { ChevronRight } from "react-feather"

import userAvatar from "../../../assets/patientView/userAvatar.png"


const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background: #e4ebff;
`
const Wrapper = styled.section`
  min-height: calc(100vh - 128px);
  background-color: #f9faff;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.32);
  border-radius: 16px;
  margin: 0 64px;
  padding-bottom: 47px;

  @media (min-width: 600px) and (max-width: 1365px) {
    min-height: calc(100vh - 137px);
  }
`

const Header = styled.header`
  padding: 40px 0 0 48px;
  display: flex;
`
const GoBack = styled.div`
  font-size: 17px;
  line-height: 24px;
  margin-right: 8px;
  color: #7297FF;
`
const CurrentPage = styled.div`
  font-size: 17px;
  line-height: 24px;
  margin-left: 8px;
  color: #A1ABC9;
`
const Section = styled.section`
  margin: 75px 0 0 48px;

  @media (min-width: 600px) and (max-width: 1365px) {
    margin: 59px 0 0 48px;
  }
`
const HeaderSection = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 110%;
  letter-spacing: 0.3px;
  color: #202225;
`
const Form = styled.form`
  margin-top: 43px;
  display: flex;

  @media (min-width: 600px) and (max-width: 1365px) {
    flex-direction: column;
  }
`
const Footer = styled.footer`
  height: 48px;
`



export const LayoutPatientCreateAppointments = ({ children, sendFormData, goBack, currentPage, header }) => {

  return (
    <Main>
      <HeaderUser userName="Larry Prinston" typeUser="Patient" userAvatar={userAvatar} />
      <Wrapper>
        <Header>
          <GoBack>{goBack}</GoBack>
          <ChevronRight color="#A1ABC9" size={24} />
          <CurrentPage>{currentPage}</CurrentPage>
        </Header>

        <Section>
          <HeaderSection>{header}</HeaderSection>
          <Form onSubmit={sendFormData}>
            {children}
          </Form>
        </Section>
      </Wrapper>
      <Footer />
    </Main>
  )
}