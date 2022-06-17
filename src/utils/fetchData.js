export const categoriesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "706433a2d3msh4bb9d0ae7922f83p1025b5jsnc07c1f90e954",
    "X-RapidAPI-Host": "e-commerce12.p.rapidapi.com",
  },
};

export const categoriesURL = "https://dummyjson.com/products/categories";
export const allProductsURL = "https://fakestoreapi.com/products";

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
