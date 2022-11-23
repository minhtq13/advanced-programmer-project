import { useState } from "react";
import { WrapperStyled } from "./styled";
import items from "./data";
import MenuMovie from "./component/Menu";
import Categories from "./component/Categories";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

export default function Movie() {
    const [menuItems, setMenuItems] = useState(items);
    // eslint-disable-next-line no-unused-vars
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === "all") {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };
    return (
        <WrapperStyled>
            <div className="wrapper-movie-page" style={{ width: "100%" }}>
                <div className="movie-page">
                    <div className="header">
                        <Categories
                            categories={categories}
                            filterItems={filterItems}
                        />
                    </div>
                    <div className="content">
                        <MenuMovie items={menuItems} />
                    </div>
                </div>
            </div>
        </WrapperStyled>
    );
}
