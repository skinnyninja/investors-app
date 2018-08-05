import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants';
import NavMenu, { INavMenuProps } from './NavMenu/NavMenu';

export interface INavProps {
  /**
   * The logo element
   * @default <ZopaLogo color={colors.extended.teal500} />
   */
  logo?: { path: string; element: React.ReactElement<{}> };
  /** Current pathname that comes from history.location.pathname  */
  currentPathname: INavMenuProps['currentPathname'];
  /** The color of links in the menus and sub-menus */
  linksColors?: INavMenuProps['linksColors'];
  /**
   * The background color of the menu
   * @default colors.base.white
   */
  backgroundColor?: string;
  /**
   * The width of the logo container
   * @default 118px
   */
  logoWidth?: string;
}

export interface INavState {
  hasError: boolean;
}

class Nav extends React.Component<INavProps, INavState> {
  public static RightMenu: any;
  public static LeftMenu: any;

  // TODO: Consider refactoring to allow passing items as nested components besides / instead of an items object
  public renderNav(component: any) {
    const { children, currentPathname, linksColors } = this.props;
    const result: any = [];

    React.Children.forEach(children, (child: any) => {
      const childType = child && child.type && child.type.displayName;
      if (childType === component.displayName) {
        result.push(React.cloneElement(child, { currentPathname, linksColors }));
      }
    });

    return result[0];
  }

  public render() {
    const { logo, backgroundColor, logoWidth } = this.props;

    return (
      <SNavLayout backgroundColor={backgroundColor}>
        {this.renderNav(Nav.LeftMenu)}
        <SLogo logoWidth={logoWidth} href={(logo && logo.path) || '/'}>
          {(logo && logo.element) || <></>}
        </SLogo>
        {this.renderNav(Nav.RightMenu)}
      </SNavLayout>
    );
  }
}

Nav.LeftMenu = (props: any) => <NavMenu {...props} />;
Nav.RightMenu = (props: any) => <NavMenu {...props} />;

Nav.LeftMenu.displayName = 'LeftMenu';
Nav.RightMenu.displayName = 'RightMenu';

export const SNavLayout: any = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props: any) => props.backgroundColor || colors.base.white};
  height: 80px;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`;

export const SLogo: any = styled.a`
  display: flex;
  width: ${(props: any) => props.logoWidth || '118px'};
  padding: 15px;
  cursor: pointer;
`;

export default Nav;
