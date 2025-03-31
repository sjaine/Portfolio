import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import * as motion from "motion/react-client"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../index.css';

// import required modules
import { Pagination } from 'swiper/modules';

import movienight from '../assets/img/movienight.png';
import arborday from '../assets/img/arborday.gif';
import book from '../assets/img/book.png';
import movieposter from '../assets/img/movieposter.png';
import movieticket from '../assets/img/movieticket.png';
import watering from '../assets/img/watering.png';
import filmsclothing from '../assets/img/filmclothing.gif';

const projects = [
  { id: 1, title: 'filmsclothing.one', thumbnail: filmsclothing },
  { id: 2, title: 'Arbor day', thumbnail: arborday },
  { id: 3, title: 'Movie ticket', thumbnail: movieticket },
  { id: 4, title: 'Planting app', thumbnail: watering },
  { id: 5, title: 'Book redesign', thumbnail: book },
  { id: 6, title: 'Movie night', thumbnail: movienight },
  { id: 7, title: 'Movie poster', thumbnail: movieposter }
];

function Archive() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageTitle, setSelectedImageTitle] = useState(null);

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
                        transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}   
                        onClick={() => {
                          if (project.id === 1) {
                            window.open('https://filmclothing.vercel.app/', '_blank');
                          } else {
                            setSelectedImage(project.thumbnail);
                            setSelectedImageTitle(project.title);
                          }
                        }}
                        className="archive_image"
                    >
                        <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
                    </motion.div >
                </SwiperSlide>
            ))}
        </Swiper>

        {/* OnClick */}
        {selectedImage && (
        <div className="modal" onClick={() => {setSelectedImage(null); setSelectedImageTitle(null);}}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 0.9 }}
            transition={{ type: "tween", stiffness: 100 }}
            className="modal_content"
          >
            <p className="archive_title main">{selectedImageTitle}</p>
            <img src={selectedImage} alt="Enlarged project" />
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Archive;
