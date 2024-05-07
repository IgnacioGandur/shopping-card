// Packages
import { Link } from "react-router-dom";
// Images
import jewelery from "../../../../../assets/images/jewelery.webp";
import electronics from "../../../../../assets/images/electronics.webp";
import menClothing from "../../../../../assets/images/men-clothing.webp";
import womenClothing from "../../../../../assets/images/women-clothing.webp";
// Styles
import styles from "./CategoriesSlide.module.css";

export default function CategoriesSlide() {
    const categories = [
        {
            imageUrl: jewelery,
            description: "Jewelery",
            link: "jewelery",
        },
        {
            imageUrl: electronics,
            description: "Electronics",
            link: "electronics",
        },
        {
            imageUrl: menClothing,
            description: "Men Clothing",
            link: "men's clothing",
        },
        {
            imageUrl: womenClothing,
            description: "Women Clothing",
            link: "women's clothing",
        },
    ];

    return (
        <div className={styles.categoriesSlide}>
            <h2>Shop By Category</h2>
            {categories.map((category, index) => (
                <div
                    key={index}
                    style={{
                        backgroundImage: `linear-gradient(#00000055, #00000055),url(${category.imageUrl})`,
                    }}
                >
                    <Link to={`products/category/${category.link}`}>
                        <button
                            aria-label={`Go to the ${category.description} category.`}
                        >
                            {category.description}
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
}
