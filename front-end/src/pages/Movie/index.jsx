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
        const newItems = items.filter((item) => item.category === "upcoming");
        setMenuItems(newItems);
    }, []);

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
