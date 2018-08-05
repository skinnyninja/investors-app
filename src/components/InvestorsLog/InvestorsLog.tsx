/* tslint:disable-next-line */
import React, {PureComponent} from 'react';
import Header3 from '../Typography/Header3/Header3';

import './InvestorsLog.scss';
// made up dumb data until zopa sorts out the api data;
const investorsLogJson = require('./InvestorsLogData.json');

export default class InvestHistory extends PureComponent <{}, {}> {
  render() {
    return (
      <div className="investlog">
        <Header3>Plus history</Header3>
        {
          investorsLogJson.map((data: any, index: number) => {
            const { color, date, desc, value } = data;
            return (
              <div className="investlog__row row no-gutters" key={index}>
                <p className="investlog__date col-6 col-sm-4">
                  <span className={`investlog__icon investlog__icon--${color}`} /> {date}
                </p>
                <p className="investlog__desc col-6 col-sm-5">{desc}</p>
                <p className="investlog__value col-12 col-sm-3">{value}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
}
