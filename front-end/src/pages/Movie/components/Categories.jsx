import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Categories.scss";

const switchCategory = (category) => {
  if (category === "psc") return "PHIM SẮP CHIẾU";
  else if (category === "pdc") return "PHIM ĐANG CHIẾU";
  else if (category === "scdb") return "SUẤT CHIẾU ĐẶC BIỆT";
};
const Categories = ({ categories, filterItems }) => {
  const { changeCinema } = useSelector((state) => state.appReducer);
  const [activeCategory, setActiveCategory] = useState(0);
  useEffect(() => {
    setActiveCategory(0);
  }, [changeCinema]);

  return (
    <div className="filter-categories">
      {categories.map((category, index) => {
        return (
          <div
            key={index}
            className={`tab1 tab ${index === activeCategory ? "active" : ""}`}
            onClick={() => {
              filterItems(category);
              setActiveCategory(index);
            }}
          >
            {switchCategory(category)}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
