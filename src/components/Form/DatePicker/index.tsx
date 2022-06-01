import dayjs from "dayjs";
import { FormikValues } from "formik";
import { useTranslation } from "next-i18next";
import React from "react";
import DatePickerLib, { registerLocale } from "react-datepicker";
import { fr, enGB } from "date-fns/locale"; // the locale you want
require("dayjs/locale/fr");
require("dayjs/locale/en");
registerLocale("fr", fr);
registerLocale("enGB", enGB);

import * as S from "./styles";
import { DATE_PICKER_FORMAT } from "@/constants";
import { Image } from "@/components";

interface DatePickerProps {
  label?: string;
  name: string;
  description?: string;
  className?: string;
  formik?: FormikValues;
  disabled?: boolean;
}

export const DatePicker = ({
  label,
  name,
  description,
  className,
  formik = {},
  ...rest
}: DatePickerProps) => {
  const { setFieldValue, handleBlur, values, errors, touched } = formik;
  const { i18n } = useTranslation();
  return (
    <S.DatePicker
      className={`${values?.[name] ? className + " " + "is-value" : className}`}
      {...rest}
    >
      {label && <label>{label}</label>}
      <div className="">
        <DatePickerLib
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="custom-header">
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                className="custom-arrow prev"
              >
                <Image
                  src="/img/arrow.svg"
                  alt="arrow"
                  width="22"
                  height="22"
                />
              </button>

              <div className="current-date">
                <div>{dayjs(date).locale(i18n.language).format("MMMM")}</div>
                <div>{dayjs(date).format("YYYY")}</div>
              </div>

              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                className="custom-arrow next"
              >
                <Image
                  src="/img/arrow.svg"
                  alt="arrow"
                  width="22"
                  height="22"
                />
              </button>
            </div>
          )}
          className={errors?.[name] && touched?.[name] && "is-valid"}
          name={name}
          onChange={(date) => setFieldValue(name, date)}
          onBlur={handleBlur}
          selected={values?.[name] ? new Date(values?.[name]) : null}
          autoComplete="false"
          placeholderText="dd/mm/yyyy"
          dateFormat={DATE_PICKER_FORMAT}
          locale={i18n.language === "fr" ? "fr" : "enGB"}
          isClearable
          {...rest}
        />
      </div>
      {errors?.[name] && touched?.[name] && errors?.[name] && (
        <span className="text-error">
          {errors?.[name] && touched?.[name] && errors?.[name]}
        </span>
      )}
      {description && <div>{description}</div>}
    </S.DatePicker>
  );
};
