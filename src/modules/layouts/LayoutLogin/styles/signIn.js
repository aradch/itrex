import { NavLink } from 'react-router-dom'
import styled from "styled-components"



export const Wrapper = styled.section`
  width: 560px;
  background-color: #f9faff;

  @media (min-width: 0) and (max-width: 599px) {
    width: 100%;
    margin-top: -45%;
    border-radius: 24px 24px 0px 0px;
  }
`

export const Article = styled.article`
  height: 625px;
  padding-bottom: 265px;

  @media (min-width: 0) and (max-width: 599px) {
    height: 408px;
    padding-bottom: 26px;
  }
`

export const Form = styled.form`

`

export const WrapperForgotPassword = styled.div`
  margin: 32px 330px 0 96px;
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;

  @media (min-width: 0) and (max-width: 599px) {
    margin: 10% 0 0 10%;
  }
`

export const StyledColorNavLink = styled(NavLink)`
  color: #7297ff;
`