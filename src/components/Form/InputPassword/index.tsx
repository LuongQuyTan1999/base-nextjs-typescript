import React, { useState } from "react";
import { FormikValues } from "formik";

import * as S from "./styles";
import EyePasswordIcon from "public/img/auth/eye-password";

interface InputPasswordProps {
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
  formik?: FormikValues;
}

export const InputPassword = ({
  label,
  type,
  name,
  placeholder,
  className,
  formik = {},
  ...rest
}: InputPasswordProps) => {
  const [isHide, setIsHide] = useState(false);
  const { handleChange, handleBlur, values, errors, touched } = formik;

  return (
    <S.InputPassword className={className} {...rest}>
      <label>{label}</label>
      <div className="input-wrapper">
        <input
          className={errors?.[name] && touched?.[name] && "isvalid"}
          type={isHide ? "text" : type}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values?.[name]}
          {...rest}
        />
        <div
          onClick={() => setIsHide((prevState) => !prevState)}
          className={`${isHide ? "isHide" : ""}`}
        >
          <EyePasswordIcon />
        </div>
      </div>
      <span className="text-error">
        {errors?.[name] && touched?.[name] && errors?.[name]}
      </span>
    </S.InputPassword>
  );
};
