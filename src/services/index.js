import { axiosClient } from "./axiosClient";

const convertParams = (params = []) =>
  params.reduce(
    (p, c) => ((p[Object.keys(c)[0]] = Object.values(c)[0]), { ...p }),
    {}
  );

export const getCategories = (...rest) =>
  axiosClient.request({
    method: "GET",
    url: "/categories",
    params: convertParams(rest),
  });

export const getProducts = (...rest) =>
  axiosClient.request({
    method: "GET",
    url: "/products",
    params: {
      _limit: 18,
      _page: 1,
      ...rest.flat()[0],
    },
  });

export const getFooters = () =>
  axiosClient.request({
    method: "GET",
    url: "/footers",
  });
