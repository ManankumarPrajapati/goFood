import React, { useEffect, useReducer, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatchCart, useCart } from "./ContextReducer";
const Card = (props) => {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const dispatch = useDispatchCart();
  let cartData = useCart();
  let priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  let finalPrice = qty * parseInt(options[size]);

  const handleAddCart = async () => {
    let food = [];
    for (const item of cartData) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }
    if (food !== null) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          qty: qty,
          price: finalPrice,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
        });
        return;
      }
      return;
    }
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div>
      <section className="menu" id="menu">
        <div className="box-container">
          <div className="box col-12">
            <div className="image">
              <img src={props.foodItem.img} alt="" />
              <a href="#" className="fas fa-heart"></a>
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <h3>{props.foodItem.name}</h3>
              <p>{props.foodItem.description}</p>
              <select
                className="h-100 "
                onChange={(e) => setQty(e.target.value)}
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option value={i + 1} key={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select
                className="h-1oo"
                onChange={(e) => setSize(e.target.value)}
                style={{ marginLeft: "1rem", width: "5rem" }}
                ref={priceRef}
              >
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <span className="price" style={{ marginLeft: "3rem" }}>
                Rs.{finalPrice}/-
              </span>
              <br />
              <hr />
              <button
                className="btn bg-success fw-bold"
                style={{ marginLeft: "1rem" }}
                type="submit"
              >
                <Link className="nav-link text-primary" onClick={handleAddCart}>
                  Add to Cart
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
