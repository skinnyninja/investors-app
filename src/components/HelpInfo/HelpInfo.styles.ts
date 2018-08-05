// tslint:disable-next-line:import-name
import styled from 'styled-components';
import { colors, fonts } from '../../constants';

// tslint:disable-next-line
export const HelpContainer: any = styled.div`
  padding: 50px 0 70px;
  background-color: ${colors.neutral.neutral25};
  margin: auto;

  & > h3 {
    margin: 50px 0 20px 0;
  }
`;

// tslint:disable-next-line
export const HelpBodyContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 70%;

  & > div {
    > p {
      margin-bottom: 20px;
    }
  }
`;

export const HelpLink: any = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: 'bold';
  color: ${colors.primary.blue500};

  &:hover {
    opacity: 0.88;
  }

  &:active {
    opacity: 0.72;
  }

  & > svg {
    margin-left: 6px;
    top: 2px;
    position: relative;
  }
`;

export const HelpCaption: any = styled.p`
  font-weight: normal;
  color: ${colors.primary.navy800};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0;
  font-family: ${fonts.openSans};
`;

