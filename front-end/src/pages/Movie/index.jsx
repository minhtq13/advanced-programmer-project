// import { useEffect, useState } from "react";
// import useFilm from "../../hooks/useFilm";
// import Categories from "./components/Categories";
// import MenuMovie from "./components/Menu";
// import { WrapperStyled } from "./styled";

// export default function Movie() {
//   // const allCategories = [...new Set(infoFilm.map((item) => item.type))];
//   const categories = ["psc", "pdc", "scdb"];
//   const { infoFilmByCinema, getInfoFilmByNameCinema } = useFilm();

//   useEffect(() => {
//     if (infoFilmByCinema) {
//       getInfoFilmByNameCinema({
//         nameCinema: "bttx",
//       });
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   console.log(infoFilmByCinema);
//   const [menuItems, setMenuItems] = useState(infoFilmByCinema);

//   const filterItems = (category) => {
//     const newItems = infoFilmByCinema.filter((item) => item.type === category);
//     setMenuItems(newItems);
//   };

//   useEffect(() => {
//     if (infoFilmByCinema) {
//       const newItems = infoFilmByCinema.filter((item) => item.type === "psc");
//       setMenuItems(newItems);
//     }
//   }, [infoFilmByCinema]);
//   //   console.log(infoFilm);

//   return (
//     <WrapperStyled>
//       <div className="wrapper-movie-page" style={{ width: "100%" }}>
//         <div className="movie-page">
//           <div className="header-movie-page">
//             <Categories categories={categories} filterItems={filterItems} />
//           </div>
//           <div className="content-movie-page">
//             <MenuMovie items={menuItems} />
//           </div>
//         </div>
//       </div>
//     </WrapperStyled>
//   );
// }

import { useState } from "react";
import { WrapperStyled } from "./styled";
import items from "./data";
import MenuMovie from "./components/Menu";
import Categories from "./components/Categories";
import { useEffect } from "react";

const allCategories = [...new Set(items.map((item) => item.category))];

export default function Movie() {
  const [menuItems, setMenuItems] = useState(items);
  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  useEffect(() => {
    if (items) {
      const newItems = items.filter((item) => item.category === "upcoming");
      setMenuItems(newItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <WrapperStyled>
      <div className="wrapper-movie-page" style={{ width: "100%" }}>
        <div className="movie-page">
          <div className="header-movie-page">
            <Categories categories={categories} filterItems={filterItems} />
          </div>
          <div className="content-movie-page">
            <MenuMovie items={menuItems} />
          </div>
        </div>
      </div>
    </WrapperStyled>
  );
}
