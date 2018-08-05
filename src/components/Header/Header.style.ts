// tslint:disable-next-line:import-name
import styled from 'styled-components';
import { colors } from '../../constants';

export const Header = styled.div`
  & > nav:first-child ul > li:last-child > span > span {
    color: ${colors.extended.blue500};
  }
`;

export const SubHeader = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
  background-color: #F6F6F6;
  & > nav > a {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #0F0F46;
    font-size: 22px;
    text-decoration: none;
  }
  & > nav li > span {
    color: ${colors.extended.blue500};
  }
`;
