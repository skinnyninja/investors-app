/* tslint:disable-next-line */
import React from 'react';
/* tslint:disable-next-line */
import * as S from './MainTitle.styles';
import Header2 from '../Typography/Header2/Header2';

// tslint:disable-next-line:interface-name
interface TitleProps {
  title: string;
}

export default class MainTitle extends React.Component <TitleProps, string> {
  public static defaultProps: TitleProps = {
    title: '',
  };

  constructor(props: TitleProps) {
    super(props);
  }

  public render() {
    return (
    <S.TitleContainer>
      <div className="container">
        <Header2>{this.props.title}</Header2>
      </div>
    </S.TitleContainer>
    );
  }
}
