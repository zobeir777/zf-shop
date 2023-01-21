import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoBasketOutline, IoHomeSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Footer from "./Footer";
function Navbar() {
  const Reducer = useSelector((store) => store);
  const cart = Object.values(Reducer)[0];
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linkHeight = linksRef.current.getBoundingClientRect().height;
    if (menu) {
      linksContainerRef.current.style.height = `${linkHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [menu]);

  return (
    <>
      <nav>
        <div className='menu' onClick={toggleMenu}>
          {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <Link to='/cart'>
          <div className='right-navbar'>
            <IoBasketOutline />
            <span className='notif'>{cart.length}</span>
          </div>
        </Link>
        <div className='nav-menu' ref={linksContainerRef}>
          <ul ref={linksRef}>
            <li>
              <Link to='/'>خانه</Link>
            </li>
            <li>
              <Link to='/Category'>محصولات</Link>
            </li>
            <li>
              <Link to='/'>درباره ما</Link>
            </li>
            <li>
              <Link to='/footer'>تماس با ما</Link>
            </li>
            <li>
              <Link to='/'>ثبت نام / ورود</Link>
            </li>
          </ul>
        </div>

        <div class='search-form'>
          <form class='form-bundle' action='#'>
            <div class='clear'>
              <i class='icon icon-search icon-ml'></i>
              <input
                id='search__input'
                name='q'
                type='text'
                autocomplete='off'
                placeholder='محصول,دسته یا برند مورد نظرتان را جستجو کنید...'
                class='invisible-input'
                value=''
              />
              <button class='submit'>جستجو</button>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
