import React, { useState } from "react";
import Navbar from "../Navbar";
import { Data1 } from "./../../data1";
import "../product.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const Laptop = () => {
  const [items, setItems] = useState(Data1);

  const dispatch = useDispatch();
  return (
    <div>
      <Navbar />

      <div>
        <ul className='products'>
          {items.map((item) => (
            <li key={item.id}>
              <Link
                to={`/laptop/${item.id}`}
                onClick={() => dispatch({ type: "SHOW", payload: item })}
              >
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
export default Laptop;
