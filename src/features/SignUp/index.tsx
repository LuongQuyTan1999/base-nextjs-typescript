import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

import * as S from "./styles";
import { Button } from "@/components";
import { SignUpLayout } from "@/layouts";

export const SignUn = () => {
  const { t } = useTranslation();

  return (
    <SignUpLayout>
      <S.FormWrapper>
        <S.Form>
          <motion.div className="profile" whileTap={{ scale: 0.9 }}>
            <div>
              <Image
                src="/img/auth/client-icon.svg"
                alt="client-icon"
                width="34"
                height="34"
              />
            </div>
            <div>{t("Client")}</div>
          </motion.div>

          <motion.div className="profile" whileTap={{ scale: 0.9 }}>
            <div>
              <Image
                src="/img/auth/infirmier-icon.svg"
                alt="infirmier-icon"
                width="34"
                height="34"
              />
            </div>
            <div>{t("Infirmier")}</div>
          </motion.div>

          <motion.div className="profile" whileTap={{ scale: 0.9 }}>
            <div>
              <Image
                src="/img/auth/doctor-icon.svg"
                alt="doctor-icon"
                width="34"
                height="34"
              />
            </div>
            <div>{t("Doctor")}</div>
          </motion.div>
        </S.Form>

        <Button form="form-sign-up" className="w-330 custom-button">
          {t("Next")}
        </Button>

        <div className="sign-up">
          {t("Already have an account")} ?{" "}
          <Link href="/sign-in">{t("Sign in")}</Link>
        </div>
      </S.FormWrapper>
    </SignUpLayout>
  );
};
