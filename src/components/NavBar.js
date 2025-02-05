import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import * as motion from "motion/react-client"
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import arrow from '../assets/img/icons/arrow-up-right.svg'

function NavBar() {
    const location = useLocation();
    const [isContactClicked, setIsContactClicked] = useState(false);

    const isActive = (href) => {
      return location.pathname === href;
    };

    const handleContactClick = () => {
      setIsContactClicked(!isContactClicked); // Toggle the state
    };

  return (
    <motion.div
    className={`NavBar ${
      isContactClicked ? "navBarActive" : ""
    }`}
    >
      <div className="common">
        <a
          href="/"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Home"
          data-tooltip-place="top"
        >
          <motion.div 
          animate={{ y: 0 }}
          // Fade in when the element enters the viewport:
          whileInView={{ opacity: 1 }}
          // Animate the component when its layout changes:
          layout
          // Style now supports indepedent transforms:
          style={{ y: -15, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          className={`nav_content homeNav ${
              isActive("/") ? "homeActive" : ""
            }`}></motion.div>
        </a>
        <a
          href="/about"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="About"
          data-tooltip-place="top"
        >
          <motion.div 
          animate={{ y: 0 }}
          // Fade in when the element enters the viewport:
          whileInView={{ opacity: 1 }}
          // Animate the component when its layout changes:
          layout
          // Style now supports indepedent transforms:
          style={{ y: -15, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className={`nav_content aboutNav ${
              isActive("/about") ? "aboutActive" : ""
            }`}></motion.div>
        </a>
        <a
          href="/work"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Work"
          data-tooltip-place="top"
        >
          <motion.div 
          animate={{ y: 0 }}
          // Fade in when the element enters the viewport:
          whileInView={{ opacity: 1 }}
          // Animate the component when its layout changes:
          layout
          // Style now supports indepedent transforms:
          style={{ y: -15, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className={`nav_content workNav ${
              isActive("/work") ? "workActive" : ""
            }`}></motion.div>
        </a>
        <a
          href="/archive"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Archive"
          data-tooltip-place="top"
        >
          <motion.div 
          animate={{ y: 0 }}
          // Fade in when the element enters the viewport:
          whileInView={{ opacity: 1 }}
          // Animate the component when its layout changes:
          layout
          // Style now supports indepedent transforms:
          style={{ y: -15, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
          className={`nav_content archiveNav ${
              isActive("/archive") ? "archiveActive" : ""
            }`}></motion.div>
        </a>
      </div>
      <div
        className="contact"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Contact"
        data-tooltip-place="top"
        onClick={handleContactClick}
      >
        <motion.div 
        animate={{ y: 0 }}
        // Fade in when the element enters the viewport:
        whileInView={{ opacity: 1 }}
        // Animate the component when its layout changes:
        layout
        // Style now supports indepedent transforms:
        style={{ y: -15, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
        className={`nav_content contactNav ${
            isContactClicked ? "contactActive" : ""
          }`}></motion.div>
      </div>

          <div className={`contactInfo main color_text ${
              isContactClicked ? "contactInfoActive" : ""
            }`}>
            <a href="/" target="_blank" rel="noopener noreferrer"><div>[01] Resume</div><img src={arrow} alt="arrow" /></a>
            <a href="https://www.linkedin.com/in/jaineysshin/" target="_blank" rel="noopener noreferrer"><div>[02] LinkedIn</div><img src={arrow} alt="arrow" /></a>
            <a href="https://github.com/sjaine" target="_blank" rel="noopener noreferrer"><div>[03] GitHub</div><img src={arrow} alt="arrow" /></a>
          </div>
      {/* Tooltip */}
      <Tooltip id="my-tooltip" className="tooltip main" opacity={0.9} />
    </motion.div>
  );
}

export default NavBar;
