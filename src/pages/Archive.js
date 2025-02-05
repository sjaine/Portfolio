import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import * as motion from "motion/react-client"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../index.css';

// import required modules
import { Pagination } from 'swiper/modules';

const projects = [
    { id: 1, title: 'arbor day', thumbnail: "assets/img/arborday.gif" },
    { id: 2, title: 'movie ticket', thumbnail: "/assets/img/movieticket.png" },
    { id: 3, title: 'planting app', thumbnail: "/assets/img/watering.png" },
    { id: 4, title: 'book redesign', thumbnail: "/assets/img/book.png" },
    { id: 5, title: 'movie night', thumbnail: "/assets/img/movienight.png" },
    { id: 6, title: 'movie poster', thumbnail: "/assets/img/movieposter.png" }
  ];

function Archive() {
  return (
    <div className="archive">
        {/* header */}
        <div className="link main color_orange">
            <div className="gotoHome">👋 sjaine.me/archive</div>
            <div className="copyright main color_orange">© 2025 Yoonsoo Jaine Shin <br />
Hand-coded with ❤️ using React & Motion</div>
        </div>
        {/* sections */}
        <Swiper
            breakpoints={{
                1024: { slidesPerView: 3.5, 
                    spaceBetween: 50 }, 
                768: { slidesPerView: 1.5, 
                    spaceBetween: 30 },
                0: { slidesPerView: 1, 
                    spaceBetween: 30 }
            }}
            grabCursor={true}
            modules={[Pagination]}
            initialSlide={0}
            className="mySwiper"
            style={{ padding: "45px" }}
        >
            {projects.map((project, index) => (
                <SwiperSlide className="archive_container">
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        animate={{ y: 0 }}
                        // Fade in when the element enters the viewport:
                        whileInView={{ opacity: 1 }}
                        // Animate the component when its layout changes:
                        layout
                        // Style now supports indepedent transforms:
                        style={{ y: 70, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}   className="archive_image"
                    >
                        <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
                    </motion.div >
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
}

export default Archive;
