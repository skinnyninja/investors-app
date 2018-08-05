import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../../../constants';
import { maxMedia } from '../responsiveness';
import { SLi } from '../../NavMenu/MenuItem/MenuItem';
import { IBasicMenuItem } from '../../NavMenu/NavMenu';

export interface ISubMenuProps {
  items: IBasicMenuItem[];
  expand: boolean;
  left?: boolean;
}

export default ({ items, left, expand }: ISubMenuProps) => {
  const defaultLink = (name: string, path?: string) => (path ? <a href={path}>{name}</a> : name);

  const navItemsList = items.map(({ id, path, element, name }: IBasicMenuItem) => (
    <SSubMenuItem key={id} active={path || element} expand={expand}>
      {element ? element : defaultLink(name, path)}
    </SSubMenuItem>
  ));

  return <SSubMenuUL left={left}>{navItemsList}</SSubMenuUL>;
};

const wideSubmenu = css`
  box-shadow: inset 0 0 0 0 rgba(214, 215, 222, 0.75), 1px 2px 4px 0px rgba(0, 0, 0, 0.06);
  border-top: 1px solid rgba(214, 215, 222, 0.75);
  position: fixed;
  width: 100%;
  border-radius: 0;
  padding: 0;
  margin: 0;
`;

const wideSubItem = css`
  padding: 0.9rem 0;
  margin: 0 0.9rem;
  border-bottom: 1px rgba(214, 215, 222, 0.75) solid;
  &:last-child {
    border-bottom: 0;
  }
`;

interface ISubMenu {
  left?: boolean;
  expand: boolean;
}

const SSubMenuUL: any = styled.ul`
  position: absolute;
  top: 72px;
  ${(props: ISubMenu) => (!props.expand && !props.left ? 'right: -2px' : 'left: 2px;')};
  background: ${colors.base.white};
  box-shadow: inset 0 0 0 1px rgba(214,215,222,0.75),0 2px 4px 0 rgba(0,0,0,0.06);
  border-radius: 4px;
  padding: 8px 0;
  transition: all 0.1s ease-in-out;
  visibility: hidden;
  z-index: -1;
  transform: translateY(-10%);
  min-width: 150px;
  flex-direction: column;
  ${(props: ISubMenu) => (props.expand ? maxMedia.phone(wideSubmenu) : '')};

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 1px;
    z-index: -1;
    right: 1.7%;
    box-sizing: border-box;
    border: 8px solid black;
    border-color: transparent transparent ${colors.base.white} ${colors.base.white};
    transform-origin: 0 0;
    transform: rotate(135deg);
    box-shadow: -1px 1px 0 0 ${colors.neutral.neutral50};
    ${(props: ISubMenu) => (props.left && `left: 2.70em;`) || ``};
    ${(props: ISubMenu) => (!props.left && maxMedia.phone`right: 0;`) || ``};
  }
}
`;

const SSubMenuItem = SLi.extend`
  display: block;
  padding: 8px 16px;
  margin-left: 0;
  color: ${colors.extended.blue300};
  line-height: 24px;
  &::-moz-selection {
    background: transparent;
  }
  &::selection {
    background: transparent;
  }
  a::-moz-selection {
    background: transparent;
  }
  a::selection {
    background: transparent;
  }
  ${(props: ISubMenu) => (props.expand ? maxMedia.phone(wideSubItem) : '')};
`;
