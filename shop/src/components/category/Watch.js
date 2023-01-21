import React, { useState } from "react";
import Navbar from "../Navbar";
import { Data2 } from "./../../data2";
import "../product.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const Watch = () => {
  const dispatch = useDispatch();
  const [item, setItem] = useState(Data2);
  return (
    <div>
      <Navbar />

      <div>
        <ul className='products'>
          {item.map((item) => (
            <li
              key={item.id}
              onClick={() => dispatch({ type: "SHOW", payload: item })}
            >
              <Link to={`/mobile/${item.id}`}>
                <img src={item.images[0]} alt='' />
                <p>{item.title}</p>
                <div className='product-price'>
                  <p className='p'>قیمت:</p>
                  <div className='price'>
                    {item.price}
                    <span>تومان </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Watch;
