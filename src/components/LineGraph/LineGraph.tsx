/* tslint:disable-next-line */
import React, {PureComponent} from 'react';
/* tslint:disable-next-line */
import { Line } from 'react-chartjs-2';
import { newDateScale, etdConversion } from '../../helpers/';
import { fonts } from '../../constants';
import * as S from './LineGraph.style';

/* tslint:disable-next-line */
interface LineGraphProps {
  deltas?: number[];
  startDate?: string;
  endDate?: string;
}

export default class LineGraph extends PureComponent <LineGraphProps, any> {
  constructor(props: any) {
    super(props);
  }

  public static defaultProps: Partial<LineGraphProps> = {
    deltas: [],
    startDate: '',
    endDate: '',
  };

  lineGraphFormat = (deltas: number[], startDate: string) => {
    const dataArr: any = [];
    let delta = 0;

    deltas.map((digit: any, index: number) => {
      delta = delta + digit;
      dataArr.push({
        x: newDateScale(startDate, index),
        y: delta,
      });
    });

    return dataArr;
  }

  render() {
    const { deltas, startDate, endDate } = this.props;

    const dataChart = {
      datasets: [
        {
          lineTension: 0,
          data: this.lineGraphFormat(deltas, startDate),
          backgroundColor: 'rgba(255, 180, 40, 0.14)',
          borderColor: '#FFB428',
          pointBorderColor: 'rgba(220,220,220,0)',
          pointStrokeColor: 'rgba(220,220,220,0)',
          pointHighlightFill: 'rgba(220,220,220,0)',
          pointHighlightStroke: 'rgba(220,220,220,0)',
          pointRadius: 0,
          pointHitRadius: 20,
          pointHoverRadius: 0,
        },
      ],
    };

    const options = {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            displayFormats: {
              month: 'MMM YYYY',
            },
            min: startDate,
            max: endDate,
          },
          ticks: {
            fontFamily: fonts.alverata,
            fontSize: 14,
          },
        }],
        yAxes: [{
          beginAtZero: true,
          ticks: {
            callback: function(value: any, index: any, values: any) {
              return '£' + value;
            },
            fontFamily: fonts.alverata,
            fontSize: 15,
          },
        }],
      },
      tooltips: {
        enabled: true,
        borderWidth: 1,
        borderColor: '#CCC',
        backgroundColor: '#FFF',
        titleFontSize: 0,
        titleFontColor: '#0066ff',
        titleMarginBottom: -2,
        bodyFontColor: '#000',
        bodyFontSize: 15,
        bodyFontFamily: fonts.alverata,
        displayColors: false,
        xPadding: 10,
        yPadding: 10,
        callbacks: {
          label: function(tooltipItem: any, data: any) {
            let label = data.datasets[tooltipItem.datasetIndex].label || '';
            if (label) label += ': ';
            label += Math.round(tooltipItem.yLabel * 100) / 100;
            return '£' + etdConversion(label);
          },
        },
      },
    };

    if (deltas.length < 1) return null;
  
    return (
      <S.LineGraphContainer>
        <Line data={dataChart} options={options} />
      </S.LineGraphContainer>
    );
  }
}
