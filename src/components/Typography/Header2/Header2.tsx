import * as React from 'react';
import styled from 'styled-components';
import { fonts } from '../../../constants';

export interface IHeader2Props extends React.HTMLAttributes<HTMLElement> {
  children?: string;
}

export const SHeader: any = styled.h2`
  font-weight: normal;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 0;
  font-family: ${fonts.alverata};
`;

const Header2 = (props: IHeader2Props) => {
  return <SHeader {...props}>{props.children}</SHeader>;
};

export default Header2;
