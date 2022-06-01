import React from "react";
import { FormikValues } from "formik";
import PhoneInput from "react-phone-number-input";

import * as S from "./styles";

interface InputPhoneNumberProps {
  placeholder?: string;
  defaultCountry?: any;
  name: string;
  formik?: FormikValues;
  className?: string;
  label?: string;
}

export const InputPhoneNumber = ({
  placeholder = "Numéro de téléphone",
  defaultCountry = "FR",
  name,
  label,
  formik = {},
  className,
  ...rest
}: InputPhoneNumberProps) => {
  const { setFieldValue, setFieldTouched, values, errors, touched } = formik;

  return (
    <S.InputPhoneNumberWrapper className={className} {...rest}>
      {label && <label>{label}</label>}
      <PhoneInput
        className={
          errors?.[name] && touched?.[name] && errors?.[name] ? "isvalid" : ""
        }
        international
        defaultCountry={defaultCountry}
        placeholder={placeholder}
        value={values?.[name]}
        onChange={(value) => setFieldValue(name, value || "")}
        onBlur={() => setFieldTouched(name, true)}
        {...rest}
      />
      {errors?.[name] && touched?.[name] && errors?.[name] && (
        <span className="text-error">
          {errors?.[name] && touched?.[name] && errors?.[name]}
        </span>
      )}
    </S.InputPhoneNumberWrapper>
  );
};
