import styled, { css } from 'styled-components'


const Wrapper = styled.article`
  ${({ styledArticleCalendar }) => styledArticleCalendar && css`
    margin-right: 48px;

    @media (min-width: 600px) and (max-width: 1365px) {
      margin-top: 25px;
    }
  `}

  ${({ styledArticleRadioButton }) => styledArticleRadioButton && css`
    margin-right: 48px; 

    @media (min-width: 600px) and (max-width: 1365px) {
      margin-top: 50px;
    }
  `}

  ${({ styledArticleSelectOption }) => styledArticleSelectOption && css`
    width: 95%;
    @media (min-width: 1366px) and (max-width: 1627px) {
      margin-top: -10px;
    }
  `}


  ${({ disabledUI }) => disabledUI && css`
    pointer-events: none;
  `}
`
const Header = styled.header`
  display: flex;
  margin-right: 48px;

  @media (min-width: 600px) and (max-width: 1365px) {
      margin-right: 0;
  }
`
const ImageActionNumber = styled.img`

`
const ActionName = styled.h1`
  font-size: 17px;
  line-height: 24px;
  font-weight: 500;
  margin: 4px  0 0 16px;
  color: #A1ABC9;
`


export const ArticleCreateAppointment = ({
  children, imgNumberAction, imgAlt, actionName, disabledUI, styledArticleCalendar, styledArticleRadioButton, styledArticleSelectOption
}) => {

  return (
    <Wrapper
      styledArticleCalendar={styledArticleCalendar}
      styledArticleRadioButton={styledArticleRadioButton}
      styledArticleSelectOption={styledArticleSelectOption}
      disabledUI={disabledUI}
    >
      <Header>
        <ImageActionNumber src={imgNumberAction} alt={`Number ${imgAlt} in the circle`} />
        <ActionName>{actionName}</ActionName>
      </Header>
      {children}
    </Wrapper>
  )
}