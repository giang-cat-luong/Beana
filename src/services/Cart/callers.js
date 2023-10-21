
import { API } from "./api_paths";
import { instance } from "../../utils/request";

export const getCart = async () => {
  const res = await instance.get(API.GET_CART);

  return res.data.items;
};
export const addToCart = async ({ id, name, quantity, price, cartQuantity, productImageList }) => {
  const res = await instance.post(API.ADD_TO_CART, {
    id,
    name,
    quantity,
    price,
    cartQuantity,
    productImageList,
  });
  return res.data;
};
export const removeCartItem = async ({ id }) => {
  const res = await instance.post(API.REMOVE_CART_ITEM, {
    id,
  });

  return res.data;
};