import _ from "lodash";
import { NextRouter } from "next/router";
import qs from "qs";

export const removeValueEmpty = (obj: unknown) => {
  const result =
    typeof obj === "object" &&
    _.pickBy(obj, function (value) {
      return !(
        value === undefined ||
        value === "" ||
        value === null ||
        value === []
      );
    });

  return result;
};
// use const result = removeValueEmpty(airdrop);

export const handleFilterWithStatus = (
  router: NextRouter,
  status?: number | null
) => {
  const _query = { ...router.query, page: "1", status: status };
  const dataQuery = removeValueEmpty(_query);

  router.push({
    pathname: router.pathname,
    query: qs.stringify(dataQuery, { arrayFormat: "comma" }),
  });
};

export const handleFilterWithType = (
  router: NextRouter,
  type?: number | null
) => {
  const _query = { ...router.query, page: "1", type: type };
  const dataQuery = removeValueEmpty(_query);

  router.push({
    pathname: router.pathname,
    query: qs.stringify(dataQuery, { arrayFormat: "comma" }),
  });
};

export const handleFilterWithDatePicker = (
  router: NextRouter,
  from?: string | null,
  to?: string | null
) => {
  const _query = { ...router.query, page: "1", from, to };
  const dataQuery = removeValueEmpty(_query);

  router.push({
    pathname: router.pathname,
    query: qs.stringify(dataQuery, { arrayFormat: "comma" }),
  });
};

export const handleSearch = (router: NextRouter, textSearch?: string) => {
  const _query = { ...router.query, page: "1", text_search: textSearch };
  const dataQuery = removeValueEmpty(_query);
  router.push({
    pathname: router.pathname,
    query: qs.stringify(dataQuery, { arrayFormat: "comma" }),
  });
};

export const handleChangePage = (router: NextRouter, page: string) => {
  const _query = { ...router.query, page: page };
  const dataQuery = removeValueEmpty(_query);
  router.push({
    pathname: router.pathname,
    query: qs.stringify(dataQuery, { arrayFormat: "comma" }),
  });
};
