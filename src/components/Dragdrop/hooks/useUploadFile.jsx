import { useState } from "react";
import axios from "axios";

export const useUploadFile = (url) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setIsLoading] = useState(false);

  const uploadForm = async (formData) => {
    setIsLoading(true);
    try {
      const resp = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const progress =  Math.floor((loaded / total) * 100);
          console.log('progress', progress + '%')
          setProgress(progress);
        }
      })
      setIsSuccess(true)
      return resp;
    }
    catch (err) {
      return err;
    }
  };

  return { uploadForm, isSuccess, progress, loading };
};