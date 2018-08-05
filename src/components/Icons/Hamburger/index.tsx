import * as React from 'react';
import { colors } from '../../../constants/';

export interface IHamburgerProps {
  /**
   * The width and height size
   * @default 40px
   */
  size?: string;
  /**
   * Targets the svg's `fill` attribute
   * @default colors.extended.blue300
   */
  activeColor?: string;
  /**
   * Targets the svg's `fill` attribute
   * @default colors.extended.blue500
   */
  inactiveColor?: string;
  /** For the default active state */
  active?: boolean;
}

export interface IHamburgerState {
  active: boolean;
}

export default class Hamburger extends React.Component<IHamburgerProps, IHamburgerState> {
  constructor(props: any) {
    super(props);

    this.state = {
      active: !!this.props.active,
    };
  }

  public toggleActive = () => {
    this.setState({ active: !this.state.active });
  };

  public render() {
    const {
      size = '40px',
      active = false,
      activeColor = colors.extended.blue300,
      inactiveColor = colors.extended.blue500,
    } = this.props;
    const color = active ? activeColor : inactiveColor;

    return (
      <svg width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path
          fill={color}
          // tslint:disable-next-line:max-line-length
          d="M8 36h32c1.1 0 2-.9 2-2s-.9-2-2-2H8c-1.1 0-2 .9-2 2s.9 2 2 2zm0-10h32c1.1 0 2-.9 2-2s-.9-2-2-2H8c-1.1 0-2 .9-2 2s.9 2 2 2zM6 14c0 1.1.9 2 2 2h32c1.1 0 2-.9 2-2s-.9-2-2-2H8c-1.1 0-2 .9-2 2z"
        />
      </svg>
    );
  }
}
