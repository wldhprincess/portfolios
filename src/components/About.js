import React from 'react';
import Header from './header_background/Header';
import './style/About.scss';

const About = () => {
    return (
        <div id='about'>
            <Header/>
            <h1>about me</h1>
            <main id='main'>
                <section className='left'>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/img/main2.jpg'} />
                        <h2 className='ko'>김지오  |  <span className='eg'>KIMJIOH</span></h2>
                    </div>
                </section>
                <section className='right'>
                    <div className="title">
                        <div className='name'>PROFILE</div>
                        <div className='flex'>
                            <div className='data'>
                                <p>생년월일</p>
                                <p>전화번호</p>
                                <p>이메일</p>
                                <p>주소</p>
                            </div>
                            <div className='data'>
                                <p>1999,09,08</p>
                                <p>010-7630-2353</p>
                                <p>wldhprincess@naver.com</p>
                                <p>경기도 화성시 매송면</p>
                            </div>
                        </div>
                    </div>
                    <div className="title">
                        <div className='name'>EDUCATION</div>
                        <div className='flex'>
                            <div className='data'>
                                <p>2018</p>
                                <p>2022 - 2023</p>
                            </div>
                            <div className='data'>
                                <p>대부고등학교 정보처리과 졸업</p>
                                <p>프레임워크 기반 프론트엔드 개발 교육</p>
                                <p>- 교육기관: 더휴면컴퓨터아트아카데미</p>
                                <p>- 교육기간: 2022.10.12 ~ 2023.03.22</p>
                                <p>- 교육내용: HTML5, CSS3, JavaScript, jQuery, VUE </p>
                            </div>
                        </div>
                    </div>
                    <div className="title none">
                        <div className='name'>SKILLS</div>
                        <div className='flex border'>
                            <div className='border_box'><p>HTML5</p></div>
                            <div className='border_box'><p>CSS3</p></div>
                            <div className='border_box'><p>SCSS</p></div>
                            <div className='border_box'><p>JavaScript</p></div>
                            <div className='border_box'><p>jQuery</p></div>
                            <div className='border_box'><p>Vue</p></div>
                            <div className='border_box'><p>React</p></div>
                        </div>
                    </div>
                    <div className="title none">
                        <div className='name'>TOOLS</div>
                        <div className='flex border'>
                            <div className='border_box'><p>Git</p></div>
                            <div className='border_box'><p>Axios</p></div>
                            <div className='border_box'><p>API</p></div>
                            <div className='border_box'><p>Figma</p></div>
                        </div>
                    </div>
                </section>
                <section className="bottom">
                <div className="title">
                        <div className='name'>SKILLS</div>
                        <div className='flex border'>
                            <div className='border_box'><p>HTML5</p></div>
                            <div className='border_box'><p>CSS3</p></div>
                            <div className='border_box'><p>SCSS</p></div>
                            <div className='border_box'><p>JavaScript</p></div>
                            <div className='border_box'><p>jQuery</p></div>
                            <div className='border_box'><p>Vue</p></div>
                            <div className='border_box'><p>React</p></div>
                        </div>
                    </div>
                    <div className="title">
                        <div className='name'>TOOLS</div>
                        <div className='flex border'>
                            <div className='border_box'><p>Git</p></div>
                            <div className='border_box'><p>Axios</p></div>
                            <div className='border_box'><p>API</p></div>
                            <div className='border_box'><p>Figma</p></div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default About;