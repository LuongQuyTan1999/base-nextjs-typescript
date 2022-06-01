import React from "react";
import { Input } from "reactstrap";
import _find from "lodash/find";
import _isArray from "lodash/isArray";
import { FormikValues } from "formik";

import * as S from "./styles";

interface OptionsType {
  label: string;
  value: string;
}

interface CheckboxProps {
  label?: string;
  name: string;
  placeholder?: string;
  description?: string;
  className?: string;
  formik?: FormikValues;
  isSearch?: boolean;
  disabled?: boolean;
  horizontal?: string;
  title?: string;
  data?: OptionsType[];
  id: string;
}

export const Checkbox = ({
  title,
  name,
  data = [], //Data always is array
  className,
  horizontal = "horizontal",
  formik = {},
  id,
  ...res
}: CheckboxProps) => {
  const { handleChange, setFieldTouched, values, errors, touched } = formik;

  return (
    <S.CheckboxWrapper className={className}>
      {title && <S.Title>{title}</S.Title>}
      <div className={`${horizontal ? "horizontal" : "vertical"}`}>
        {data?.map((item, idx) => (
          <S.Checkbox key={idx} {...res}>
            <Input
              id={id}
              type="checkbox"
              name={name}
              value={item.value}
              checked={
                _isArray(values?.[name])
                  ? _find(values?.[name], (val) => val === item.value)
                  : item.value === values?.[name]
              }
              onChange={handleChange}
              onBlur={() => setFieldTouched(name, true)}
            />
            <label htmlFor={id}>{item.label}</label>
          </S.Checkbox>
        ))}
      </div>
      {errors?.[name] && touched?.[name] && errors?.[name] && (
        <span className="text-error">
          {errors?.[name] && touched?.[name] && errors?.[name]}
        </span>
      )}
    </S.CheckboxWrapper>
  );
};
