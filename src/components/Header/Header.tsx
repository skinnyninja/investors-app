/* tslint:disable-next-line */
import React from 'react';
import Nav from './Nav';
import ProfileIcon from '../Icons/Profile';
import HamburgerIcon from '../Icons/Hamburger';
import { URI_BASE_ZOPA, URI_BASE_PIAZZA, URI_BASE_ZEOSHUB, colors } from '../../constants';

/* tslint:disable-next-line */
import * as S from './Header.style';

export default class Header extends React.Component <{}, {}> {
  public render() {
    const linksColors = {
      active: colors.extended.teal500,
      inactive: colors.extended.blue500,
    };

    const mainNav = {
      currentPathname: '/',
      logo: {
        path: URI_BASE_ZOPA,
        element: <></>,
      },
      logoWidth: '148px',
      linksColors: linksColors,
      backgroundColor: colors.base.white,
    };

    const mainNavLinks = [
      {
        id: 'nav-see-what',
        name: 'See what else we do',
        path: URI_BASE_ZEOSHUB + '#what-else',
        showOn: 'tablet',
        hideOn: 'phone',
      },
      {
        id: 'nav-help',
        name: 'Help',
        showOn: 'tablet',
        hideOn: 'phone',
        subMenu: {
          items: [
            { id: 'submenu-profile', name: 'Loans FAQs', path: URI_BASE_ZOPA + '/loans/faq' },
            { id: 'submenu-logout', name: 'Investing FAQs', path: URI_BASE_ZOPA + '/lending/faq' },
          ],
        },
      },
      {
        id: 'nav-dashboard',
        name: 'Dashboard',
        path: URI_BASE_ZEOSHUB,
        hideOn: 'tablet',
      },
      {
        id: 'nav-profile',
        name: 'You',
        icon: {
          showOn: 'tablet',
          element: <ProfileIcon activeColor={colors.primary.navy800} inactiveColor={colors.primary.navy800} />,
        },
        subMenu: {
          items: [
            { id: 'submenu-profile', name: 'Profile', path: URI_BASE_PIAZZA + '/profile' },
            { id: 'submenu-logout', name: 'Logout', path: URI_BASE_ZEOSHUB + '/logout' },
          ],
        },
      },
    ];

    const mainNavPhone = [
      {
        id: 'nav-hamburger',
        name: 'hamburger',
        hideName: true,
        icon: {
          showOn: 'phone',
          // tslint:disable-next-line:max-line-length
          element: <HamburgerIcon activeColor={colors.primary.navy800} inactiveColor={colors.primary.navy800} />,
        },
        subMenu: {
          items: [
            { 
              id: 'hamburger-submenu-see-what',
              name: 'See what else we do',
              path: URI_BASE_ZOPA + '#what-else' },
            { 
              id: 'hamburger-submenu-profile',
              name: 'Loans FAQs',
              path: URI_BASE_ZOPA + '/loans/faq' },
            { 
              id: 'hamburger-submenu-logout',
              name: 'Investing FAQs',
              path: URI_BASE_ZOPA + '/lending/faq' },
            { 
              id: 'hamburger-submenu-summary',
              name: 'Summary',
              path: URI_BASE_PIAZZA + '/lender/lending_summary/standard' },
            { 
              id: 'hamburger-submenu-statement',
              name: 'Statements',
              path: URI_BASE_PIAZZA + '/lender/statement/standard' },
            { 
              id: 'hamburger-submenu-manage',
              name: 'Manage',
              path: URI_BASE_PIAZZA + '/lender/manage_lending/standard' },
            { 
              id: 'hamburger-submenu-loan',
              name: 'Loan book',
              path: URI_BASE_PIAZZA + '/lender/loan_book/standard' },
          ],
          left: true,
        },
      },
    ];

    // tslint:disable-next-line:variable-name
    const subNav = {
      currentPathname: '/',
      logo: {
        element: <>Investments</>,
        path: URI_BASE_PIAZZA + '/lender/lending_summary/standard',
      },
      linksColors: linksColors,
      backgroundColor: '#F6F6F6',
      hideOn: 'phone',
    };

    const subNavLinks = [
      {
        id: 'sub-nav-summary',
        hideOn: 'phone',
        name: 'Summary',
        path: URI_BASE_PIAZZA + '/lender/lending_summary/standard' },
      {
        id: 'sub-nav-statement',
        hideOn: 'phone',
        name: 'Statements',
        path: URI_BASE_PIAZZA + '/lender/statement/standard' },
      {
        id: 'sub-nav-manage',
        hideOn: 'phone',
        name: 'Manage',
        path: URI_BASE_PIAZZA + '/lender/manage_lending/standard' },
      {
        id: 'sub-nav-loan',
        hideOn: 'phone',
        name: 'Loan book',
        path: URI_BASE_PIAZZA + '/lender/loan_book/standard' },
      {
        id: 'sub-nav-performance',
        hideOn: 'phone',
        name: 'Performance'},
    ];

    return (
      <S.Header>
        <Nav {...mainNav}>
          <Nav.LeftMenu items={mainNavPhone} showOn="phone"/>
          <Nav.RightMenu items={mainNavLinks} />
        </Nav>
        <S.SubHeader>
          <Nav {...subNav} >
            <Nav.RightMenu items={subNavLinks} />
          </Nav>
        </S.SubHeader>
      </S.Header>
    );
  }
}
