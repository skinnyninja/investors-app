import * as React from 'react';
import styled from 'styled-components';
import { maxMedia, TDeviceSizes } from './responsiveness';
import MenuItem, { ISMenuItem } from './MenuItem/MenuItem';
import SubMenu from './SubMenu/SubMenu';

export interface IBasicMenuItem {
  /**
   * An identifier to be used for 'key' prop
   */
  id: string;
  /**
   * The name and display text of the link if (hideName === false)
   */
  name: string;
  /**
   * The uri path for the item.
   */
  path?: string;
  /**
   * This will ignore path, will render the link element like `<Link>{name}</Link>`
   */
  element?: React.ReactElement<any>;
}

export interface IMenuItem extends IBasicMenuItem {
  /**
   * An array of uri strings to define what pages to show the link on.
   * If empty, the item will appear on all pages.
   */
  pagesToShowOn?: string[];
  /**
   * To hide the name in case only the passed Icon should be displayed.
   * @default false
   */
  hideName?: boolean;
  /**
   * Specifies the breakpoint at and below which the item should disappear
   */
  hideOn?: TDeviceSizes;
  /**
   * This will determin whether the item is active or inactive and change the appearance as such
   */
  active?: boolean;
  /**
   * Takes two items: `{showOn?: 'phone', element: <Icon />}`, the componet can be an `<img />` or `<svg />`
   */
  icon?: {
    showOn?: TDeviceSizes;
    element: React.ReactElement<any>;
  };
  /**
   * When provided, the item will ignore 'path' and will display a chevron
   * to display the sub-menu on click.
   */
  subMenu?: {
    /**
     * The list of sub-menu  items to display vertically under the main nav item
     */
    items: IMenuItem[];
    /**
     * Determins the position of the sub-menu . By default it's positioned right.
     * @default false
     */
    left?: boolean;

    /**
     * Sets the subMenu to fixed position and expands it across the screen width
     * @default true
     */
    expand?: boolean;
  };
}

export interface INavMenuProps {
  showOn: TDeviceSizes;
  items: IMenuItem[];
  currentPathname: string;
  linksColors?: ISMenuItem['linksColors'];
}

export default (props: INavMenuProps) => {
  const filterOutItemsByPages = (item: IMenuItem) =>
    !item.pagesToShowOn ||
    (Array.isArray(item.pagesToShowOn) && item.pagesToShowOn.indexOf(props.currentPathname) > -1);

  const createSubMenu = (subMenu: IMenuItem['subMenu']) => (
    <SubMenu
      items={subMenu.items.filter(filterOutItemsByPages)}
      left={subMenu.left}
      expand={subMenu.expand !== false}
    />
  );

  const createMenuItemContentWithIcon = (iconElement: any, menuItem: any, showOn: any) => (
    <SMenuItemContent showOn={showOn}>
      {iconElement}
      {menuItem}
    </SMenuItemContent>
  );

  const createNavMenu = (items: any, linksColors: any, currentPathname: any) => {
    const filteredItems = items.filter(filterOutItemsByPages);
    return filteredItems.map((item: IMenuItem) => {
      const { id, name, hideOn, hideName, path, subMenu, icon } = item;
      const hasSubmenu: any = item.subMenu !== void 0;
      let element = item.element ? item.element : <span />;

      const menuItemProps: any = {
        active: path !== currentPathname || hasSubmenu,
        hasSubmenu: hasSubmenu,
        hideChevronOn: icon ? icon.showOn : undefined,
        hideOn: hideOn,
        id: id,
        linksColors: linksColors,
      };

      if (menuItemProps.active && path && path.length > 0) {
        element = <a href={path} />;
      }

      const menuItem = !hideName ? React.cloneElement(element, {}, [name]) : null;
      const iconElement = icon ? React.cloneElement(icon.element, { active: false }) : null;

      const menuItemContent = icon ? createMenuItemContentWithIcon(iconElement, menuItem, icon.showOn) : menuItem;

      return (
        <MenuItem key={menuItemProps.id} {...menuItemProps}>
          {subMenu && createSubMenu(subMenu)}
          {menuItemContent}
        </MenuItem>
      );
    });
  };

  return (
    <SNavMenu showOn={props.showOn}>
      <SNavUL>{createNavMenu(props.items, props.linksColors, props.currentPathname)}</SNavUL>
    </SNavMenu>
  );
};

interface INavMenu {
  showOn?: TDeviceSizes;
}

export const SNavMenu: any = styled.div`
  display: none;
  ${(props: INavMenu) => (props.showOn ? maxMedia[props.showOn]`display: flex;` : `display: flex;`)};
`;

export const SNavUL: any = styled.ul`
  list-style: none;
  font-size: 0;
  display: flex;
  padding: 0;
  margin: 0;
  > li {
    margin-left: initial;
    margin-bottom: 0;
  }
`;

interface IMenuItemContent {
  inactiveImage: string;
  activeImage: string;
  active?: boolean;
  showOn?: TDeviceSizes;
}

export const SMenuItemContent: any = styled.span`
  > svg {
    display: none;
  }
  ${(props: IMenuItemContent) =>
    props.showOn
      ? maxMedia[props.showOn]`
      > span {
          display: none;
      }
      > svg {
          display: inline;
      }`
      : ``};
`;
