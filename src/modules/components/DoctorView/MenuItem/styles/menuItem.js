import { NavLink } from 'react-router-dom'
import styled, { css } from "styled-components"


export const Item = styled.li`
  width: 160px;
  height: 40px;
  margin-right: 12px;
  list-style-type: none;
  text-align: center;
  padding: 8px 0;
  font-size: 15px;
  background-color: #ffffff;
  border-radius: 8px;

  @media (min-width: 0) and (max-width: 599px) {
    width: 120px;
    margin-right: 24px;

    ${'' /* ${({ hide }) => hide && css`
      position: absolute;
      left: -999999px;
    `}
    }; */}
  }

  ${'' /* @media (min-width: 600px) and (max-width: 1035px) {
    ${({ hide }) => hide && css`
      position: absolute;
      left: -999999px;
    `}
    }; */}

  ${({ active }) => active && css`
    background-color: #7297ff;
    border-radius: 8px;
  `}
`
export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #7297ff;

  ${({ active }) => active && css`
    color: #ffffff;
    letter-spacing: 0.3px;
    font-weight: 600;
  `}
`