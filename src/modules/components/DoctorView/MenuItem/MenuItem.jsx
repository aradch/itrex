import { Item, StyledNavLink } from './styles/menuItem'


export const MenuItem = ({ linkText, active }) => {
  return (
    <Item active={active}>
      <StyledNavLink active={active} to="#">
        {linkText}
      </StyledNavLink>
    </Item>
  )
}