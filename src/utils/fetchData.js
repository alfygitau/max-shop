export const categoriesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "706433a2d3msh4bb9d0ae7922f83p1025b5jsnc07c1f90e954",
    "X-RapidAPI-Host": "e-commerce12.p.rapidapi.com",
  },
};

export const categoriesURL = "https://dummyjson.com/products/categories";
export const allProductsURL = "https://fakestoreapi.com/products";

// shoes
export const shoesURL = "https://jumia-service.p.rapidapi.com/api/bestSales";
export const shoesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "668789db1bmsh307a14da308a791p1eb6fdjsn41b5a3c35d23",
    "X-RapidAPI-Host": "jumia-service.p.rapidapi.com",
  },
};

export const phonesURL =
  "https://jumia-service.p.rapidapi.com/api/category/iphone/products";

export const phonesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "668789db1bmsh307a14da308a791p1eb6fdjsn41b5a3c35d23",
    "X-RapidAPI-Host": "jumia-service.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
