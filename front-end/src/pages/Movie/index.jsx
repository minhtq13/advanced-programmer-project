import { useEffect, useState } from "react";
import { WrapperStyled } from "./styled";
import useFilm from "../../hooks/useFilm";
import Categories from "./components/Categories";
import MenuMovie from "./components/Menu";

export default function Movie() {
    // const allCategories = [...new Set(infoFilm.map((item) => item.type))];
    const categories = ["psc", "pdc", "scdb"];
    const { infoFilmByCinema, getInfoFilmByNameCinema } = useFilm();

    useEffect(() => {
        if (infoFilmByCinema) {
            getInfoFilmByNameCinema({
                nameCinema: "bttx",
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [menuItems, setMenuItems] = useState(infoFilmByCinema);

    const filterItems = (category) => {
        const newItems = infoFilmByCinema.filter(
            (item) => item.type === category
        );
        setMenuItems(newItems);
    };

    useEffect(() => {
        if (infoFilmByCinema) {
            const newItems = infoFilmByCinema.filter(
                (item) => item.type === "psc"
            );
            setMenuItems(newItems);
        }
    }, [infoFilmByCinema]);

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
