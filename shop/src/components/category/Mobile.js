import React, { useState } from "react";
import Navbar from "../Navbar";
import { Data } from "./../../data";
import Filter from "../Filter";
import "../product.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Mobile = () => {
  const dispatch = useDispatch();
  const [item, setItem] = useState(Data);
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const sortProducts = (event) => {
    setSort(event.target.value);
    if (sort === "asc") {
      setItem(Data.sort((a, b) => (a.id < b.id ? 1 : -1)));
    }
    if (sort === "desc") {
      setItem(Data.sort((a, b) => (a.id > b.id ? 1 : -1)));
    }
  };
  const filterProducts = (event) => {
    if (event.target.value === "") {
      setBrand(event.target.value);
      setItem(Data);
    } else {
      setBrand(event.target.value);
      setItem(
        Data.filter(
          (product) => product.availableBrand.indexOf(event.target.value) >= 0
        )
      );
    }
  };

  return (
    <div>
      <Navbar />
      <Filter
        item={item}
        brand={brand}
        filterProducts={filterProducts}
        sortProducts={sortProducts}
      />
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
export default Mobile;
