import { ChevronRight } from "react-feather"

import { CurrentPage, Form, GoBack, Header, HeaderSection, Section, Wrapper } from "./styles/createAppointments"



export const LayoutPatientCreateAppointments = ({ children, sendFormData, goBack, currentPage, header }) => {
  return (
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
  )
}