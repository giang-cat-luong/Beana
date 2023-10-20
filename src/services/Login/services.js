import { useMutation } from "@tanstack/react-query";
import { login } from "./callers";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation(login, {
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.token);
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
