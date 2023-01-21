import { combineReducers } from "redux";
export const Reducer1 = (cart = [], action) => {
  if (action.type === "ADD") {
    let tempcart = cart.filter((item) => item.id === action.payload.id);
    if (tempcart < 1) {
      return [...cart, action.payload];
    } else {
      alert("بابا داریمش تو سبد خرید");
      return cart;
    }
  }
  //if (action.type === "SHOW") {
  //  let tempcart = cart.filter((item) => item.id === action.payload.id);
  //  if (tempcart < 1) {
  //    return [action.payload];
  //  } else {
  //    alert("بابا داریمش تو سبد خرید");
  //    return cart;
  //  }
  //}
  if (action.type === "REMOVE") {
    return cart.filter((item) => item.id !== action.payload.id);
  }

  if (action.type === "INCREASE") {
    let tempcart = cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    return tempcart;
  }
  if (action.type === "DECREASE") {
    let tempcart = cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });
    return tempcart;
  }
  return cart;
};

export const Reducer2 = (data = [], action) => {
  if (action.type === "SHOW") {
    let tempcart = data.filter((item) => item.id === action.payload.id);
    if (tempcart < 1) {
      return [action.payload];
    }
    //} else {
    //  alert("بابا داریمش تو سبد خرید");
    //  return cart;
    //}
  }

  return data;
};
