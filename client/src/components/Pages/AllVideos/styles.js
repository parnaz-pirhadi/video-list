import Styled from 'styled-components';
import {device} from "../../../helpers";

export const StyledBoardsWrapper = Styled.div`
  display: flex;
   @media only screen and ${device.screen}{
       justify-content:center;
    }
`;

export const StyledBoardsListWrapper = Styled.div`
  padding: 1.2rem;
  width: 25rem;
  max-width: 100%;
`;



