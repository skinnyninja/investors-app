import * as React from 'react';
import styled, { css } from 'styled-components';
// import * afrom '../../../../../public/images/nav-chevron-down.svg';
import { colors } from '../../../../constants';
import { maxMedia, TDeviceSizes } from '../responsiveness';

export interface IMenuItemState {
  open: boolean;
}

export interface IMenuItemProps extends ISMenuItem {
  // tslint:disable-next-line:prefer-array-literal
  children: Array<React.ReactElement<any>>;
  hideChevronOn?: TDeviceSizes;
  id: string;
}

export default class MenuItem extends React.Component<IMenuItemProps, IMenuItemState> {
  public state = {
    open: false,
  };

  private ref: any;

  public setWrapperRef = (node: any) => {
    this.ref = node;
  };

  public closeSubMenu = () => {
    this.setState({ open: false });
  };

  public toggleSubMenu = () => {
    this.setState({ open: !this.state.open });
  };

  public closeOrToggleSubMenu = (event: any) => {
    if (this.ref && !this.ref.contains(event.target)) {
      this.closeSubMenu();
    } else {
      this.toggleSubMenu();
    }
  };

  public componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
    document.addEventListener('scroll', this.closeSubMenu);
  }

  public componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
    document.removeEventListener('scroll', this.closeSubMenu);
  }

  public handleClick = (event: any) => {
    if (this.ref && !this.ref.contains(event.target)) {
      this.closeSubMenu();
    }
  };

  public render() {
    const { id, children, ...rest } = this.props;

    return (
      <SMenuItem
        active={this.state.open}
        openSubmenu={this.state.open}
        innerRef={this.setWrapperRef}
        onClick={this.closeOrToggleSubMenu}
        hideChevronOn={this.props.hideChevronOn}
        {...rest}
      >
        {(Array.isArray(children) &&
          React.Children.map(children, (child, index) => {
            interface INewProps {
              key?: string;
              active?: boolean;
            }

            const newProps: INewProps = { key: id + `_${index}` };
            if (child && typeof child === 'object' && typeof child.type === 'function') {
              // Avoiding HTML elements
              newProps.active = this.state.open;
            }
            return (React.isValidElement(child) && React.cloneElement(child as any, newProps)) || child;
          })) ||
          children}
      </SMenuItem>
    );
  }
}

export interface ISMenuItem {
  active?: boolean;
  openSubmenu?: boolean;
  hasSubmenu?: boolean;
  hideOn?: TDeviceSizes;
  hideChevronOn?: TDeviceSizes;
  linksColors?: { active: string; inactive: string };
}

const activeLinkColor = (props: ISMenuItem) => (props.linksColors ? props.linksColors.active : colors.extended.blue500);
const inctiveLinkColor = (props: ISMenuItem) =>
  props.linksColors ? props.linksColors.inactive : colors.extended.blue300;

export const SLi: any = styled.li`
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s ease;
  text-decoration: none;
  cursor: pointer;

  a,
  span {
    cursor: pointer;
    text-decoration: none;

    ${(props: ISMenuItem) =>
      (props.active &&
        `
        color: ${activeLinkColor(props)};
        cursor: default;
      `) ||
      ` color: ${inctiveLinkColor(props)};`};

    &:hover {
      cursor: pointer;
      color: ${(props: ISMenuItem) => inctiveLinkColor(props)};
    }
  }
`;

const SRotatingArrow: any = css`
  &:after {
    position: relative;
    content: ' ';
    background: url() no-repeat;
    background-size: 14px 8px;
    width: 14px;
    height: 8px;
    display: inline-block;
    right: -2px;
    align-self: center;
    margin-left: 6px;
    transition: all 0.2s ease;
    transform: rotate(0deg);
    ${(props: ISMenuItem) => (props.hideChevronOn ? maxMedia[props.hideChevronOn]`display: none;` : '')};
    margin: 0 8px;
  }
`;

const showSubmenu: any = css`
  &:after {
    transform: rotate(180deg);
  }
  ul {
    opacity: 1;
    margin-right: 2px;
    visibility: visible;
    z-index: 100;
    user-select: all;
    transform: translateY(0);
  }
`;

const SMenuItem = SLi.extend`
  flex: 1 0 auto;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  padding: 28px 14px;
  position: relative;
  align-self: center;

  ${(props: ISMenuItem) => (props.hasSubmenu ? SRotatingArrow : ``)};
  ${(props: ISMenuItem) => (props.openSubmenu && props.hasSubmenu ? showSubmenu : ``)};
  ${(props: ISMenuItem) => (props.hideOn ? maxMedia[props.hideOn]`display: none;` : ``)};

  ${maxMedia.phone`padding: 11px;`};
`;
