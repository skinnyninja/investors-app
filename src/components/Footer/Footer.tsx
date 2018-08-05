/* tslint:disable-next-line */
import React, { Component } from 'react';
import './Footer.scss';

export default class Header extends Component <{}> {
  render() {
    return (
      <footer className="footer">
          <div className="footer__container container">
              <div className="row">
                  <div className="col-6 col-md-3">
                      <span className="footer__title">About Zopa</span>
                      <ul className="footer__links">
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">About Zopa</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">How Zopa works</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">Join us</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">Blog</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">Partnerships</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">Press office</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">Contact Zopa</a></li>
                      </ul>
                  </div>
                  <div className="col-6 col-md-3">
                      <span className="footer__title">Zopa Loans</span>
                      <ul className="footer__links">
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">Zopa loans</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">Home improvements</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">Car finance</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">Weddings</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">FAQs for loans</a></li>
                      </ul>
                  </div>
                  <div className="col-6 col-md-3">
                      <span className="footer__title">Invest your money</span>
                      <ul className="footer__links">
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">Investing at Zopa</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">ISAs</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">Risk management</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">Who uses Zopa?</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">FAQs for investing</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">Press office</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">Contact Zopa</a></li>
                      </ul>
                  </div>
                  <div className="col-6 col-md-3">
                      <span className="footer__title">Invest your money</span>
                      <ul className="footer__links">
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">Investing at Zopa</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">ISAs</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">Risk management</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">Who uses Zopa?</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">FAQs for investing</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">Press office</a></li>
                          <li className="footer__link-grid">
                            <a className="footer__link" href="">Contact Zopa</a></li>
                      </ul>
                  </div>
              </div>

              <div className="row">
                <div className="col-12">
                    <p className="footer__copy">
                      Zopa Limited is incorporated in England &amp; Wales (registration number
                      05197592), with its registered office at 1st Floor, Cottons Centre,
                      Tooley Street, London, SE1 2QG.Zopa Limited is authorised and
                      regulated by the Financial Conduct Authority, and entered on the Financial
                      Services Register under firm registration number 718925.</p>
                    <div className="footer__hr"></div>
                    <p className="footer__copy">
                      &copy; Zopa Limited 2018 All rights reserved. 'Zopa' and the Zopa logo are
                      trade marks of Zopa Limited. Zopa is a member of CIFAS – the UK's leading
                      anti-fraud association, and we are registered with the Office of the
                      Information Commissioner (No. Z8797078).</p>
                </div>
              </div>
          </div>
      </footer>
    );
  }
}
