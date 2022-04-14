import _ from "lodash";

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
