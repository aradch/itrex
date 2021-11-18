import styled from "styled-components"



export const Wrapper = styled.section`
  width: 560px;
  background-color: #f9faff;

  @media (min-width: 0) and (max-width: 599px) {
    width: 100%;
    margin-top: -35%;
    border-radius: 24px 24px 0px 0px;
  }
`

export const Form = styled.form`
  height: 720px;
  padding-bottom: 120px;

  @media (min-width: 0) and (max-width: 599px) {
    height: 75%;
    padding-bottom: 118px;
  }
`