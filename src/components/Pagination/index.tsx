import React from "react";
import { motion } from "framer-motion";
import Select from "react-select";

import * as S from "./styles";
import ArrowPaginationIcon from "public/img/form/arrow-pagination";

interface PaginationProps {
  count: number;
  page: string;
  limit: number;
  handleChangePage: (page: string) => void;
}

export const Pagination = ({
  count,
  page,
  limit,
  handleChangePage,
}: PaginationProps) => {
  const totalPages = Math.ceil(count / limit);

  const options = Array.from({ length: totalPages }).map((_item, idx) => {
    return { value: String(idx + 1), label: String(idx + 1) };
  });
  const handleNextPage = (page: string) => {
    if (Number(page) === totalPages) {
      return;
    }

    const customPage = Number(page) + 1;
    handleChangePage(String(customPage));
  };

  const handleBackPage = (page: string) => {
    if (Number(page) === 1) {
      return;
    }

    const customPage = Number(page) - 1;
    handleChangePage(String(customPage));
  };

  const handleSelectPage = (page: { value: string; label: string } | null) => {
    handleChangePage(page?.value || "1");
  };

  return (
    <S.Pagination>
      <S.Left>
        Page {page} of {totalPages}
      </S.Left>

      <S.Right>
        <div>You’re on</div>

        <Select
          classNamePrefix="select"
          className="custom-select"
          onChange={(option) => handleSelectPage(option)}
          options={options}
          value={{ value: page, label: page }}
          menuPlacement="top"
        />

        <div className="arrow-pagination">
          <motion.div
            className={
              Number(page) > 1 ? "previous arrow active" : "previous arrow"
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleBackPage(page)}
          >
            <ArrowPaginationIcon />
          </motion.div>
          <motion.div
            className={
              Number(page) < totalPages ? "next arrow active" : "next arrow"
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ rotate: 180 }}
            onClick={() => handleNextPage(page)}
          >
            <ArrowPaginationIcon />
          </motion.div>
        </div>
      </S.Right>
    </S.Pagination>
  );
};
