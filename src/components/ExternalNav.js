import React from "react";
// import { useLocation } from "react-router-dom";
// import * as motion from "motion/react-client"
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function ExternalNav({ gitHub, liveSite}) {
  return (
    <div
        className="externalNav"
    >
        <a
          href={gitHub}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="GitHub"
          data-tooltip-place="top"
          className="externalNav_content"
          target="_blank" rel="noopener noreferrer"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          href={liveSite}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Live Site"
          data-tooltip-place="top"
          className="externalNav_content"
          target="_blank" rel="noopener noreferrer"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      {/* Tooltip */}
      <Tooltip id="my-tooltip" className="tooltip main" opacity={0.9} />
    </div>
  );
}

export default ExternalNav;
