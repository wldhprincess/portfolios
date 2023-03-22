import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from './header_background/Header';
import './style/Contact.scss'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('jioh', 'template_bmydsuc', form.current, 'yGVU0sERhTcvW9GxF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

   



    return (
        <div id='contact'>
            <Header/>
            <h1>contact</h1>
            <main id='main'>
            <section className='left'>
                <img src={process.env.PUBLIC_URL + '/img/main3.jpg'} />
                <div className="title">
                    <div className='flex'>
                        <div className="name">kim jioh</div>
                        <div className="phone">phone: 010-7630-2353</div>
                    </div>
                    <div className='flex'>
                        <div className="birth">1999.09.08</div>
                        <div className="addr">Maesong-myeon, Hwaseong-si </div>
                    </div>
                </div>
                <p className='appeal'>끈임없이 노력하며, 발전하는 프론트엔드 개발자가 되겠습니다.</p>
            </section>
            <section className='right'>
                <div className="top">
                    <h2>Please send me an email!</h2>
                    <p>저의 포트폴리오를 봐주셔서 감사합니다 :)  저에게 메일을 보내주세요!</p>
                </div>
                <div className="bottom">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>from</label>
                        <input type="email" name="email" placeholder='메일 주소를 입력해주세요!'/>
                        <label>to</label>
                        <input type="email" name="to_email" value={'wldhprincess@naver.com'} readOnly/>
                        <label>subject</label>
                        <input type="text" name="subject" placeholder='제목을 입력해주세요!'/>
                        <label>content</label>
                        <textarea name="message" className='content' placeholder='내용을 적어주세요😊'/>
                        <input type="submit" value="Send" className='submit'/>
                    </form>
                </div>
            </section>
            </main>
        </div>
    );
};

export default Contact;