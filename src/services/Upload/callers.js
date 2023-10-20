import { instanceUpload } from '../../utils/request'
import { API } from "./api_paths";

export const upLoadBgImage = async ({ type, image }) => {

  const res = await instanceUpload.post(API.UPLOAD_BG_IMAGE, {
    type,
    image,
  });

  return res.data;
};