import React, { useRef, useState } from 'react';
import * as motion from "motion/react-client"
import ExternalNav from '../../components/ExternalNav';

import pawlert from '../../assets/img/pawlart.png';

import final1 from '../../assets/img/pawlert/First.png';
import final2 from '../../assets/img/pawlert/Main.png';
import final3 from '../../assets/img/pawlert/Main2.png';
import final4 from '../../assets/img/pawlert/Main3.png';
import final5 from '../../assets/img/pawlert/Main4.png';
import final6 from '../../assets/img/pawlert/Map.png';

function Pawlert() {
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
        <ExternalNav gitHub="https://github.com/sjaine/Pawlert" liveSite="https://pawlert.co/" />
        <div className="project">
            {/* header */}
            <div className="link main color_orange">
                <div className="gotoHome">👋 sjaine.me/work/pawlert</div>
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
                    <img className="img_adjustment" src={pawlert} alt="project thumbnail" />
                </motion.div>

                {/* intro */}
                <motion.div
                    className="project_intro"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "tween", stiffness: 150 }}
                >
                    <div className="title color_blue" >Pawlert.</div>
                    <div className="project_content">
                        <div className="main color_text project_subject">&lt;overview&gt;</div> 
                        <div className="body project_desc line_height">We built our product as WebApp with Vanila Web Stack through Visual Studio Code. Using the weather API, we generated JSON files for defining the information of users and their dogs. With the JSON data file, we created an AI based assistant application that recommends the best way for users with detailed analysis. <br /><br />
                        Through this project, I experienced the biggest learning curve including learning how GitHub works, or more technical aspects such as exploring JSON files.</div>
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
                    <div className="body_title main color_text">📁 ../deliver/final_solution</div>
                </motion.div>

                <div className="project_deliver project_body" 
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                > 
                    <div className="project_deliver_container">
                        <div className="img_wrapper">
                            <img src={final1} alt="final1" onDragStart={(e) => e.preventDefault()} />
                        </div>
                        <div className="img_wrapper">
                            <img src={final2} alt="final2" onDragStart={(e) => e.preventDefault()} />
                        </div>
                        <div className="img_wrapper">
                            <img src={final3} alt="final3" onDragStart={(e) => e.preventDefault()} />
                        </div>
                        <div className="img_wrapper">
                            <img src={final4} alt="final4" onDragStart={(e) => e.preventDefault()} />
                        </div>
                        <div className="img_wrapper">
                            <img src={final5} alt="final5" onDragStart={(e) => e.preventDefault()} />
                        </div>
                        <div className="img_wrapper">
                            <img src={final6} alt="final5" onDragStart={(e) => e.preventDefault()} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  );
}

export default Pawlert;
