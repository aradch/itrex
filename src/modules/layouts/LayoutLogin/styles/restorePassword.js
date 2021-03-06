import { NavLink } from 'react-router-dom'
import styled from "styled-components"

import imgArrowLeft from "../../../../assets/login/angle-left-b.svg"



export const Wrapper = styled.section`
  width: 560px;
  background-color: #f9faff;

  @media (min-width: 0) and (max-width: 599px) {
    width: 100%;
    margin-top: -103.9%;
    border-radius: 24px 24px 0px 0px;
  }
`

export const GeneralHeader = styled.header`
  width: 368px;
  margin: 264px 96px 0 96px;

  @media (min-width: 0) and (max-width: 599px) {
    width: 83%;
    margin: 10.5% 0 0 10%;
  }
`
export const HeaderRestorePassword = styled.h1`
  height: 32px;
  line-height: 31.4px;
  letter-spacing: 0.4px;
  color: #202225;

  @media (min-width: 0) and (max-width: 599px) {
    font-size: 125%;
    height: auto;
  }
`
export const HeaderText = styled.p`
  margin-top: 32px;
  font-size: 15px;
  line-height: 19.5px;
  color: #a1abc9;

  @media (min-width: 0) and (max-width: 599px) {
    margin-top: 8.7%;
    padding-right: 10px;
    font-size: 94%;
  }
`

export const Form = styled.form`
  @media (min-width: 0) and (max-width: 599px) {
    height: 185px;
    padding-bottom: 42px;
  }
`


export const StyledNavLink = styled(NavLink)`
  content: url(${imgArrowLeft});
  margin-right: 16px;
  vertical-align: -4px;
  
  @media (min-width: 0) and (max-width: 599px) {
    vertical-align: -5px;
  }
`