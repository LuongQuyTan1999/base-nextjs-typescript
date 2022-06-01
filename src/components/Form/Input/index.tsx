import { FormikValues } from "formik";
import React from "react";

import * as S from "./styles";

interface InputProps {
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
  description?: string;
  className?: string;
  formik?: FormikValues;
  isSearch?: boolean;
  disabled?: boolean;
}

export const Input = ({
  label,
  type,
  name,
  placeholder,
  description,
  className,
  isSearch = false,
  formik = {},
  ...rest
}: InputProps) => {
  const { handleChange, handleBlur, values, errors, touched } = formik;

  return (
    <S.Input className={className} {...rest}>
      {label && <label>{label}</label>}
      <div className={isSearch ? "input-wrapper search" : "input-wrapper"}>
        <input
          className={errors?.[name] && touched?.[name] && "is-valid"}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values?.[name]}
          {...rest}
        />
      </div>
      {errors?.[name] && touched?.[name] && errors?.[name] && (
        <span className="text-error">
          {errors?.[name] && touched?.[name] && errors?.[name]}
        </span>
      )}
      {description && <div>{description}</div>}
    </S.Input>
  );
};
