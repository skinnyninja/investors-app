/* tslint:disable-next-line */
import React, { Component } from 'react';
import Header3 from '../Typography/Header3/Header3';
import * as S from './InfoCoreDetails.styles';

export default class InfoCoreDetails extends Component {
  render() {
    return (
      <S.InfoContainer>
        <Header3>Your Core investment is performing below average</Header3>
        <ul>
          <li>So far, you've experienced a higher rate of defaults than the product average</li>
          <li>Most defaults occur between 9 and 18 months into your investment, so you
              &amp;<strong>might continue to see a few defaults in the coming months</strong></li>
          <li>
            Remember, Zopa Core is a investment product, so returns can vary from the target rate.
             However, over the long term, we expect your investment
             <strong>to trend towards the target</strong>, helped by our matching algorithm
          </li>
        </ul>
        <p>
          Investors with more microloans perform closer to the product average. Learn how you can
           increase your diversification and experience a smoother ride with your investment.
        </p>
      </S.InfoContainer>
    );
  }
}
