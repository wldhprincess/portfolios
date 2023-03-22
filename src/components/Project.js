import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Header from './header_background/Header';
import './style/Project.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const Project = () => {
    
  
    return (
        <div id='project'>
            <Header/>
            <h1>my project</h1>
            <main id='main'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className="left">
                            <h2 className="project">project1</h2>
                            <div className="box">
                                <div className="img_box"></div>
                                <div className="addr">
                                    <p>cite: </p>
                                    <blockquote><Link to={"http://wldh.dothome.co.kr/03_project/index.html"} target="_blank" title="guess 페이지">http://wldh.dothome.co.kr/03_project/index.html</Link ></blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title">
                                <h3 className='ko'>정부24</h3>
                            </div>
                            <div className="content">
                                <div className="flex">
                                    <div className="data">
                                        <p>프로젝트 명:</p>
                                        <p>역할:</p>
                                        <p>제작 소요기간:</p>
                                        <p>제작 페이지:</p>
                                        <p>홈페이지 유형:</p>
                                        <p>사용기술:</p>
                                    </div>
                                    <div className="data">
                                        <p>정부24 만들기</p>
                                        <p>개인 프로젝트</p>
                                        <p>약 3주 소요</p>
                                        <p>전 페이지</p>
                                        <p>pc</p>
                                        <p>HTML5, CSS3, jQuery</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="left">
                            <h2 className="project">project2</h2>
                            <div className="box">
                                <div className="img_box img_box2"></div>
                                <div className="addr">
                                    <p>cite: </p>
                                    <blockquote><Link to={"https://kimjioh.github.io/guess/"} target="_blank" title="guess 페이지">https://kimjioh.github.io/guess/</Link ></blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title">
                                <h3>Guess</h3>
                            </div>
                            <div className="content">
                                <div className="flex">
                                    <div className="data">
                                        <p>프로젝트 명:</p>
                                        <p>역할:</p>
                                        <p>제작 소요기간:</p>
                                        <p>제작 페이지:</p>
                                        <p>홈페이지 유형:</p>
                                        <p>사용기술:</p>
                                    </div>
                                    <div className="data">
                                        <p>옷브랜드 <span>(guess)</span> 웹페이지 반응형으로 만들기</p>
                                        <p>개인 프로젝트</p>
                                        <p>약 2주 소요</p>
                                        <p>전 페이지</p>
                                        <p>pc / 반응형</p>
                                        <p>HTML5, CSS3, jQuery</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="left">
                            <h2 className="project">project3</h2>
                            <div className="box">
                                <div className="img_box img_box3"></div>
                                <div className="addr">
                                    <p>cite: </p>
                                    <blockquote><Link to={"http://wldh.dothome.co.kr/05_Response/01_manobord/index.html"} target="_blank" title="guess 페이지">http://wldh.dothome.co.kr/05_Response/01_manobord/index.html</Link ></blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title">
                                <h3 className='ko'>mango</h3>
                            </div>
                            <div className="content">
                                <div className="flex">
                                    <div className="data">
                                        <p>프로젝트 명:</p>
                                        <p>역할:</p>
                                        <p>제작 소요기간:</p>
                                        <p>제작 페이지:</p>
                                        <p>홈페이지 유형:</p>
                                        <p>사용기술:</p>
                                    </div>
                                    <div className="data">
                                        <p>mangobord 반응형으로 만들기</p>
                                        <p>개인 프로젝트</p>
                                        <p>약 1주 소요</p>
                                        <p>전 페이지</p>
                                        <p>pc / 반응형</p>
                                        <p>HTML5, CSS3, jQuery</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="left">
                            <h2 className="project">project4</h2>
                            <div className="box">
                                <div className="img_box img_box4"></div>
                                <div className="addr">
                                    <p>cite: </p>
                                    <blockquote><Link to={"https://kimjioh.github.io/shooting-game/"} target="_blank" title="guess 페이지">https://kimjioh.github.io/shooting-game/</Link ></blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title">
                                <h3 className='ko'>shootingGame</h3>
                            </div>
                            <div className="content">
                                <div className="flex">
                                    <div className="data">
                                        <p>프로젝트 명:</p>
                                        <p>역할:</p>
                                        <p>제작 소요기간:</p>
                                        <p>제작 페이지:</p>
                                        <p>홈페이지 유형:</p>
                                        <p>사용기술:</p>
                                    </div>
                                    <div className="data">
                                        <p>shootingGame 만들기</p>
                                        <p>개인 프로젝트</p>
                                        <p>1일 소요</p>
                                        <p>전 페이지</p>
                                        <p>pc</p>
                                        <p>JavaScript</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="left">
                            <h2 className="project">project5</h2>
                            <div className="box">
                                <div className="img_box img_box5"></div>
                                <div className="addr">
                                    <p>cite: </p>
                                    <blockquote><Link to={"https://kimjioh.github.io/shooting-game/"} target="_blank" title="guess 페이지">https://kimjioh.github.io/shooting-game/</Link ></blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title">
                                <h3 className='ko'>Doodle-jump</h3>
                            </div>
                            <div className="content">
                                <div className="flex">
                                    <div className="data">
                                        <p>프로젝트 명:</p>
                                        <p>역할:</p>
                                        <p>제작 소요기간:</p>
                                        <p>제작 페이지:</p>
                                        <p>홈페이지 유형:</p>
                                        <p>사용기술:</p>
                                    </div>
                                    <div className="data">
                                        <p>Doodle-jump 만들기</p>
                                        <p>개인 프로젝트</p>
                                        <p>약 3일 소요</p>
                                        <p>전 페이지</p>
                                        <p>pc</p>
                                        <p>HTML5, CSS3, JavaScript</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="left">
                            <h2 className="project">project6</h2>
                            <div className="box">
                                <div className="img_box img_box6"></div>
                                <div className="addr">
                                    <p>cite: </p>
                                    <blockquote><Link to={"https://kimjioh.github.io/shooting-game/"} target="_blank" title="guess 페이지">https://kimjioh.github.io/shooting-game/</Link ></blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title">
                                <h3 className='ko'>Whack-a-mole_game</h3>
                            </div>
                            <div className="content">
                                <div className="flex">
                                    <div className="data">
                                        <p>프로젝트 명:</p>
                                        <p>역할:</p>
                                        <p>제작 소요기간:</p>
                                        <p>제작 페이지:</p>
                                        <p>홈페이지 유형:</p>
                                        <p>사용기술:</p>
                                    </div>
                                    <div className="data">
                                        <p>Whack-a-mole game 만들기</p>
                                        <p>개인 프로젝트</p>
                                        <p>1일 소요</p>
                                        <p>전 페이지</p>
                                        <p>pc</p>
                                        <p>HTML5, CSS3, JavaScript</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="left">
                            <h2 className="project">project7</h2>
                            <div className="box">
                                <div className="img_box img_box7"></div>
                                <div className="addr">
                                    <p>cite: </p>
                                    <blockquote><Link to={"https://kimjioh.github.io/shooting-game/"} target="_blank" title="guess 페이지">https://kimjioh.github.io/shooting-game/</Link ></blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title">
                                <h3 className='ko'>Calendar</h3>
                            </div>
                            <div className="content">
                                <div className="flex">
                                    <div className="data">
                                        <p>프로젝트 명:</p>
                                        <p>역할:</p>
                                        <p>제작 소요기간:</p>
                                        <p>제작 페이지:</p>
                                        <p>홈페이지 유형:</p>
                                        <p>사용기술:</p>
                                    </div>
                                    <div className="data">
                                        <p>Calendar 반응형으로 만들기</p>
                                        <p>개인 프로젝트</p>
                                        <p>약 2일 소요</p>
                                        <p>전 페이지</p>
                                        <p>pc / 반응형</p>
                                        <p>HTML5, CSS3, JavaScript</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="left">
                            <h2 className="project">project8</h2>
                            <div className="box">
                                <div className="img_box img_box8"></div>
                                <div className="addr">
                                    <p>cite: </p>
                                    <blockquote><Link to={"https://kimjioh.github.io/shooting-game/"} target="_blank" title="guess 페이지">https://kimjioh.github.io/shooting-game/</Link ></blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title">
                                <h3 className='ko'>movies</h3>
                            </div>
                            <div className="content">
                                <div className="flex">
                                    <div className="data">
                                        <p>프로젝트 명:</p>
                                        <p>역할:</p>
                                        <p>제작 소요기간:</p>
                                        <p>제작 페이지:</p>
                                        <p>홈페이지 유형:</p>
                                        <p>사용기술:</p>
                                    </div>
                                    <div className="data">
                                        <p>movie page 반응형으로 만들기</p>
                                        <p>개인 프로젝트</p>
                                        <p>약 2주 소요</p>
                                        <p>전 페이지</p>
                                        <p>pc / 반응형</p>
                                        <p>React, JavaScript</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>
             

            </main>
        </div>
    );
};

export default Project;