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
                  src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
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
