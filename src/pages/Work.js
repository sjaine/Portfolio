// Import Swiper React components
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom'; // React Router
import * as motion from "motion/react-client"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import artbook from '../assets/img/trial1.png';
import pawlert from '../assets/img/trial3.png';
import instagram from '../assets/img/trial2.png';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const projects = [
    { id: 'instagram', title: "Instagram", thumbnail: instagram, role: "UI/UX Designer", start: "from September 2023", end: "to December 2023", team: "Alone", tools: ["Visual Studio Code", "HTML, CSS", "Figma", "REST APIs"], info: "Capture, Create & Share What You Love! Improving Instagram's Accessibility for visual impairs.", },
    { id: 'artbook', title: "ArtBook", thumbnail: artbook, role: "front-end developer", start: "from September 2024", end: "to December 2024", team: "Nayeong Cho, UI/UX Designer", tools: ["Visual Studio Code", "React", "Figma", "MongoDB", "REST APIs",], info: "Explore the MET's collection with ease, one artwork at a time!", },
    { id: 'pawlert', title: "Pawlert", thumbnail: pawlert, role: "front-end developer", start: "from September 2024", end: "to December 2024", team: "Nayeong Cho, UI/UX Designer", tools: ["Visual Studio Code", "React", "Figma", "MongoDB", "REST APIs"], info: "(🏆 Award Winning Project) Keep your dog cool and safe! Pawlert watches over them in real-time!", },
  ];

function Work() {
        const navigate = useNavigate();

    const handleThumbnailClick = (project) => {
        navigate(`/${project.id}`, { state: { project } }); // Pass project data
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
    <div className="work">
        {/* header */}
        <div className="link main color_orange">
            <div className="gotoHome">👋 sjaine.me/work</div>
            <div className="copyright main color_orange">© 2025 Yoonsoo Jaine Shin <br />
    Hand-coded with ❤️ using React & Motion</div>
        </div>
        {/* sections */}
        {isMobile ? <>
            <div>
                {projects.map((project, index) => (
                    <div key={index} className="work_container">
                        <motion.div 
                            animate={{ y: 0 }}
                            style={{ y: 80, cursor: 'pointer' }}
                            transition={{ 
                                duration: 1,
                                type: "spring", 
                                delay: index * 0.2 // Add a delay based on the index
                            }} 
                            className="work_thumb" 
                            onClick={() => handleThumbnailClick(project)} // Add click handler
                        >
                            <div className="gradient"></div>
                            <div className="work_info">
                                <div className="work_name title">{project.title}</div>
                                <div className="main">{project.info}</div>
                            </div>
                            <div className="view_case main"></div>
                            <img src={project.thumbnail} alt={`${project.title} thumbnail`} loading="lazy" />
                        </motion.div>
                    </div>
                ))}

            </div>
        </> : <>
            <Swiper
                pagination={true}
                navigation={true}
                modules={[Pagination, Navigation]} 
                loop={true}
                className="mySwiper"
                lazyPreloadPrevNext={3}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index} className="work_container">
                        <motion.div 
                            animate={index === 0 ? { y: 0 } : {}}
                            style={index === 0 ? { y: 80, cursor: 'pointer' } : { cursor: 'pointer' }}
                            transition={index === 0 ? { type: "spring", stiffness: 80 } : {}} 
                            className="work_thumb" 
                            onClick={() => handleThumbnailClick(project)} // Add click handler
                        >
                            <div className="gradient"></div>
                            <div className="work_info">
                                <div className="work_name title">{project.title}</div>
                                <div className="main">{project.info}</div>
                            </div>
                            <div className="view_case main">view case study 👆</div>
                            <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
                        </motion.div>

                        <motion.div 
                            animate={index === 0 ? { y: 0 } : {}}
                            style={index === 0 ? { y: 140 } : {}}
                            transition={index === 0 ? { type: "spring", stiffness: 100 } : {}}  
                            className="work_preview"
                        >
                            <div className="work_folderName color_blue body"><b>📁 {project.title}/</b></div>
                            <div className="work_folderContent color_text body">
                                {/* role */}
                                <div className="work_section">
                                    <div className="work_line"></div>
                                    <div className="work_line_1"></div>
                                    <div className="work_sectionName color_blue">role/</div>
                                    <div className="work_sectionDetail">
                                        <div className="work_detail_line"></div>
                                        <p>{project.role}</p>
                                    </div>
                                </div>

                                {/* timeline */}
                                <div className="work_section">
                                    <div className="work_line"></div>
                                    <div className="work_line_2"></div>
                                    <div className="work_sectionName color_blue">timeline/</div>
                                    <div className="work_sectionDetail">
                                        <div className="work_detail_line"></div>
                                        <p>{project.start}</p>
                                    </div>
                                    <div className="work_sectionDetail">
                                        <div className="work_detail_line"></div>
                                        <p>{project.end}</p>
                                    </div>
                                </div>

                                {/* team */}
                                <div className="work_section">
                                    <div className="work_line"></div>
                                    <div className="work_line_1"></div>
                                    <div className="work_sectionName color_blue">team/</div>
                                    <div className="work_sectionDetail">
                                        <div className="work_detail_line"></div>
                                        <p>{project.team}</p>
                                    </div>
                                </div>

                                {/* tools */}
                                <div className="work_section">
                                    <div className="work_line"></div>
                                    <div className="work_line_d" style={{height: `${project.tools.length * 23.5}px`}}></div>
                                    <div className="work_sectionName color_blue">tools/</div>
                                    {project.tools.map((tool, index) => (
                                        <div className="work_sectionDetail" key={index}>
                                            <div className="work_detail_line"></div>
                                            <p>{tool}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>}
        
    </div>
    );
}

export default Work;
