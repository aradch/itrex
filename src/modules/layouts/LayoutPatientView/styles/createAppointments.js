import styled from "styled-components"



export const Wrapper = styled.section`
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

export const Header = styled.header`
  padding: 40px 0 0 48px;
  display: flex;
`
export const GoBack = styled.div`
  font-size: 17px;
  line-height: 24px;
  margin-right: 8px;
  color: #7297FF;
`
export const CurrentPage = styled.div`
  font-size: 17px;
  line-height: 24px;
  margin-left: 8px;
  color: #A1ABC9;
`
export const Section = styled.section`
  margin: 75px 0 0 48px;

  @media (min-width: 600px) and (max-width: 1365px) {
    margin: 59px 0 0 48px;
  }
`
export const HeaderSection = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 110%;
  letter-spacing: 0.3px;
  color: #202225;
`
export const Form = styled.form`
  margin-top: 43px;
  display: flex;

  @media (min-width: 600px) and (max-width: 1365px) {
    flex-direction: column;
  }
`
