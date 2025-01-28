import React from 'react';
import * as motion from "motion/react-client"

function Home() {
  return (
    <div className="home">
        {/* header */}
        <div className="link main color_orange link_home">
            <div className="gotoHome">👋 sjaine.me</div>
            <div className="copyright_home main color_orange">© 2025 Yoonsoo Jaine Shin <br />
Hand-coded with ❤️ using React</div>
        </div>
        {/* sections */}
        <div className="home_left">
            <table className="number_table main">
                <div className="table_line"></div>
                <tr>
                    <td className="color_orange">1</td>
                    <td>import <span>Jaine</span> from sjaine.me;</td>
                </tr>
                <tr>
                    <td className="color_orange">2</td>
                    <td>import <span>HelloWorld</span> from sjaine.me;</td>
                </tr>
                <tr>
                    <td className="color_orange">3</td>
                    <td></td>
                </tr>
                <tr>
                    <td className="color_orange">4</td>
                    <td></td>
                </tr>
                <tr>
                    <td className="color_orange">5</td>
                    <td></td>
                </tr>
                <tr>
                    <td className="color_orange">6</td>
                    <td>function <span>HelloWorld</span>() &#123;</td>
                </tr>
                <tr>
                    <td className="color_orange">7</td>
                    <td>&emsp;&emsp;return(</td>
                </tr>
                <tr>
                    <td className="color_orange">8</td>
                    <td>&emsp;&emsp;&emsp;&emsp;&lt;div&gt;Yoonsoo <span>Jaine</span> Shin&lt;/div&gt;</td>
                </tr>
                <tr>
                    <td className="color_orange">9</td>
                    <td>&emsp;&emsp;&emsp;&emsp;&lt;div&gt;</td>
                </tr>
                <tr>
                    <td className="color_orange">10</td>
                    <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div&gt;<span>UI/UX Designer</span>&lt;/div&gt;</td>
                </tr>
                <tr>
                    <td className="color_orange">11</td>
                    <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div&gt;<span>Front-end Developer</span>&lt;/div&gt;</td>
                </tr>
                <tr>
                    <td className="color_orange">12</td>
                    <td>&emsp;&emsp;&emsp;&emsp;&lt;/div&gt;</td>
                </tr>
                <tr>
                    <td className="color_orange">13</td>
                    <td>&emsp;&emsp;&emsp;&emsp;&lt;div&gt;</td>
                </tr>
                <tr>
                    <td className="color_orange">14</td>
                    <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div&gt;<span>Sheridan College</span>&lt;/div&gt;</td>
                </tr>
                <tr>
                    <td className="color_orange">15</td>
                    <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;div&gt;<span>Interaction Design</span>&lt;/div&gt;</td>
                </tr>
                <tr>
                    <td className="color_orange">16</td>
                    <td>&emsp;&emsp;&emsp;&emsp;&lt;/div&gt;</td>
                </tr>
                <tr>
                    <td className="color_orange">17</td>
                    <td>&emsp;&emsp;);</td>
                </tr>
                <tr>
                    <td className="color_orange">18</td>
                    <td>&#125;</td>
                </tr>
                <tr>
                    <td className="color_orange">19</td>
                    <td></td>
                </tr>
            </table>
            
        </div>
        <div className="home_right">
        <div className="home_box bc_blue">
            <div className="status body">
            <div className="point"></div>
            <div>Available for work</div>
            </div>
            <motion.div 
                animate={{ y: 0 }}
                // Fade in when the element enters the viewport:
                whileInView={{ opacity: 1 }}
                // Animate the component when its layout changes:
                layout
                // Style now supports indepedent transforms:
                style={{ y: 200 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="home_box_bold title color_green"
            >
                YOONSOO<br />JAINE SHIN
            </motion.div>
        </div>
        </div>
    </div>
  );
}

export default Home;
