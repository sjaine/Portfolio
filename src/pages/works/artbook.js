import React, { useRef, useState } from 'react';
import * as motion from "motion/react-client"

import final1 from '../../assets/img/artbook/final1.png';
import final2 from '../../assets/img/artbook/final2.png';
import final3 from '../../assets/img/artbook/final3.png';
import final4 from '../../assets/img/artbook/final4.png';
import final5 from '../../assets/img/artbook/final5.png';

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
                <img src="/assets/img/artbook.png" alt="project thumbnail" />
            </motion.div>

            {/* intro */}
            <motion.div
                className="project_intro"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once:false, amount: 0.3 }}
                transition={{ type: "tween", stiffness: 150 }}
            >
                <div className="title color_blue" >ArtBook.</div>
                <div className="project_content">
                    <div className="main color_text project_subject">&lt;overview&gt;</div> 
                    <div className="body project_desc line_height">I developed a website that recommends artworks tailored to users' preferences by integrating the MET API. I utilized React to manage and integrate the entire HTML/CSS structure seamlessly. <br />
                    Collaborating closely with my colleague, a UI/UX designer, provided me with valuable experience in teamwork and cross-functional collaboration.</div>
                </div>
            </motion.div>

            {/* overview */}
            <motion.div
                className="body project_overview"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once:false, amount: 0.3 }}
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
                </div>
            </div>

            {/* reflection */}
            <motion.div
                className="project_body"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once:false, amount: 0.3 }}
                transition={{ type: "tween", stiffness: 150 }}
            >
                <div className="body_title main color_text">📁 ../reflection/takeaways</div>
                <div className="body_content body line_height">
                This project provided valuable experience and taught me the <b>importance of truly empathizing with users.</b> Previously, I often relied on my own experiences, which led to biases. However, I realized that the real issue was Instagram's accessibility, not users' improper use of ALT text. <br />
                <br />
                Additionally, I gained a deeper understanding of the <b>significance of feedback</b>, particularly regarding the direct messaging system. It prompted me to consider factors I hadn’t initially thought about, like how the system handles multiple photo selection. This insight played a key role in enhancing the overall quality of the project.<br />
                <br />
                Lastly, I developed skills in <b>using and connecting various APIs</b>, significantly enhancing my capabilities.
                </div>

                {/* <div className="body_title main color_text">📁 ../reflection/next_steps</div>
                <div className="body_content body">
                   
                </div> */}
            </motion.div>
        </div>
    </div>
  );
}

export default Artbook;
