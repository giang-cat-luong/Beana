import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { upLoadBgImage } from "../Upload/callers";

const API_KEY = {
  UPLOAD_BG_IMAGE: "bgImgs",
};

export const useUpLoadBgImage = () => {
  return useMutation(upLoadBgImage, {
    onSuccess: () => {

    },
    onError: () => {

    },
  });
};