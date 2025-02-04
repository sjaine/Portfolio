import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import * as motion from "motion/react-client"
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

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
          <div className={`nav_content homeNav ${
              isActive("/") ? "homeActive" : ""
            }`}></div>
        </a>
        <a
          href="/about"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="About"
          data-tooltip-place="top"
        >
          <div className={`nav_content aboutNav ${
              isActive("/about") ? "aboutActive" : ""
            }`}></div>
        </a>
        <a
          href="/work"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Work"
          data-tooltip-place="top"
        >
          <div className={`nav_content workNav ${
              isActive("/work") ? "workActive" : ""
            }`}></div>
        </a>
        <a
          href="/archive"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Archive"
          data-tooltip-place="top"
        >
          <div className={`nav_content archiveNav ${
              isActive("/archive") ? "archiveActive" : ""
            }`}></div>
        </a>
      </div>
      <div
        className="contact"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Contact"
        data-tooltip-place="top"
        onClick={handleContactClick}
      >
        <div className={`nav_content contactNav ${
            isContactClicked ? "contactActive" : ""
          }`}></div>
      </div>

          <div className={`contactInfo main color_text ${
              isContactClicked ? "contactInfoActive" : ""
            }`}>
            <a href="/" target="_blank" rel="noopener noreferrer"><div>[01] Resume</div><img src="/assets/img/icons/arrow-up-right.svg" alt="arrow" /></a>
            <a href="https://www.linkedin.com/in/jaineysshin/" target="_blank" rel="noopener noreferrer"><div>[02] LinkedIn</div><img src="/assets/img/icons/arrow-up-right.svg" alt="arrow" /></a>
            <a href="https://github.com/sjaine" target="_blank" rel="noopener noreferrer"><div>[03] GitHub</div><img src="/assets/img/icons/arrow-up-right.svg" alt="arrow" /></a>
          </div>
      {/* Tooltip */}
      <Tooltip id="my-tooltip" className="tooltip main" opacity={0.9} />
    </motion.div>
  );
}

export default NavBar;
