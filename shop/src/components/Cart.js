import React from "react";
import Navbar from "./Navbar";
import formatCurrency from "../util";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { Reducer1 } from "./Reducer";
function Cart() {
  const Reducer = useSelector((store) => store);
  const dispatch = useDispatch();
  const cart = Object.values(Reducer)[0];
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.qty;
  };

  const total = cart.reduce(addition, 0);

  return (
    <>
      <Navbar />
      <div className='cart'>
        {cart.map((item) => {
          console.log(item);
          return (
            <div className='cart-item' key={item.id}>
              <img src={item.images} alt='' />
              <div className='cart-item-text'>
                <div className='cart-item-info'>
                  <h4>{item.title}</h4>
                  <h5> قیمت: {formatCurrency(item.price)}</h5>
                  <h5> مجموع: {formatCurrency(item.price * item.qty)}</h5>
                  <button
                    onClick={() => dispatch({ type: "REMOVE", payload: item })}
                  >
                    حذف از سبد
                  </button>
                </div>

                <div className='add-to-cart'>
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: item })
                    }
                  >
                    +
                  </button>
                  <span>تعداد : {item.qty}</span>
                  <button
                    onClick={() => {
                      if (item.qty > 1) {
                        dispatch({ type: "DECREASE", payload: item });
                      } else {
                        dispatch({ type: "REMOVE", payload: item });
                      }
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='total'>
        {total > 0 ? (
          <p>مجموع قیمت : {formatCurrency(total)}</p>
        ) : (
          <p>سبد خرید خالی است</p>
        )}
      </div>
    </>
  );
}

export default Cart;
