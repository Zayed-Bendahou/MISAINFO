import React, { Fragment } from 'react';
import './Carousel.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import p1 from '../../Assets/prod1.jpg';
import p2 from '../../Assets/prod2.jpg';
import p3 from '../../Assets/prod3.jpg';
import p4 from '../../Assets/prod4.jpg';
import p5 from '../../Assets/prod5.jpg';
import p6 from '../../Assets/prod6.jpg';
import p7 from '../../Assets/prod7.jpg';
import p8 from '../../Assets/prod8.jpg';
const Carouselcontainer = ({ Data }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Fragment>
      <section>
        <div className="row">
          <Carousel
            responsive={responsive}
            infinite={true}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            centerMode={true}
          >
            <div className="product ">
              <div className="product-thumb">
                <Link to="/product/Pc%20et%20Ordinateurs/Ordinateurs%20Portables/63ea1aadc03f8858c583d3c8">
                  <img src={p1} alt="" />
                </Link>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>LENOVO THINKPAD X390</h6>
                </div>
                <div className="price">
                  <span>21452.64 DH</span>
                </div>
                <div className="footer">
                  <div className="btn">
                    <Link to="" className="btn-custom primary">
                      Ajouter au Panier
                    </Link>
                    <Link
                      to="/product/Pc%20et%20Ordinateurs/Ordinateurs%20Portables/63ea1aadc03f8858c583d3c8"
                      className="btn-custom second"
                    >
                      voir le produit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <Link to="/product/Image%20&%20son/Écrans%20de%20projection/63ea1aadc03f8858c583d3ae">
                  <img src={p2} alt="" />
                </Link>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>ORAY ECRAN</h6>
                </div>
                <div className="price">
                  <span>5230 DH</span>
                </div>
                <div className="footer">
                  <div className="btn">
                    <Link to="" className="btn-custom primary">
                      Ajouter au Panier
                    </Link>
                    <Link
                      to="/product/Image%20&%20son/Écrans%20de%20projection/63ea1aadc03f8858c583d3ae"
                      className="btn-custom second"
                    >
                      voir le produit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <Link to="">
                  <img src={p3} alt="" />
                </Link>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>SAMSUNG A31S</h6>
                </div>
                <div className="price">
                  <span>2450 DH</span>
                </div>
                <div className="footer">
                  <div className="btn">
                    <Link to="" className="btn-custom primary">
                      Ajouter au Panier
                    </Link>
                    <Link
                      to="/product/Téléphonie/Smartphones%20&%20Tablettes/63ea1aadc03f8858c583d3f5"
                      className="btn-custom second"
                    >
                      voir le produit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <Link to="/product/Réseaux/Switches/63ea1aadc03f8858c583d3e7">
                  <img src={p4} alt="" />
                </Link>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Tp-Link SG1008D</h6>
                </div>
                <div className="price">
                  <span>350 DH</span>
                </div>
                <div className="footer">
                  <div className="btn">
                    <Link to="" className="btn-custom primary">
                      Ajouter au Panier
                    </Link>
                    <Link
                      to="/product/Réseaux/Switches/63ea1aadc03f8858c583d3e7"
                      className="btn-custom second"
                    >
                      voir le produit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <Link to="/product/Périphériques/Claviers%20&%20Souris/63ea1aadc03f8858c583d3d6">
                  <img src={p5} alt="" />
                </Link>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>LOGITECH M185S</h6>
                </div>
                <div className="price">
                  <span>174 DH</span>
                </div>
                <div className="footer">
                  <div className="btn">
                    <Link to="" className="btn-custom primary">
                      Ajouter au Panier
                    </Link>
                    <Link
                      to="/product/Périphériques/Claviers%20&%20Souris/63ea1aadc03f8858c583d3d6"
                      className="btn-custom second"
                    >
                      voir le produit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <Link to="/product/Logiciels/Antivirus/63ea1aadc03f8858c583d3b8">
                  <img src={p6} alt="" />
                </Link>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>KASPERSKY TOTAL SECURITY 2020</h6>
                </div>
                <div className="price">
                  <span>450 DH</span>
                </div>
                <div className="footer">
                  <div className="btn">
                    <Link to="" className="btn-custom primary">
                      Ajouter au Panier
                    </Link>
                    <Link
                      to="/product/Logiciels/Antivirus/63ea1aadc03f8858c583d3b8"
                      className="btn-custom second"
                    >
                      voir le produit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <Link to="/product/Système%20De%20Sécurité/Cameras%20de%20surveillances/63ea1aadc03f8858c583d3ec">
                  <img src={p7} alt="" />
                </Link>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>MINIDOME HDCVI 4 MEGA</h6>
                </div>
                <div className="price">
                  <span>270 DH</span>
                </div>
                <div className="footer">
                  <div className="btn">
                    <Link to="" className="btn-custom primary">
                      Ajouter au Panier
                    </Link>
                    <Link
                      to="/product/Système%20De%20Sécurité/Cameras%20de%20surveillances/63ea1aadc03f8858c583d3ec"
                      className="btn-custom second"
                    >
                      voir le produit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <Link to="/product/Imprimantes/Imprimantes/63ea1aadc03f8858c583d3b5">
                  <img src={p8} alt="" />
                </Link>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>EPSON JET D’ENCRE L3150 COULEUR</h6>
                </div>
                <div className="price">
                  <span>2550 DH</span>
                </div>
                <div className="footer">
                  <div className="btn">
                    <Link to="" className="btn-custom primary">
                      Ajouter au Panier
                    </Link>
                    <Link
                      to="/product/Imprimantes/Imprimantes/63ea1aadc03f8858c583d3b5"
                      className="btn-custom second"
                    >
                      voir le produit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </Fragment>
  );
};

export default Carouselcontainer;
