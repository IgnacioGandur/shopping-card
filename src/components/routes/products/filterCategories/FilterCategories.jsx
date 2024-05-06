// Packages
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
// Styles
import styles from "./FilterCategories.module.css";

export default function FilterCategories() {
    const [showCategories, setShowCategories] = useState(false);
    const categories = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing",
    ];

    return (
        <aside className={styles.filters}>
            <div className={styles.header}>
                <h2>Filters</h2>
                <Link to="/products">
                    Clear all filters{" "}
                    <span className="material-symbols-rounded">close</span>
                </Link>
            </div>
            <div className={styles.divider}></div>
            <div
                id="categories"
                className={styles.categories}
            >
                <button
                    onClick={() => setShowCategories((prevState) => !prevState)}
                    className={styles.toggleShowCategories}
                >
                    {showCategories ? "Hide categories" : "Show categories"}
                    {showCategories ? (
                        <span className="material-symbols-rounded">
                            keyboard_arrow_up
                        </span>
                    ) : (
                        <span className="material-symbols-rounded">
                            keyboard_arrow_down
                        </span>
                    )}
                </button>
                {showCategories ? (
                    <div className={styles.foldableContent}>
                        {categories.map((category) => (
                            <NavLink
                                to={`category/${category}`}
                                key={category}
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                <p>{category}</p>
                            </NavLink>
                        ))}
                    </div>
                ) : (
                    ""
                )}
            </div>
        </aside>
    );
}
