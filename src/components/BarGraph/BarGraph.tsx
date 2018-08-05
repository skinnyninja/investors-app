/* tslint:disable-next-line */
import React, { PureComponent } from 'react';

import Header3 from '../Typography/Header3/Header3';
import * as S from './BarGraph.style';

// tslint:disable-next-line:interface-name
interface BarGraphState {
  details: any[];
  barActive: any;
}

export default class Bar extends PureComponent <{}, BarGraphState> {
  constructor(props: any) {
    super(props);

    this.state = {
      details: [{
        rate: '9%',
        title: 'Low performers',
        text: 'NAR < 3.16%',
      }, {
        rate: '75%',
        title: 'Average performers',
        text: 'NAR 3.1% - 5.1%',
      }, {
        rate: '16%',
        title: 'High performers',
        text: 'NAR > 5.1%',
      }],
      barActive: {
        rate: '9%',
        title: 'Low performers',
        text: 'NAR < 3.16%',
      },
    };
  }

  handleToggleChart = (activeBar: string) => {
    this.setState({ barActive: activeBar });
  }

  render() {
    const { details, barActive } = this.state;

    if (!details) return null;

    return (
      <S.BarGraphContainer>
        <Header3>How does Core perform for similar investors</Header3>
        <p className="header__text">
        The chart below shows how investors with similar Core investments
         to you compare against the current Core target rate of 4.1%.
        </p>
        <S.BarGraph>
          {
            details.map((detail: any, index: number) => {
              const activeBarClass = detail.title === barActive ? 'bargraph__active' : 'bargraph';
              return <S.BarGraphStack
                className={activeBarClass}
                key={index}
                style={{ width: detail.rate }}
                onClick={() => this.handleToggleChart(detail.title)}
              />;
            })
          }
        </S.BarGraph>

        <div className="row no-gutter">
          {
            details.map((detail: any, index: number) => {
              const activeClass = detail.title === barActive ? 'heavy' : '';
              return (
                <div className="col-4" key={index}>
                  <S.PercentageText onClick={() => this.handleToggleChart(detail.title)} >
                    <h3 className={activeClass}>{detail.rate}</h3>
                    <S.Text> {detail.title}  <small>{detail.text}</small> </S.Text>
                    { detail.title === barActive &&
                      <S.LabelActive><span>&uarr;</span>You are here</S.LabelActive>
                    }
                  </S.PercentageText>
                </div>
              );
            })
          }
        </div>
      </S.BarGraphContainer>
    );
  }
}
