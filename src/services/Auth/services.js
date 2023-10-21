import { useQuery, } from "@tanstack/react-query";
import { signIn, signUp } from "./callers";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";


export const useSignin = () => {
  const navigate = useNavigate();
  return useMutation(signIn, {
    onSuccess: (data) => {
      localStorage.setItem("userToken", data.token);
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useSignup = () => {
  const navigate = useNavigate();
  return useMutation(signUp, {
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useToken = () => {
  const { data: decodedToken } = useQuery({
    queryKey: ["decodedToken"],
    queryFn: () => {
      const token = localStorage.getItem("userToken");
      if (token) {
        return jwtDecode(token);
      }
      return null; // Trả về null hoặc giá trị mặc định khác khi không có token.
    },
  });
  return decodedToken;
};

