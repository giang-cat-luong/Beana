import { useQuery, } from "@tanstack/react-query";
import { signIn, signUp } from "./callers";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Success from "../../components/Notification/Success";
import { useState } from "react";



export const useSignin = () => {
  const [isFailed2, setIsFailed2] = useState(false);
  const navigate = useNavigate();

  const mutation = useMutation(signIn, {
    onSuccess: (data) => {
      localStorage.setItem("userToken", data.token);
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
      setIsFailed2(true);
    },
  });

  return { ...mutation, isFailed2 };
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
      return null;
    },
  });
  return decodedToken;
};

