import React, { Component } from 'react';
import Header3 from '../Typography/Header3/Header3';
import * as S from './InvestorsInfoSection.style';

interface InvestorsInfoSectionProps {
  narInfo?: boolean;
  investInfo?: boolean;
}

export default class InvestorsInfoSection extends Component <InvestorsInfoSectionProps, any> {
  public static defaultProps: Partial<InvestorsInfoSectionProps> = {
    investInfo: false,
    narInfo: false,
  };

  render() {
    const { investInfo, narInfo } = this.props;
    return (
      <S.Grid>
        { investInfo &&
          <div className="row">
            <div className="col-12">
              <Header3>What should you expect to see</Header3>
            </div>
            <div className="col-md-4">
              <img src={'img/graph1.png'} />
              <p>
                Now that you've been investing with Zopa for a year, 
                you'll probably see your earnings rising in a ‘sawtooth' pattern.
              </p>
            </div>
            <div className="col-md-4">
              <img src={'img/graph2.png'} />
              <p>
                Unlike a traditional savings product, you won't earn interest evenly. 
                Borrowers make repayments throughout the month, so you'll probably see a bumpy upwards trend.
              </p>
            </div>
            <div className="col-md-4">
              <img src="img/graph3.png" />
              <p>
                Occasionally one of your borrowers may default on their loan, 
                causing a dip in your earnings. Don't worry!
              </p>
              <p>
                We typically expect 4 to 5 borrowers out of every 100 to default over the course of their loans. 
                And we factor this into your projected return. 
              </p>
              <p>
                <a href="https://www.youtube.com/watch?v=taEcfBuoUDE">Learn more about defaults and returns at Zopa.</a>
              </p>
            </div>
          </div>
        }
        { narInfo &&
          <div className="row">
            <div className="col-12">
              <Header3>What is NAR</Header3></div>
              <div className="col-md-4">
                <img src="img/graph5 copy 2.png" />
                <p>
                  We calculate your Net Annualised Return (NAR) using a minimum of a year's 
                  worth of data on your investment. 
                </p>
                <p>
                  We look at your earnings and invested amount every day to come to this annualised percentage. 
                  We think it's the best rate for understanding investment performance at Zopa.
                </p>
              </div>
              <div className="col-md-4">
                <img src="img/graph5 - targets.png" />
                <p>
                  Your NAR might vary from your projected return early on due to the timing of 
                  your defaults. Sometimes it will dip below target before increasing again as you continue to earn 
                  interest and make recoveries on your defaulted loans. 
                </p>
                <p>Over time, we expect your NAR to be in line with the target return.</p>
              </div>
              <div className="col-md-4">
                <img src="img/graph5.png" />
                <p>
                  Remember that Zopa is an investment product, and you could earn more or less than 
                  the target return. However, the longer you invest with Zopa and the more diversified your investment, 
                  the more likely you are to earn a rate in line with target.
                </p>
                <p>
                  You can increase your level of diversification by reinvesting your repayments 
                  and investing small amounts of money regularly.
                </p>
              </div>
          </div>
        }
      </S.Grid>
    );
  }
}
