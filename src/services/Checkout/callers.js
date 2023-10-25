
import { API } from "./api_paths";
import { instance } from "../../utils/request";

// export const getCart = async () => {
//   const res = await instance.get(API.GET_CART);

//   return res.data.items;
// };
export const addOrder = async ({ amount, addressId, paymentId, orderDetailsList }) => {
  const res = await instance.post(API.ADD_ORDER, {
    amount,
    addressId,
    paymentId,
    orderDetailsList,
  });
  return res.data;
};
