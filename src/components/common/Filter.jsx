import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./filter.css";
import { useDispatch } from "react-redux";
import {
  fetchProducts,
  fetchProductsByCategory,
} from "../../redux/slices/productsSlice";

const categories = [
  { id: 1, category: "electronics" },
  { id: 2, category: "jewelery" },
  { id: 3, category: "men's clothing" },
  { id: 4, category: "women's clothing" },
];

function Filter() {
  const location = useLocation();
  const dispatch = useDispatch();

  const filterProductsByCategory = (category) => {
    dispatch(fetchProductsByCategory(category));
    const searchParams = new URLSearchParams(location.search);

    if (category === "all") {
      searchParams.delete("category");
    }
    searchParams.set("category", category);

    window.history.replaceState({}, "", `${location.pathname}?${searchParams}`);
  };

  return (
    <nav className="my-3">
      <ul className="d-flex justify-content-center flex-wrap filter ps-0">
        <li className="ms-3 bg-dark rounded py-1 px-2 mb-2">
          <Link
            to={`/products?category=all`}
            style={{ textDecoration: "none", color: "white" }}
            onClick={() => dispatch(fetchProducts())}
          >
            All
          </Link>
        </li>
        {categories.map((cat) => {
          return (
            <li key={cat.id} className="ms-3 bg-dark rounded py-1 px-2 mb-2">
              <Link
                to={`/products?category=${cat.category}`}
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => filterProductsByCategory(cat.category)}
              >
                {cat.category}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Filter;
