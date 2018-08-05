import * as React from 'react';
import { colors } from '../../constants';

type large = string;
type medium = string;

export interface ILoader {
  secondary?: boolean;
  size?: large | medium;
}

const styleContainer: {} = {
  background: colors.extended.blue800,
  padding: '70px',
  textAlign: 'center',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Loader = ({ secondary, size }: ILoader): any => {
  return (
    <div style={styleContainer}>
      <svg width={'100px'}
          height={'90px'}
          viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"
          stroke={!secondary ? '#fff' : '#8177FC'}>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18"/>
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"/>
            </path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Loader;
