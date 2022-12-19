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
    // console.log(allCategories);
    const [menuItems, setMenuItems] = useState(infoFilm);
    // eslint-disable-next-line no-unused-vars
    const [categories, setCategories] = useState(["psc", "pdc", "scdb"]);

    const filterItems = (category) => {
        const newItems = infoFilm.filter((item) => item.type === category);
        setMenuItems(newItems);
    };

    useEffect(() => {
        const newItems = infoFilm.filter((item) => item.type === "psc");
        setMenuItems(newItems);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(menuItems);

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
