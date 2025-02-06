import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function ScrollPage({ nextPage, className, children }) {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    console.log(container)
    console.log(window.innerHeight)
    console.log(container.scrollTop)
    console.log(container.offsetHeight)

    console.log(document.documentElement.scrollTop)
    console.log(document.documentElement.offsetHeight)

    const handleScroll = () => {
      if (
        window.innerHeight + container.scrollTop ===
        document.documentElement.offsetHeight // Small threshold
      ) {
        navigate(nextPage); // Navigate to the next page
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [navigate, nextPage]);

  return (
    <div
      ref={containerRef}
      className={className} 
    >
      {children}
    </div>
  );
}

export default ScrollPage;