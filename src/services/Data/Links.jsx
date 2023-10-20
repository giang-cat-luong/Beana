import { BsCurrencyDollar } from "react-icons/bs";
import { FaHandshake, FaShare } from "react-icons/fa";
import {
  FiHome,
  FiLayers,
  FiMail,
  FiMessageCircle,
  FiSettings,
  FiShoppingBag,
  FiShoppingCart,
  FiUsers,
} from "react-icons/fi";

export const links = [
  {
    name: "Dashboard",
    icon: <FiHome />,
    url: "/",
  },
  {
    name: "Products",
    icon: <FiShoppingBag />,
    url: "/products",
    subLinks: [
      {
        name: "All Products",
        url: "/products",
      },
      {
        name: "Add Product",
        url: "/products/add",
      },
      {
        name: "Test quill",
        url: "/create-blog",
      },
    ],
  },
  {
    name: "Categories",
    icon: <FiUsers />,
    url: "/products/categories",
  },
  {
    name: "Customers",
    icon: <FiUsers />,
    url: "/customers",
  },
  {
    name: "Orders",
    icon: <FiShoppingCart />,
    url: "/orders"
  },
  {
    name: "Reputations",
    icon: <FiLayers />,
    url: "/reputations",
  },
  {
    name: "Reviews",
    icon: <FiMessageCircle />,
    url: "/reviews",
  },
];
