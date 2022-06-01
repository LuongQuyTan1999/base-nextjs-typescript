import React, { useState, useCallback } from "react";

import * as S from "./styles";
import { LoadingButton } from "@/components/LoadingButton";

interface ButtonUploadProps {
  children: React.ReactNode;
  className?: string;
  getAvatar: (avatar: string) => void;
}

export const ButtonUpload = ({
  children,
  className,
  getAvatar,
  ...rest
}: ButtonUploadProps) => {
  const [loading, setLoading] = useState(false);

  const onFileChange = useCallback(
    (event) => {
      setLoading(true);
      const selectedFile = event.target.files[0];
      const objectUrl = URL.createObjectURL(selectedFile);
      getAvatar(objectUrl);

      // const formData = new FormData();
      // formData.append("images", file);
      // getAvatar(formData);
      // uploadFile(formData)
      //   .then((res) => {
      //     const { avatar } = res[0];
      //     getAvatar(avatar);
      //   })
      //   .catch((error) => toast.error(error.message))
      //   .finally(() => {
      //     setLoading(false);
      //   });
    },
    [getAvatar]
  );

  return (
    <S.ButtonUpload
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={className}
      {...rest}
    >
      {loading ? <LoadingButton /> : children}
      <input
        type="file"
        onChange={onFileChange}
        accept="image/png, image/jpg, image/gif, image/jpeg"
      />
    </S.ButtonUpload>
  );
};
