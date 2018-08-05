import { css } from 'styled-components';

export type TDeviceSizes = 'tablet' | 'phone' | 'desktop' | string;

const sizes = {
  desktop: 1280,
  phone: 600,
  tablet: 720,
};

export const maxMedia: any = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (style: any) => css`
    @media (max-width: ${sizes[label]}px) {
      ${style};
    }
  `;
  return accumulator;
// tslint:disable-next-line:align
}, {});

export const minMedia: any = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (style: any) => css`
    @media (min-width: ${sizes[label]}px) {
      ${style};
    }
  `;
  return accumulator;
  // tslint:disable-next-line:align
}, {});
