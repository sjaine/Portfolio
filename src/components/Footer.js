import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';
import arrow from '../assets/img/icons/arrow-right.svg';
import footerArrow from '../assets/img/icons/arrow-up-right.svg';

gsap.registerPlugin(ScrollTrigger);

const hyperlinks = [
    { id: 1, title: 'Resume', link: 'https://www.dropbox.com/scl/fi/pjjg7xl5b1v0aas7zb70w/Resume.pdf?rlkey=cgemzwnkw43h5m5m00my9752h&st=mlbi5fhd&dl=0' },
    { id: 2, title: 'LinkedIn', link: 'https://www.linkedin.com/in/jaineysshin/' },
    { id: 3, title: 'GitHub', link: 'https://github.com/sjaine' }
  ];

function Footer() {
  const footerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const triggers = [];

    const isMobile = window.innerWidth <= 768;

    if (!isMobile && footerRef.current) {
      triggers.push(
        gsap.to(footerRef.current, {
          scrollTrigger: {
            id: 'footer',
            trigger: footerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
      );
    }

    ScrollTrigger.refresh();

    return () => {
      triggers.forEach(trigger => trigger.scrollTrigger.kill());
    };
  }, [location.pathname]);

  return (
    <div className="footer bc_blue" ref={footerRef}>
      <div className="footer_content">
        <div className="footer_left">
            <div className="left_content h3 color_white">
                <div className="main">Let's build something <span className="color_orange main_italic">amazing</span> together.</div>
                <div>
                    <img src={arrow} alt="Arrow" />
                    <a href="mailto:jaineysshin@gmail.com" className="mail main_light color_white">jaineysshin@gmail.com</a>
                </div>
            </div>
        </div>
        <div className="footer_right">
          <div className="footer_table">
            {hyperlinks.map((hyperlink) => (
                <a className="table" key={hyperlink.id} href={hyperlink.link} target="_blank" rel="noopener noreferrer">
                    <div className="table_menu">
                        <div className="h4 color_white main_light table_num">[0{hyperlink.id}]</div>
                        <div className="h3 color_white main_light">{hyperlink.title}</div>
                    </div>
                    <img src={footerArrow} alt="footer arrow" />
                </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer_bottom title color_green"></div>
    </div>
  );
}

export default Footer;
