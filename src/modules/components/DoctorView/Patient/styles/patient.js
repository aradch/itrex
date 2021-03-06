import styled, { css } from "styled-components"


export const Wrappper = styled.div`
  width: 406px;
  height: fit-content;
  background-color: #ffffff;
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 12px;
  margin: 0 20px 24px 0;

  @media (min-width: 0) and (max-width: 599px) {
    flex: 1 1 auto; 
    margin: 0 0 25px 0;
  }

  @media (min-width: 600px) and (max-width: 1035px) {
    flex: 1 1 auto; 
    margin: 0 7px 24px 0;
  }
`

export const PatientInfo = styled.div`
  display: grid;
  grid-template-areas:
    "avatar name name"
    "avatar indicator appointment";
  grid-template-columns: 64px 16px 1fr;
  grid-template-rows: 31px 17px;
  padding: 24px 32px;
  border-bottom: 1px solid rgba(220, 224, 236, 0.5);

  ${({ typeUser }) => typeUser && css`
    grid-template-columns: 64px 0 1fr;
  `}

  @media (min-width: 0) and (max-width: 599px) {
    grid-template-columns: 68px 15px 1fr;
    grid-template-rows: 30px 28px;
    padding: 19px 20px;

    ${({ typeUser }) => typeUser && css`
      grid-template-columns: 68px 0 1fr;  
    `}
  }

  @media (min-width: 600px) and (max-width: 1035px) {
    grid-template-rows: 30px 18px;
  }
`
export const Avatar = styled.img`
  grid-area: avatar;
  margin-right: 0;
  align-items: flex-end;

  @media (min-width: 0) and (max-width: 599px) {
    padding: 5px 0px 0px 4px;
  }
`
export const PatientName = styled.p`
  grid-area: name;
  font-weight: 600;
  font-size: 17px;
  color: #202225;
  padding-top: 3px;
  letter-spacing: 0.3px;

  ${({ typeUser }) => typeUser && css`
    letter-spacing: 0.4px;
  `}

  @media (min-width: 0) and (max-width: 599px) {
    padding-top: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
export const StatusIndicator = styled.img`
  grid-area: indicator;
  padding-top: 5px;

  ${({ typeUser }) => typeUser && css`
    position: absolute;
    left: -99999999px;
  `}

  @media (min-width: 0) and (max-width: 599px) {
    padding-top: 3px;
  }

  @media (min-width: 600px) and (max-width: 1035px) {
    padding-top: 6px;
  }
`
export const StatusAppointment = styled.p`
  grid-area: appointment;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.1px;
  color: #a1abc9;

  @media (min-width: 0) and (max-width: 599px) {
    line-height: 16px;

    ${({ typeUser }) => typeUser && css`
      padding-top: 5px;
      align-self: center;
    `}
  }

  @media (min-width: 600px) and (max-width: 1035px) {
    padding-top: 1px;
  }
`
export const PatientDescriptionAppointment = styled.div`
  display: grid;
  grid-template-areas:
    "clock date"
    "blank description";
  grid-template-columns: 40px 1fr;
  grid-template-rows: auto auto;
  grid-gap: 16px 0;
  padding: 24px 32px 40px 32px;

  ${({ typeUser }) => typeUser && css`
    padding: 24px 32px 35px 32px;

    @media (min-width: 600px) and (max-width: 1035px) {
      padding: 24px 32px 43px 32px;
   }
  `}

  @media (min-width: 0) and (max-width: 599px) {
    grid-template-columns: 40px 1fr;
    grid-gap: 25px 0;
    padding: 16px 24px 24px 16px;

    ${({ typeUser }) => typeUser && css`
      padding: 16px 24px 34px 16px;
    `}
  }
`
export const ImageClock = styled.img`
  grid-area: clock;
`
export const Date = styled.p`
  grid-area: date;
  font-weight: 600;
  font-size: 15px;
  color: #202225;
  letter-spacing: 0.4px;

  @media (min-width: 0) and (max-width: 599px) {
    line-height: 19px;
  }
`
export const ImageBlank = styled.img`
  grid-area: blank;

  ${({ typeUser }) => typeUser && css`
    padding: 3px 0 0 1px;
  `}
`
export const Text = styled.p`
  grid-area: description;
  font-weight: normal;
  font-size: 15px;
  line-height: 21px;
  color: #202225;

  ${({ typeUser }) => typeUser && css`
    @media (min-width: 0) and (max-width: 599px) {
      padding-top: 1px;
    }

    @media (min-width: 600px) and (max-width: 1035px) {
      padding-top: 1px;
    }
  `}
`

