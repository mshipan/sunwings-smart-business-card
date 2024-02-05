import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

import demoCard1 from "../../assets/images/demo-card/normal/1.jpeg";
import demoCard2 from "../../assets/images/demo-card/normal/2.jpeg";
import demoCard3 from "../../assets/images/demo-card/normal/3.jpeg";
import demoCard4 from "../../assets/images/demo-card/normal/4.jpeg";
import officeId1 from "../../assets/images/offices-id/1.jpeg";
import officeId2 from "../../assets/images/offices-id/2.jpeg";
import officeId3 from "../../assets/images/offices-id/3.jpeg";
import officeId4 from "../../assets/images/offices-id/4.jpeg";
import officeId5 from "../../assets/images/offices-id/5.jpeg";
import { useState } from "react";

const CardGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [officeLightboxOpen, setOfficeLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [officeLightboxIndex, setOfficeLightboxIndex] = useState(0);

  const demoCardImages = [demoCard1, demoCard2, demoCard3, demoCard4];

  const officeIdImages = [
    officeId1,
    officeId2,
    officeId3,
    officeId4,
    officeId5,
  ];

  const demoImages = demoCardImages.map((url, index) => ({
    url,
    title: `Demo Card ${index + 1}`,
  }));
  const officeImages = officeIdImages.map((url, index) => ({
    url,
    title: `Office Id Card ${index + 1}`,
  }));

  const openLightbox = (index) => {
    setLightboxOpen(true);
    setLightboxIndex(index);
  };
  const openOfficeLightbox = (index) => {
    setOfficeLightboxOpen(true);
    setOfficeLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxIndex(0);
  };
  const closeOfficeLightbox = () => {
    setOfficeLightboxOpen(false);
    setOfficeLightboxIndex(0);
  };
  return (
    <section className="card_gallery">
      <div className="container">
        <div className="card_gallery_contain">
          <h2 className="text_36">ডেমো কার্ড ডিজাইন</h2>

          {/* <!-- all card gallery --> */}
          <div>
            <div className="all_card_gallery">
              {demoImages.map((image, index) => (
                <div key={index} onClick={() => openLightbox(index)}>
                  <img
                    src={image.url}
                    alt={image.title}
                    style={{ width: "100%", height: "auto" }}
                    className="image-wrapper"
                  />
                </div>
              ))}
            </div>
            {lightboxOpen && (
              <div className="custom-lightbox">
                <Lightbox
                  images={demoImages}
                  onClose={closeLightbox}
                  index={lightboxIndex}
                  zoomStep={0.1}
                />
              </div>
            )}
          </div>

          <div className="all_card_view">
            <a href="demo-card.html" className="btn4">
              <span>সকল কার্ড দেখুন</span>
            </a>
          </div>

          <div className="offices_id_card_heading">
            <h2 className="text_36">ডেমো এম্পলয়ি অফিস আইডি কার্ড ডিজাইন</h2>
          </div>

          {/* <!-- all card gallery --> */}
          <div>
            <div className="office_card_gallery">
              {officeImages.map((image, index) => (
                <div key={index} onClick={() => openOfficeLightbox(index)}>
                  <img
                    src={image.url}
                    alt={image.title}
                    style={{ width: "100%", height: "auto" }}
                    className="image-wrapper"
                  />
                </div>
              ))}
            </div>
            {officeLightboxOpen && (
              <div className="custom-lightbox">
                <Lightbox
                  images={officeImages}
                  onClose={closeOfficeLightbox}
                  index={officeLightboxIndex}
                  zoomStep={0.1}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardGallery;
