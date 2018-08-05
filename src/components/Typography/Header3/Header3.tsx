import * as React from 'react';
import styled from 'styled-components';
import { fonts } from '../../../constants';

export interface IHeader3Props extends React.HTMLAttributes<HTMLElement> {
  children?: any;
}

export const SHeader: any = styled.h3`
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0;
  font-family: ${fonts.alverata};
`;

const Header3 = (props: IHeader3Props) => {
  return <SHeader {...props}>{props.children}</SHeader>;
};

export default Header3;
