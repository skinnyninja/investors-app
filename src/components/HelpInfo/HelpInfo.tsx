/* tslint:disable-next-line */
import React from 'react';
/* tslint:disable-next-line */
import * as S from './HelpInfo.styles';
import Header3 from '../Typography/Header3/Header3';

import './HelpInfo.scss';

export default class HelpInfo extends React.Component <{}> {
  render() {
    return (
    <S.HelpContainer>
      <S.HelpBodyContainer>
        <Header3>We're here to help</Header3>
      </S.HelpBodyContainer>
      <S.HelpBodyContainer>
        <div>
          <p>
            <S.HelpLink href="mailto:contactus@zopa.com">contactus@zopa.com</S.HelpLink>
          </p>
          <p>
            <S.HelpLink href="tel:02075806060">020 7580 6060</S.HelpLink> for loans
          </p>
          <p>
            <S.HelpLink href="tel:02072918331">020 7291 8331</S.HelpLink> for investments
          </p>
        </div>
        <div>
          <p>
            Monday to Thursday (8am to 8pm), <br /> and Friday (8am to 5pm)
          </p>
          <S.HelpCaption>
            We can't take applications over the phone. UK residents only. <br />
            Calls may be monitored or recorded.
          </S.HelpCaption>
        </div>
      </S.HelpBodyContainer>
    </S.HelpContainer>
    );
  }
}
