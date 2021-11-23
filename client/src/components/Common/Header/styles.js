import Styled from 'styled-components'
import {color} from "../../../helpers";

export const HeaderStyleWrapper = Styled.nav`
    direction:ltr;
    flex-wrap: wrap;
    align-items: center !important;
    justify-content: space-between !important;
    background-color: ${color('gray', 'dark')};
}
`;

export const NameStyleWrapper = Styled.span`
color: ${color('neutral', 'light')};
`;

export const ExitStyleWrapper = Styled.div`
      display: flex!important;
       flex-basis: auto;
`;
