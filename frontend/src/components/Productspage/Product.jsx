import React from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

const Product = ({ productData }) => {
  const { id } = useParams();
  return productData
    ?.filter((elm) => {
      return elm._id === id;
    })
    ?.map((elm) => {
      return (
        <>
          <div className="Product">
            <div className="details">
              <div className="big-img">
                <img src={elm.Image} alt="" />
              </div>
              <div className="box">
                <div className="row">
                  <h2>{elm.Name}</h2>
                  <span>{elm.Price} DH</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, minus velit autem placeat repellat possimus eligendi
                  animi odit aperiam vitae ex quaerat atque laborum quidem illo,
                  nostrum, perferendis eveniet amet.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                  cumque labore! Inventore ad minima veritatis perspiciatis
                  error iste laboriosam eum autem? At commodi similique nihil
                  earum quo, delectus ea voluptates.
                </p>
                <button className="cart">Ajouter au panier</button>
              </div>
            </div>
          </div>
        </>
      );
    });
};
export default Product;
