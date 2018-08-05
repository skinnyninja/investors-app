import * as React from 'react';
import styled from 'styled-components';
import { fonts } from '../../../constants';

export interface IHeader1Props extends React.HTMLAttributes<HTMLElement> {
  children?: string;
}

export const SHeader: any = styled.h1`
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0;
  font-family: ${fonts.alverata};
`;

const Header1 = (props: IHeader1Props) => {
  return <SHeader {...props}>{props.children}</SHeader>;
};

export default Header1;
