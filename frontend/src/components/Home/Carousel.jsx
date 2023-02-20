import React, { Fragment } from 'react';
import './Carousel.css';
import ProductsCarouselData from './ProductsCarouselData';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
const Carouselcontainer = ({ Data }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
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
            {/* {<ProductsCarouselData Data={Data}/>} */}
            <div className="product ">
              <div className="product-thumb">
                <Link to="">
                  <img
                    src="https://static.techspot.com/articles-info/821/images/Image_09S.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>logitech g502</h6>
                </div>
                <div className="price">
                  <span>{600} Dh</span>
                </div>
                <div className="footer">
                  <div className="btn">
                    <Link to="" className="btn-custom primary">
                      Ajouter au Panier
                    </Link>
                    <Link to="" className="btn-custom second">
                      voir le produit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <Link to="">
                  <img
                    src="https://static.techspot.com/articles-info/821/images/Image_09S.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>logitech g502</h6>
                </div>
                <div className="price">
                  <span>{600} Dh</span>
                </div>
                <div className="footer">
                  <div className="btn">
                    <Link to="" className="btn-custom primary">
                      Ajouter au Panier
                    </Link>
                    <Link to="" className="btn-custom second">
                      voir le produit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <Link to="">
                  <img
                    src="https://static.techspot.com/articles-info/821/images/Image_09S.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>logitech g502</h6>
                </div>
                <div className="price">
                  <span>{600} Dh</span>
                </div>
                <div className="footer">
                  <div className="btn">
                    <Link to="" className="btn-custom primary">
                      Ajouter au Panier
                    </Link>
                    <Link to="" className="btn-custom second">
                      voir le produit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <Link to="">
                  <img
                    src="https://static.techspot.com/articles-info/821/images/Image_09S.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>logitech g502</h6>
                </div>
                <div className="price">
                  <span>{600} Dh</span>
                </div>
                <div className="footer">
                  <div className="btn">
                    <Link to="" className="btn-custom primary">
                      Ajouter au Panier
                    </Link>
                    <Link to="" className="btn-custom second">
                      voir le produit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <Link to="">
                  <img
                    src="https://static.techspot.com/articles-info/821/images/Image_09S.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>logitech g502</h6>
                </div>
                <div className="price">
                  <span>{600} Dh</span>
                </div>
                <div className="footer">
                  <div className="btn">
                    <Link to="" className="btn-custom primary">
                      Ajouter au Panier
                    </Link>
                    <Link to="" className="btn-custom second">
                      voir le produit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <Link to="">
                  <img
                    src="https://static.techspot.com/articles-info/821/images/Image_09S.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>logitech g502</h6>
                </div>
                <div className="price">
                  <span>{600} Dh</span>
                </div>
                <div className="footer">
                  <div className="btn">
                    <Link to="" className="btn-custom primary">
                      Ajouter au Panier
                    </Link>
                    <Link to="" className="btn-custom second">
                      voir le produit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <Link to="">
                  <img
                    src="https://static.techspot.com/articles-info/821/images/Image_09S.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>logitech g502</h6>
                </div>
                <div className="price">
                  <span>{600} Dh</span>
                </div>
                <div className="footer">
                  <div className="btn">
                    <Link to="" className="btn-custom primary">
                      Ajouter au Panier
                    </Link>
                    <Link to="" className="btn-custom second">
                      voir le produit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <Link to="">
                  <img
                    src="https://static.techspot.com/articles-info/821/images/Image_09S.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>logitech g502</h6>
                </div>
                <div className="price">
                  <span>{600} Dh</span>
                </div>
                <div className="footer">
                  <div className="btn">
                    <Link to="" className="btn-custom primary">
                      Ajouter au Panier
                    </Link>
                    <Link to="" className="btn-custom second">
                      voir le produit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <Link to="">
                  <img
                    src="https://static.techspot.com/articles-info/821/images/Image_09S.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>logitech g502</h6>
                </div>
                <div className="price">
                  <span>{600} Dh</span>
                </div>
                <div className="footer">
                  <div className="btn">
                    <Link to="" className="btn-custom primary">
                      Ajouter au Panier
                    </Link>
                    <Link to="" className="btn-custom second">
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
