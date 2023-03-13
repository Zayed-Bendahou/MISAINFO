import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
const ProductsCarouselData = ({ Data }) => {
  return Data?.filter((elm) => {
    return elm.Category === "Imprimantes";
  })?.map((elm) => {
    return (
      <div className="product">
        <div className="product-thumb">
          <Link to="">
            <img src={elm.Image} alt="" />
          </Link>
        </div>
        <div className="product-body">
          <div className="title">
            <h6>{elm.Name}</h6>
          </div>
          <div className="price">
            <span>{elm.Price} Dh</span>
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
    );
  });
};

export default ProductsCarouselData;
