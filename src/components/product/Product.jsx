import React from "react";
import { useStateValue } from "../../store/StateProvider";
import "./Product.css";

function Product({ product }) {
  const { id, title, price, image, rating } = product;

  const [_, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        image,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt="" />
      <button className="product__button" onClick={addToBasket}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
