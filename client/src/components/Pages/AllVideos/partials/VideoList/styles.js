import Styled from 'styled-components'
import {color} from "../../../../../helpers";

export const StyledBoardsList = Styled.div`
    min-height: 100vh;
  > * {
    &:not(:last-child){
      margin-bottom: 1.8rem;
      font-size:1rem;
      min-height: 100vh;
`;
export const StyledBoardItem = Styled.div`
    color: ${color('neutral', 'dark')};
    border: 1px solid ${color('gray', 'light')};;
    padding: 1rem;
    border-radius: 15px;
    background-color: ${color('gray', 'light')};
  
`;
