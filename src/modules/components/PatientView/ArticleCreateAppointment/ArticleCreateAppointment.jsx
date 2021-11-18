import { Wrapper, Header, ImageActionNumber, ActionName } from './styles/articleCreateAppointment'


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