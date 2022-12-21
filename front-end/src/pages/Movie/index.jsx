import { useEffect, useState } from "react";
import useFilm from "../../hooks/useFilm";
import Categories from "./components/Categories";
import MenuMovie from "./components/Menu";
import { WrapperStyled } from "./styled";

export default function Movie() {
    const { infoFilm, getInfoFilmInFilmPage } = useFilm();
    useEffect(() => {
        if (infoFilm) {
            getInfoFilmInFilmPage();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // const allCategories = [...new Set(infoFilm.map((item) => item.type))];

    const [menuItems, setMenuItems] = useState(infoFilm);

    const categories = ["psc", "pdc", "scdb"];

    const filterItems = (category) => {
        const newItems = infoFilm.filter((item) => item.type === category);
        setMenuItems(newItems);
    };

    useEffect(() => {
        if (infoFilm) {
            const newItems = infoFilm.filter((item) => item.type === "psc");
            setMenuItems(newItems);
        }
    }, [infoFilm]);
    //   console.log(infoFilm);

    return (
        <WrapperStyled>
            <div className="wrapper-movie-page" style={{ width: "100%" }}>
                <div className="movie-page">
                    <div className="header-movie-page">
                        <Categories
                            categories={categories}
                            filterItems={filterItems}
                        />
                    </div>
                    <div className="content-movie-page">
                        <MenuMovie items={menuItems} />
                    </div>
                </div>
            </div>
        </WrapperStyled>
    );
}

// import { useState } from "react";
// import { WrapperStyled } from "./styled";
// import items from "./data";
// import MenuMovie from "./components/Menu";
// import Categories from "./components/Categories";
// import { useEffect } from "react";

// const allCategories = [...new Set(items.map((item) => item.category))];

// export default function Movie() {
//   const [menuItems, setMenuItems] = useState(items);
//   // eslint-disable-next-line no-unused-vars
//   const [categories, setCategories] = useState(allCategories);

//   const filterItems = (category) => {
//     const newItems = items.filter((item) => item.category === category);
//     setMenuItems(newItems);
//   };

//   useEffect(() => {
//     if (items) {
//       const newItems = items.filter((item) => item.category === "upcoming");
//       setMenuItems(newItems);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [items]);

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
