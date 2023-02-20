import React, { Fragment } from 'react';
import './Carousel2.css';
import ProductsCarouselData from './ProductsCarouselData';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
const Carouselcontainer2 = ({ Data }) => {
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

            <div className="product-thumb2">
              <Link to="">
                <img
                  src="https://a.allegroimg.com/original/11ce68/d5b99a164b6b8d2939a14964e129/Drukarka-HP-DESKJET-2620-All-in-One-WIFI-Typ-drukarka-wielofunkcyjna"
                  alt="HP"
                />
              </Link>
            </div>

            <div className="product-thumb2">
              <Link to="">
                <img
                  src="https://assets.gadgets360cdn.com/pricee/assets/brand/og_asus.png"
                  alt="ASUS"
                />
              </Link>
            </div>

            <div className="product-thumb2">
              <Link to="">
                <img
                  src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/dell_symbol.jpg"
                  alt="DELL"
                />
              </Link>
            </div>

            <div className="product-thumb2">
              <Link to="">
                <img
                  src="data:image/png;base64,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"
                  alt="SAMSUNG"
                />
              </Link>
            </div>

            <div className="product-thumb2">
              <Link to="">
                <img
                  src="https://www.logolynx.com/images/logolynx/02/023d753f74f264aac805744e91ca3737.jpeg"
                  alt="EPSON"
                />
              </Link>
            </div>

            <div className="product-thumb2">
              <Link to="">
                <img
                  src="https://i.pinimg.com/originals/02/2e/50/022e505d0664dbc66faa239238eec232.jpg"
                  alt="KASPERSKY"
                />
              </Link>
            </div>

            <div className="product-thumb2">
              <Link to="">
                <img
                  src="https://pbs.twimg.com/media/E2JNBxJUUAElVaS.jpg"
                  alt="LOGITECH"
                />
              </Link>
            </div>

            <div className="product-thumb2">
              <Link to="">
                <img
                  src="https://storeaudio.ru/upload/iblock/526/vcsts91p8eazapfakea2lwzjz812to8y.jpg"
                  alt="ORAY"
                />
              </Link>
            </div>
          </Carousel>
        </div>
      </section>
    </Fragment>
  );
};

export default Carouselcontainer2;
