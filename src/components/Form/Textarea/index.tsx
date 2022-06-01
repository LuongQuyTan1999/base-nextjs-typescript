import React from "react";
import { FormikValues } from "formik";

import * as S from "./styles";

interface TextareaProps {
  label?: string;
  name: string;
  placeholder?: string;
  description?: string;
  className?: string;
  formik?: FormikValues;
  isSearch?: boolean;
  disabled?: boolean;
  rows?: number;
  cols?: number;
}

export const Textarea = ({
  label,
  name,
  placeholder,
  description,
  className,
  formik = {},
  rows = 4,
  cols = 50,
  ...rest
}: TextareaProps) => {
  const { handleChange, handleBlur, values, errors, touched } = formik;

  return (
    <S.Textarea className={className}>
      {label && <label>{label}</label>}
      <textarea
        className={errors?.[name] && touched?.[name] && "isvalid"}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values?.[name]}
        rows={rows}
        cols={cols}
        {...rest}
      />
      {errors?.[name] && touched?.[name] && errors?.[name] && (
        <span className="text-error">
          {errors?.[name] && touched?.[name] && errors?.[name]}
        </span>
      )}
      {description && <div>{description}</div>}
    </S.Textarea>
  );
};
