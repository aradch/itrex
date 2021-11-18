import styled from "styled-components"


export const HeaderForm = styled.header`
  width: 368px;
  height: 32px;
  font-size: 24px;
  font-weight: 600;
  line-height: 31.4px;
  letter-spacing: 0.6px;
  margin: ${({ marginTopDesktop }) => marginTopDesktop || "168px"} 96px 0 96px;
  color: #202225;

  @media (min-width: 0) and (max-width: 599px) {
    width: 80%;
    font-size: 20px;
    margin: ${({ marginTopMobile }) => marginTopMobile || "10.5%"}  10% 0 10%;
  }
`