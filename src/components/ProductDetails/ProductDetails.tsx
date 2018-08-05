import React, { PureComponent } from 'react';

import { narConversion, etdConversion } from '../../helpers/';
import Header3 from '../Typography/Header3/Header3';
import LineGraph from '../LineGraph/LineGraph';
import NoDataAvailable from '../NoDataAvailable/NoDataAvailable';
import InvestorsInfoSection from '../InvestorsInfoSection/InvestorsInfoSection';
import { IProducts } from '../../containers/Investors/interface';

// tslint:disable-next-line:interface-name
interface ProductDetailsProps {
  product?: IProducts;
}

export default class ProductDetails extends PureComponent <ProductDetailsProps, {}>{
  public static defaultProps: Partial<ProductDetailsProps> = {
    product: null,
  };

  constructor(props: any) {
    super(props);
  }

  render() {
    const { product_name, deltas, start_date, last_value, last_date, net_annualised_return } = this.props.product;
    const earnedToDate = last_value ? etdConversion(last_value) : ' - ';
    const netAnnualReturn = net_annualised_return ? narConversion(net_annualised_return) : '- ';

    if (deltas === null || deltas.length < 1) return <NoDataAvailable />;

    return (
      <>
        <div className="row">
          <div className="col-12 col-sm-6">
            <Header3>{ product_name } performance</Header3>
            <p className="header__text">Chart shows interest gained from Core
              loan repayments minus defaults over time.</p>
          </div>
          <div className="col-6 col-sm-3">
            <Header3>
              £{earnedToDate} 
            </Header3>
            <p className="header__text">Earned to date</p>
          </div>
          <div className="col-6 col-sm-3">
            <Header3>
              { netAnnualReturn }% 
            </Header3>
            <p className="header__text">Current NAR</p>
          </div>
        </div>

        <LineGraph
          deltas={deltas}
          startDate={start_date}
          endDate={last_date} />

        <InvestorsInfoSection investInfo />
        <InvestorsInfoSection narInfo />
      </>
    );
  }
}
