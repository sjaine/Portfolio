import React from 'react';
import * as motion from "motion/react-client"

import profileImg from '../assets/profile_img.jpeg'
import hackville from '../assets/hackville.svg'

function About() {
    return (
    <div className="about">
        {/* header */}
        <div className="link main color_orange">
            <div className="gotoHome">👋 sjaine.me/about</div>
            <div className="copyright main color_orange">© 2025 Yoonsoo Jaine Shin <br />
    Hand-coded with ❤️ using React & Motion</div>
        </div>
        {/* sections */}
        <div className="about_container">
            <motion.div 
                animate={{ y: 0 }}
                // Fade in when the element enters the viewport:
                whileInView={{ opacity: 1 }}
                // Animate the component when its layout changes:
                layout
                // Style now supports indepedent transforms:
                style={{ y: 80 }}
                transition={{ type: "spring", stiffness: 80 }} 
                className="about_left"
            >
                <div className="about_profileImg"><img src={profileImg} alt="Profile" /></div>
            </motion.div >
            <div className="about_right">
                <motion.div 
                    animate={{ y: 0 }}
                    // Fade in when the element enters the viewport:
                    whileInView={{ opacity: 1 }}
                    // Animate the component when its layout changes:
                    layout
                    // Style now supports indepedent transforms:
                    style={{ y: 60, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100 }} 
                    className="about_annyeong color_text"
                >
                    <div className="about_title main">🐭 sjaine.me/about/annyeong!</div>
                    <div className="about_content body">Hey, there! I’m <b>Yoonsoo(aka, Jaine!)</b>, a Korean native and Interaction Design student @Sheridan College, Canada. I always do my best in designing, coding, hanging out with friends, and living my own life! I'm passionate about experimenting with new things and making my products more <b>engaging and fun!</b></div>
                </motion.div >
                <motion.div 
                    animate={{ y: 0 }}
                    // Fade in when the element enters the viewport:
                    whileInView={{ opacity: 1 }}
                    // Animate the component when its layout changes:
                    layout
                    // Style now supports indepedent transforms:
                    style={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100 }} 
                    className="about_experience color_text"
                >
                    <div className="about_title main">📍 sjaine.me/about/experience</div>
                    <table className="about_content body">
                        <tr className="about_table">
                            <div>
                                <td><img src={hackville} alt="Hackville" className="company_icon" /></td>
                                <td><b>Hackville</b></td>
                                <td>Co-President</td>
                            </div>
                            <td>2024 March - 2025 April</td>
                        </tr>
                        <tr className="about_table">
                            <div>
                                <td><img src={hackville} alt="Hackville" className="company_icon" /></td>
                                <td><b>Hackville</b></td>
                                <td>UI/UX Designer</td>
                            </div>
                            <td>2023 June - 2024 March</td>
                        </tr>
                    </table>
                </motion.div >
                <motion.div 
                    animate={{ y: 0 }}
                    // Fade in when the element enters the viewport:
                    whileInView={{ opacity: 1 }}
                    // Animate the component when its layout changes:
                    layout
                    // Style now supports indepedent transforms:
                    style={{ y: 140, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}  
                    className="about_skills color_text"
                >
                    <div className="about_title main">📝 sjaine.me/about/skills</div>
                    <table className="about_content body">
                        <tr className="about_table_2">
                            <td><b>[UI/UX DESIGN]</b></td>
                            <td>Figma, UI/UX Design, Prototyping, Web Accessibility, User Research, Information Architecture</td>
                        </tr>
                        <tr className="about_table_2">
                            <td><b>[DEVELOPMENT]</b></td>
                            <td>HTML, CSS, JavaScript, React.js, Node.js, REST APIs, GitHub, MySQL, MongoDB, System Thinking</td>
                        </tr>
                    </table>
                </motion.div >
            </div>
        </div>
    </div>
    );
}

export default About;
