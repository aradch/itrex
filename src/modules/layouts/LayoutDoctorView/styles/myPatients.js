import styled from "styled-components"


// const Main = styled.main`
//   width: 100%;
//   min-height: 100vh;
//   background: #e4ebff;
// `
export const Wrapper = styled.section`
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
export const ArticlePatients = styled.article`
`
export const Header = styled.h1`
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
export const PatientsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 330px);
  margin: 31px 16px 0 48px;
  padding-right: 12px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    background-color: rgba(220, 224, 236, 0.32);
    border-radius: 8px;
    width: 12px;
    margin-left: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(220, 224, 236, 0.56);
    border-radius: 8px;
  }

  @media (min-width: 0) and (max-width: 599px) {
    margin: 19px 12px 0 24px;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 600px) and (max-width: 1035px) {
    height: calc(100vh - 340px);
    margin: 41px 16px 0 48px;
  }
`