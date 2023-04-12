import React from 'react';

import { Container } from 'react-bootstrap';

const AppFooter = () => {
    return (
        <>
            <Container fluid className="text-light page-footer d-flex">
                <Container>
                    <h5 className='pt-4'>Contact Us</h5>
                    <div className="d-lg-flex pb-4 justify-content-between">
                        <ul className="no-bullets">
                            <li><h6>Brooklyn Stevenson</h6></li>
                            <li>
                                <a className="footer-link" href="https://brooksteven.github.io/Basic-Profile/">
                                    <span><i className="far fa-folder pr-3"></i></span>
                                    https://brooksteven.github.io/Basic-Profile/
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="brooksteven54@gmail.com">
                                    <span><i className="far fa-envelope pr-3"></i></span>
                                    brooksteven54@gmail.com
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://github.com/brooksteven">
                                    <span><i className="fab fa-github pr-3"></i></span>
                                    brooksteven
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://www.linkedin.com/in/brooklynn-stevenson-b9615124a/">
                                    <span><i className="fab fa-linkedin pr-3"></i></span>
                                    brooklynn-stevenson-b9615124a
                                </a>
                            </li>
                        </ul>
                        <ul className="no-bullets">
                            <li><h6>Reginald Prince</h6></li>
                            <li>
                                <a className="footer-link" href="https://github.com/Reggiejr44/my-tech-portfolio">
                                    <span><i className="far fa-folder pr-3"></i></span>
                                    https://github.com/Reggiejr44/my-tech-portfolio
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="regprince788@gmail.com">
                                    <span><i className="far fa-envelope pr-3"></i></span>
                                    regprince788@gmail.com
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://github.com/Reggiejr44">
                                    <span><i className="fab fa-github pr-3"></i></span>
                                    Reggiejr44
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://www.linkedin.com/in/princereginald0724/">
                                    <span><i className="fab fa-linkedin pr-3"></i></span>
                                    princereginald0724
                                </a>
                            </li>
                        </ul>
                        <ul className="no-bullets">
                            <li><h6>Yasmein Yang</h6></li>
                            <li>
                                <a className="footer-link" href="https://github.com/GO4YAS/hire-me-hub">
                                    <span><i className="far fa-folder pr-3"></i></span>
                                    https://github.com/GO4YAS/hire-me-hub
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="yasmein.yang@gmail.com">
                                    <span><i className="far fa-envelope pr-3"></i></span>
                                    yasmein.yang@gmail.com
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://github.com/GO4YAS">
                                    <span><i className="fab fa-github pr-3"></i></span>
                                    GO4YAS
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://www.linkedin.com/in/yasmein-yang-563354222/">
                                    <span><i className="fab fa-linkedin pr-3"></i></span>
                                    yasmein-yang-563354222
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>© 2023</p>
                        <p><a className="footer-link" href="https://github.com/Brooksteven/Cinema-Plug"><i className="fab fa-github pr-3"></i>Visit the GitHub Repo</a></p>
                    </div>
                </Container>
            </Container>
        </>
    )
};
export default AppFooter;
