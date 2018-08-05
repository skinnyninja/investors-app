/* tslint:disable-next-line */
import React, {PureComponent} from 'react';
import { Line } from 'react-chartjs-2';
import * as S from './LineGraphHistory.style';

// made up dumb data until zopa sorts out the api data;
// tslint:disable-next-line:variable-name
const InvestorsLogData = require('../InvestorsLog/InvestorsLogData.json');

export default class LineGraph extends PureComponent <any, any> {
  render() {
    const dataChart = {
      datasets: [
        {
          lineTension: 0,
          data: [
            {
              x: '2017-02-15',
              y: 1,
            }, {
              x: '2017-07-05',
              y: 20,
            }, {
              x: '2017-08-14',
              y: 40,
            }, {
              x: '2017-12-11',
              y: 70,
            }, {
              x: '2018-02-21',
              y: 65,
            }, {
              x: '2018-02-26',
              y: 60,
            },
          ],
          backgroundColor: 'rgba(255, 180, 40, 0.14)',
          borderColor: '#FFB428',
          pointBorderColor: '#FFFFFF',
          pointBackgroundColor: ['#00c8b4', '#4B3CFA', '#4B3CFA', '#4B3CFA', '#F52D5A', '#F52D5A'],
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          pointRadius: 6,
          pointHoverRadius: 8,
        },
      ],
    };

    const options = {
      legend: {
        display: false,
      },
      // bezierCurve: false,
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            displayFormats: {
              month: 'MMM YYYY',
              // quarter: 'YYYY',
            },
            min: 'Feb 2017',
            max: 'March 2018',
          },
        }],
      },
      tooltips: {
        enabled: true,
        borderWidth: 1,
        borderColor: '#CCC',
        backgroundColor: '#FFF',
        titleFontSize: 16,
        titleFontColor: '#0066ff',
        bodyFontColor: '#000',
        bodyFontSize: 0,
        displayColors: false,
        xPadding: 10,
        yPadding: 10,
        callbacks: {
          title: (tooltipItem: any) => {
            return InvestorsLogData[tooltipItem[0].index].desc;
          },
          labelColor: (tooltipItem: any, chart: any) => {
            const color = dataChart.datasets[0].pointBackgroundColor[tooltipItem.index];
            return {
              borderColor: color,
              backgroundColor: '#FFFFFF',
            };
          },
        },
      },
    };

    return (
      <S.LineGraphContainer>
        <Line data={dataChart} options={options} />
      </S.LineGraphContainer>
    );
  }
}
