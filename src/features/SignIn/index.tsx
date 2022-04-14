import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

import * as S from "./styles";
import { Button, Checkbox, Image, Input, InputPassword } from "@/components";
import { SignInLayout } from "@/layouts";

export const SignIn = () => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      email: Yup.string().email().required(t("Field is required")),
      password: Yup.string().required(t("Field is required")),
    }),
    onSubmit: async (values) => {
      return values;
    },
  });
  const { handleSubmit } = formik;

  return (
    <SignInLayout>
      <S.FormWrapper>
        <S.Form id="form-sign-in" onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder={t("Typing")}
            label={t("E-mail")}
            name="email"
            formik={formik}
          />

          <InputPassword
            placeholder={t("Typing")}
            label={t("Password")}
            name="password"
            formik={formik}
          />
        </S.Form>
        <div className="remember">
          <Checkbox
            name="remember"
            id="remember"
            formik={formik}
            data={[{ label: t("Remember me"), value: true }]}
          />
        </div>
        <div className="forgot">
          <Link href="/">{t("Forgot your password?")}</Link>
        </div>
        <Button form="form-sign-in" className="w-330 custom-button">
          {t("Sign in")}
        </Button>
        <div className="social">
          <motion.div
            className="icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src="/img/auth/call-icon.svg"
              alt="call-icon"
              width="20"
              height="20"
            />
          </motion.div>

          <motion.div
            className="icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src="/img/auth/fb-icon.svg"
              alt="fb-icon"
              width="20"
              height="20"
            />
          </motion.div>

          <motion.div
            className="icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src="/img/auth/google-icon.svg"
              alt="google-icon"
              width="20"
              height="20"
            />
          </motion.div>

          <motion.div
            className="icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src="/img/auth/apple-icon.svg"
              alt="apple-icon"
              width="20"
              height="20"
            />
          </motion.div>
        </div>
        <div className="sign-up">
          {t("Don't have an account")} ?{" "}
          <Link href="/sign-up">{t("Sign up")}</Link>
        </div>
      </S.FormWrapper>
    </SignInLayout>
  );
};
