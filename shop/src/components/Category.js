import React from "react";
import "./category.css";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className='category' id={"category"}>
      <ul>
        <li>
          <Link to='/Watch'>
            <div className='category-element'>
              <div className='category-img'>
                <img src='/images2/1.png' alt='' />
              </div>
              <h2> ساعت هوشمند</h2>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/Laptop'>
            <div className='category-element'>
              <div className='category-img'>
                <img src='/images2/2.png' alt='' />
              </div>
              <h2>لبتاب</h2>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/Tablet'>
            <div className='category-element'>
              <div className='category-img'>
                <img src='/images2/3.png' alt='' />
              </div>
              <h2>تبلت</h2>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/Mobile'>
            <div className='category-element'>
              <div className='category-img'>
                <img src='/images2/4.png' alt='' />
              </div>
              <h2>موبایل</h2>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/dp'>
            <div className='category-element'>
              <div className='category-img'>
                <img src='/images2/5.png' alt='' />
              </div>
              <h2>لوازم دیجیتال</h2>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Category;
