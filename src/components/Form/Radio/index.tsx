import { FormikValues } from "formik";
import { useTranslation } from "next-i18next";
import React from "react";

import * as S from "./styles";

interface RadioProps {
  title?: string;
  name: string;
  formik?: FormikValues;
  className?: string;
  data?: { label: string; value: string }[];
  isHorizontal?: boolean;
}

export const Radio = ({
  title,
  name,
  data,
  className,
  formik = {},
  isHorizontal = false,
  ...res
}: RadioProps) => {
  const { t } = useTranslation();

  const { setFieldTouched, handleChange, values, errors, touched } = formik;

  return (
    <S.RadioWrapper className={className}>
      {title && <S.Title>{title}</S.Title>}
      <div className={isHorizontal ? "horizontal" : "vertical"}>
        {data?.map((item, idx) => (
          <S.Radio className="" key={idx} {...res}>
            <input
              type="radio"
              name={name}
              id={item.label}
              value={item.value}
              onBlur={() => setFieldTouched(name, true)}
              onChange={handleChange}
              checked={values?.[name] === item.value}
            />
            <label htmlFor={item.label}>{t(item.label)}</label>
          </S.Radio>
        ))}
      </div>
      <span className="text-error">
        {errors?.[name] && touched?.[name] && errors?.[name]}
      </span>
    </S.RadioWrapper>
  );
};
