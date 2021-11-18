import styled, { css } from "styled-components"

export const StyledButton = styled.button.attrs(props => ({
  type: "submit",
}))`
  padding: ${({ padding }) => padding || "16px 56px 16px 24px"};
  margin: ${({ margin }) => margin || "64px 0 0 96px"};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 17px;
  cursor: pointer;
  letter-spacing: 0.4px;
  line-height: 24px;
  font-weight: 600;
  background: url(${({ bgImageUrl }) => bgImageUrl}) no-repeat bottom 16px right 24px #7297ff;

  ${({ disabledUI }) => disabledUI && css`
    pointer-events: none;
    background: #DCE0EC;
  `}

  ${({ imgPlus }) => imgPlus && css`
    padding: 12px 15px 12px 47px;
    margin: 48px 60px 0 0;
    font-size: 15px;
    letter-spacing: 0.2px;
    background: url(${({ imgPlus }) => imgPlus}) no-repeat bottom 12px left 16px #7297ff;
    
    @media (min-width: 0) and (max-width: 1035px) {
      position: absolute;
      left: -9999999px;
    };
  `}

  @media (min-width: 0) and (max-width: 599px) {
    padding: 14.5px 48px 14.5px 16px;
    margin: 10.2% 0 0 10%;
    line-height: 19.5px;
    font-size: 15px;
    background-position: bottom 12px right 16px;
    letter-spacing: ${({ buttonLetterSpacing }) => buttonLetterSpacing};
    }
`
