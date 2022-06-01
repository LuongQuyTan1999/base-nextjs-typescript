import React from "react";
import Select from "react-select";
import { FormikValues } from "formik";

import * as S from "./styles";

interface OptionsType {
  label: string;
  value: string;
}

interface SelectOptionProps {
  label?: string;
  name: string;
  className?: string;
  formik?: FormikValues;
  options?: OptionsType[];
  placeholder?: string;
}

export const SelectOption = ({
  label,
  name,
  className,
  formik = {},
  options = [],
  placeholder,
  ...rest
}: SelectOptionProps) => {
  const { setFieldValue, setFieldTouched, values, errors, touched } = formik;

  return (
    <S.SelectOption className={className}>
      {label && <label>{label}</label>}
      <Select
        classNamePrefix="select"
        className={
          errors?.[name] && touched?.[name] ? "isvalid custom" : "custom"
        }
        name={name}
        onChange={(option) => setFieldValue(name, option)}
        value={values?.[name] || undefined}
        onBlur={() => setFieldTouched(name, true)}
        options={options}
        placeholder={placeholder}
        {...rest}
      />
      {errors?.[name] && touched?.[name] && errors?.[name] && (
        <span className="text-error">
          {errors?.[name] && touched?.[name] && errors?.[name]}
        </span>
      )}
    </S.SelectOption>
  );
};
