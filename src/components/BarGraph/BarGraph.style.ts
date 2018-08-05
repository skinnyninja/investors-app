// tslint:disable-next-line:import-name
import styled from 'styled-components';

// tslint:disable-next-line
export const BarGraphContainer: any = styled.div`
  margin-top: 40px;
  margin-bottom: 50px;
`;

// tslint:disable-next-line:variable-name
export const PercentageText: any = styled.div`
  text-align: center;

  & > h3 {
    font-family: "Alverata";
    font-weight: 800, 900;
    font-size: 24px;
    font-weight: 500;
    color: #1C2139;
    margin-top: 8px;
    margin-bottom: 8px;
    text-align: center;
  }

  & > h3.heavy {
    font-size: 40px;
  }

  & > p {
    text-align: center;
    margin: 12px 0 0;
    line-height: 18px;

    & > small {
      display: block;
    }
  }
`;

// tslint:disable-next-line:variable-name
export const Text: any = styled.p`
  margin: -15px 0 0;
  padding: 0;
  font-size: 14px;
`;

// tslint:disable-next-line:variable-name
export const BarGraph: any = styled.div`
  display: flex;
  margin: 30px 0 20px;

  & > div:nth-child(1) {
    background: #F52D5A;
  }
  & > div:nth-child(2) {
    background: #00c8b4;
  }
  & > div:nth-child(3) {
    background: #00B9A5;
  }
`;

// tslint:disable-next-line:variable-name
export const BarGraphStack: any = styled.div`
  height: 250px;
  &.bargraph {
    opacity: 0.9;
  }
  &.bargraph__active {
    opacity: 1;
  }
`;

// tslint:disable-next-line:variable-name
export const LabelActive: any = styled.span`
  margin-top: 15px;
  font-weight: bold;
  display: block;

  & > span {
    font-size: 20px;
    display: block;
    height: 17px;
  }
`;
