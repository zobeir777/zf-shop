import React, { useState, useRef } from "react";

import Navbar from "./Navbar";
import "./details.css";
import { useSelector, useDispatch } from "react-redux";
const Detalis = () => {
  const Reducer = useSelector((store) => store);
  const dispatch = useDispatch();
  const details = Object.values(Reducer)[1];

  const [index, setIndex] = useState(0);

  const imgDiv = useRef();
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <div>
      <Navbar />

      {details.map((product) => (
        <div className='details' key={product.id}>
          <div
            className='img-container'
            style={{ backgroundImage: `url(${product.images[index]})` }}
            onMouseMove={handleMouseMove}
            ref={imgDiv}
            onMouseLeave={() =>
              (imgDiv.current.style.backgroundPosition = `canter`)
            }
          ></div>
          <div className='box-details'>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <div className='colors'>
              {product.colors &&
                product.colors.map((color, index) => (
                  <button key={index} style={{ background: color }}></button>
                ))}
            </div>
            <p>{product.description}</p>
            <p>{product.content}</p>
            <div className='thumb'>
              {product.images.map((img, index) => (
                <img src={img} key={index} onClick={() => setIndex(index)} />
              ))}
            </div>

            <button
              className='cart'
              onClick={() => dispatch({ type: "ADD", payload: product })}
            >
              <p>افزودن به سبد خرید</p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Detalis;
