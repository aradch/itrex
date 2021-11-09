import styled from "styled-components"

const StyledInput = styled.input.attrs(props => ({
  type: props.type || "text",
}))`
  width: 368px;
  margin: 40px 96px 0 96px;
  border: 1px solid ${({ borderColor }) => borderColor || "#dce0ec"};
  box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
  padding: 16px 63px;
  color: #202225;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 56px;
  border-radius: 8px;
  font-size: 17px;
  cursor: pointer;
  background: url(${({ bgImageUrl }) => bgImageUrl}) no-repeat white;
  background-position: 
    bottom ${({ bgImagePositionBottom }) => bgImagePositionBottom + "px"} 
    left ${({ bgImagePositionLeft }) => bgImagePositionLeft + "px"};

  &:focus {
  border-color: #7297ff;
  outline: none;
  }

  &::placeholder {
  color: #a1abc9;
  }


  @media (min-width: 0) and (max-width: 599px) {
    width: 80%;
    height: 40px;
    margin: 7.35% 10% 0 10%;
    padding: 16px 47px;
    font-size: 15px;
    background-position: 
      bottom ${({ bgImagePositionBottom }) => (bgImagePositionBottom - "8" + "px")} 
      left ${({ bgImagePositionLeft }) => bgImagePositionLeft - "8" + "px"};
  }
`

export const Input = (props) => {
  return <StyledInput {...props} />

}