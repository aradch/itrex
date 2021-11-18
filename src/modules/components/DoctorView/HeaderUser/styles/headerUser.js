import styled from "styled-components"


export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 80px;

  @media (min-width: 0) and (max-width: 599px) {
    height: 10%;
  }
`
export const Logo = styled.img`
  margin: 24px 0 24px 64px;

  @media (min-width: 0) and (max-width: 599px) {
    margin: 20px 0 20px 24px;
  }
`
export const BlockLoginAccount = styled.div`
  display: grid;
  grid-template-areas:
    "name avatar"
    "profession avatar";
  grid-template-rows: 23px 21px;
  margin-right: 64px;
  text-align: right;
  align-content: center;

  @media (min-width: 0) and (max-width: 599px) {
    margin-right: 24px;
  }
`
export const UserName = styled.p`
  grid-area: name;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.2px;
  color: #202225;

  @media (min-width: 0) and (max-width: 599px) {
    position: absolute;
    left: -9999999px;
  }
`
export const TypeUser = styled.p`
  grid-area: profession;
  font-size: 13px;
  font-weight: 500;
  color: #a1abc9;

  @media (min-width: 0) and (max-width: 599px) {
    position: absolute;
    left: -9999999px;
  }
`
export const Avatar = styled.img`
  grid-area: avatar;
  margin-left: 16px;
  margin-top: 2px;
`
export const StatusIndicator = styled.img`
  position: absolute;
  right: 61px;
  top: 17px;

  @media (min-width: 0) and (max-width: 599px) {
    right: 21px;
    top: 13px;
  }
`
