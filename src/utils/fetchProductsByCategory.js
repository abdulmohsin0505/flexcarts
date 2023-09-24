import axios from "axios";

const fetchProductsByCategory = async (category) => {
  const apiUrl = `https://fakestoreapi.com/products/category/${category}`;

  const response = await axios.get(apiUrl);

  if (!response.status === 200) {
    throw new Error(`Error fetching products for ${category}`);
  }

  return { category, products: response.data };
};

export const fetchProductsForAllCategories = async () => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  try {
    const promises = categories.map((category) =>
      fetchProductsByCategory(category)
    );
    const responses = await Promise.all(promises);
    return responses;
  } catch (error) {
    console.error("Error fetching products for all categories:", error);
    throw error;
  }
};
