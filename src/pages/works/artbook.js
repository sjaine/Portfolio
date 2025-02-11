import React, { useRef, useState } from 'react';
import * as motion from "motion/react-client"
import ExternalNav from '../../components/ExternalNav';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Autoplay } from 'swiper/modules';

import artbook from '../../assets/img/artbook.png';

import final1 from '../../assets/img/artbook/final1.png';
import final2 from '../../assets/img/artbook/final2.png';
import final3 from '../../assets/img/artbook/final3.png';
import final4 from '../../assets/img/artbook/final4.png';
import final5 from '../../assets/img/artbook/final5.png';
import final6 from '../../assets/img/artbook/final6.png';
import final7 from '../../assets/img/artbook/final7.png';
import final8 from '../../assets/img/artbook/final8.png';
import final9 from '../../assets/img/artbook/final9.png';
import final10 from '../../assets/img/artbook/final10.png';
import final11 from '../../assets/img/artbook/final11.png';
import final12 from '../../assets/img/artbook/final12.png';
import final13 from '../../assets/img/artbook/final13.png';
import final14 from '../../assets/img/artbook/final14.png';

function Artbook() {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
      };
    
      const handleMouseLeave = () => {
        setIsDragging(false);
      };
    
      const handleMouseUp = () => {
        setIsDragging(false);
      };
    
      const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
      };

  return (
    <>
    <ExternalNav gitHub="https://github.com/sjaine/ArtBook" liveSite="https://artbookproject.netlify.app/" />
    <div className="project">
        {/* header */}
        <div className="link main color_orange">
            <div className="gotoHome">👋 sjaine.me/work/artbook</div>
            <div className="copyright main color_orange">© 2025 Yoonsoo Jaine Shin <br />
Hand-coded with ❤️ using React & Motion</div>
        </div>
        {/* sections */}
        <div className="project_container">
            <motion.div
                className="project_thumbnail"
                animate={{ y: 0 }}
                // Fade in when the element enters the viewport:
                whileInView={{ opacity: 1 }}
                // Animate the component when its layout changes:
                layout
                // Style now supports indepedent transforms:
                style={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 80 }}
            >
                <img src={artbook} alt="project thumbnail" />
            </motion.div>

            {/* intro */}
            <motion.div
                className="project_intro"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", stiffness: 150 }}
            >
                <div className="title color_blue" >ArtBook.</div>
                <div className="project_content">
                    <div className="main color_text project_subject">&lt;overview&gt;</div> 
                    <div className="body project_desc line_height">I developed a website that recommends artworks tailored to users' preferences by integrating the <b>MET API.</b> I utilized <b>React</b> to manage and integrate the entire HTML/CSS structure seamlessly. <br /><br />
                    Collaborating closely with my colleague, a UI/UX designer, provided me with valuable experience in teamwork and cross-functional collaboration.</div>
                </div>
            </motion.div>

            {/* overview */}
            <motion.div
                className="body project_overview"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", stiffness: 150 }}
            >
                <div className="overview_container line_height">
                    {/* role */}
                    <div>
                        <div className="main color_text overview_title">&lt;role&gt;</div>
                        <div>Front-End Developer</div>
                    </div>
                    
                    {/* timeline */}
                    <div>
                        <div className="main color_text overview_title">&lt;timeline&gt;</div>
                        <div>From August 2024</div>
                        <div>To December 2024</div>
                    </div>

                    {/* team */}
                    <div>
                        <div className="main color_text overview_title">&lt;team&gt;</div>
                        <div>Nayeong Cho; <br />
                        UI/UX Designer</div>
                    </div>

                    {/* team */}
                    <div>
                        <div className="main color_text overview_title">&lt;tools&gt;</div>
                        <div>Visual Studio Code</div>
                        <div>React</div>
                        <div>Figma</div>
                        <div>MongoDB</div>
                        <div>REST APIs</div>
                    </div>
                </div>
            </motion.div>

            {/* deliver */}
            <motion.div
                className="project_body">
                <div className="body_title main color_text">📁 ../deliver/output</div>
            </motion.div>

            <div className="project_deliver" 
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            > 
                <div className="project_deliver_container">
                    <div className="img_wrapper wrapper_laptop">
                        <img src={final1} alt="final1" onDragStart={(e) => e.preventDefault()} />
                    </div>
                    <div className="img_wrapper wrapper_laptop">
                        <img src={final2} alt="final2" onDragStart={(e) => e.preventDefault()} />
                    </div>
                    <div className="img_wrapper wrapper_laptop">
                        <img src={final3} alt="final3" onDragStart={(e) => e.preventDefault()} />
                    </div>
                    <div className="img_wrapper wrapper_laptop">
                        <img src={final4} alt="final4" onDragStart={(e) => e.preventDefault()} />
                    </div>
                    <div className="img_wrapper wrapper_laptop">
                        <img src={final5} alt="final5" onDragStart={(e) => e.preventDefault()} />
                    </div>
                    <div className="img_wrapper wrapper_laptop">
                        <img src={final6} alt="final5" onDragStart={(e) => e.preventDefault()} />
                    </div>
                    <div className="img_wrapper wrapper_laptop">
                        <img src={final7} alt="final5" onDragStart={(e) => e.preventDefault()} />
                    </div>
                    <div className="img_wrapper wrapper_laptop">
                        <img src={final8} alt="final5" onDragStart={(e) => e.preventDefault()} />
                    </div>
                    <div className="img_wrapper wrapper_laptop">
                        <img src={final9} alt="final5" onDragStart={(e) => e.preventDefault()} />
                    </div>
                    <div className="img_wrapper wrapper_laptop">
                        <img src={final10} alt="final5" onDragStart={(e) => e.preventDefault()} />
                    </div>
                    <div className="img_wrapper wrapper_laptop">
                        <img src={final11} alt="final5" onDragStart={(e) => e.preventDefault()} />
                    </div>
                    <div className="img_wrapper wrapper_laptop">
                        <img src={final12} alt="final5" onDragStart={(e) => e.preventDefault()} />
                    </div>
                    <div className="img_wrapper wrapper_laptop">
                        <img src={final13} alt="final5" onDragStart={(e) => e.preventDefault()} />
                    </div>
                    <div className="img_wrapper wrapper_laptop">
                        <img src={final14} alt="final5" onDragStart={(e) => e.preventDefault()} />
                    </div>
                </div>
            </div>

            {/* features */}
            <div className="project_body">
                    <div className="deliver_container">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "tween", stiffness: 150 }} 
                            className="deliver_box box_pc line_height"
                        >
                            <div>
                                <div className="deliver_desc main color_text">[Sign In & Up]</div>
                                <ul className="body">
                                    <li><b>Validation:</b> Checks if the chosen nickname already exists in the MongoDB database.</li>
                                    <li><b>Customization:</b> Users can select an emoji and nickname for a fun, personalized experience.</li>
                                    <li><b>Authentication:</b> Implements sign-in and sign-up functionality.</li>
                                </ul>
                            </div>

                            <Swiper 
                            pagination={true}
                            modules={[Pagination, Autoplay]} 
                            loop={true}
                            autoplay={{ disableOnInteraction: false }}
                            slidesPerView= {1}
                            className="deliver_img_pc">
                                <SwiperSlide>
                                    <img src={final1} alt="final 1" className="img_pc" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={final2} alt="final 2" className="img_pc" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={final3} alt="final 3" className="img_pc" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={final4} alt="final 4" className="img_pc" />
                                </SwiperSlide>
                            </Swiper>
                        </motion.div>

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "tween", stiffness: 150 }} 
                            className="deliver_box box_pc line_height"
                        >
                            <div>
                                <div className="deliver_desc main color_text">[Artwork Lists]</div>
                                <ul className="body">
                                    <li><b>Data Fetching:</b> Retrieves artwork information from the MET API.</li>
                                    <li><b>Filtering:</b> Displays the second artwork’s thumbnail for each category.</li>
                                    <li><b>Recommendations:</b> Shows the top 5 matching artworks in a table.</li>
                                    <li><b>User Interaction:</b> Clicking on an artwork provides more details and allows users to add it to their favorites, saving the selection in the MongoDB database.</li>
                                </ul>
                            </div>

                            <Swiper 
                            pagination={true}
                            modules={[Pagination, Autoplay]} 
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            className="deliver_img_pc mySwiper">
                                <SwiperSlide>
                                    <img src={final5} alt="final 5" className="img_pc" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={final6} alt="final 6" className="img_pc" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={final7} alt="final 7" className="img_pc" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={final8} alt="final 8" className="img_pc" />
                                </SwiperSlide>
                            </Swiper>
                        </motion.div>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "tween", stiffness: 150 }} 
                            className="deliver_box box_pc line_height"
                        >
                            <div>
                                <div className="deliver_desc main color_text">[Saved & Recommendation]</div>
                                <ul className="body">
                                    <li><b>User Favorites:</b> Loads saved artworks from the MongoDB database, optimizing performance by storing only essential details.</li>
                                    <li><b>Similar Users:</b> Displays favorite artworks of users who have chosen the same emoji.</li>
                                    <li><b>Popular Picks:</b> Highlights the most popular artworks among users with the same emoji.</li>
                                </ul>
                            </div>

                            <Swiper 
                            pagination={true}
                            modules={[Pagination, Autoplay]} 
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            className="deliver_img_pc mySwiper">
                                <SwiperSlide>
                                    <img src={final9} alt="final 9" className="img_pc" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={final10} alt="final 10" className="img_pc" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={final11} alt="final 11" className="img_pc" />
                                </SwiperSlide>
                            </Swiper>
                        </motion.div>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "tween", stiffness: 150 }} 
                            className="deliver_box box_pc line_height"
                        >
                            <div>
                                <div className="deliver_desc main color_text">[User Account]</div>
                                <ul className="body">
                                    <li><b>Analytics:</b> Provides insights into the user’s top department preferences.</li>
                                    <li><b>AI Integration (Planned):</b> Implements an AI-powered feature to offer information and the fastest route to explore favorite artworks.</li>
                                    <li><b>Account Management:</b> Allows users to delete their accounts.</li>
                                </ul>
                            </div>

                            <Swiper 
                            pagination={true}
                            modules={[Pagination, Autoplay]} 
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            className="deliver_img_pc mySwiper">
                                <SwiperSlide>
                                    <img src={final12} alt="final 12" className="img_pc" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={final13} alt="final 13" className="img_pc" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={final14} alt="final 14" className="img_pc" />
                                </SwiperSlide>
                            </Swiper>
                        </motion.div>
                    </div>
                </div>

            {/* reflection */}
            <motion.div
                className="project_body"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                
                transition={{ type: "tween", stiffness: 150 }}
            >
                <div className="body_title main color_text">📁 ../reflection/takeaways</div>
                <div className="body_content body line_height">
                Through these projects, I strengthened my ability to integrate front-end and back-end systems, work with external APIs, and collaborate effectively with UI/UX designer.</div>
                
                <div className="reflection body line_height">
                    <div className="reflection_box">
                    <b>① Explored REST APIs</b> <br /><br /> I explored APIs extensively, ensuring seamless integration through thorough research, testing, and debugging.
                    </div>
                    <div className="reflection_box">
                    <b>② Developed a full CRUD</b> <br /><br /> By using Node.js, Express, MongoDB, and React, gaining hands-on experience in API development, authentication, and server deployment.
                    </div>
                    <div className="reflection_box">
                    <b>③ Strengthened collaboration skills</b> <br /><br />By working closely with UI/UX designer, ensuring smooth communication and efficient development workflows.
                    </div>
                </div>

                <div className="body_content body line_height">
                These experiences deepened my technical expertise and problem-solving abilities, reinforcing my passion for creating seamless, user-centered web applications. Moving forward, I aim to refine <b>performance optimization, enhance authentication systems, and explore AI-powered solutions.</b>
                </div>

                {/* <div className="body_title main color_text">📁 ../reflection/next_steps</div>
                <div className="body_content body">
                   
                </div> */}
            </motion.div>
        </div>
    </div>
    </>
  );
}

export default Artbook;
