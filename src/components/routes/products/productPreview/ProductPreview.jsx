// Packages
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
// Components
import StarRating from "../starRating/StarRating";
// Styles
import styles from "./ProductPreview.module.css";

export default function ProductPreview({ product }) {
    const navigateTo = useNavigate();
    return (
        <article
            className={styles.product}
            key={product.id}
            onClick={() => {
                navigateTo(`/products/${product.id}`);
            }}
        >
            <img
                src={product.image}
                alt={product.title}
            />
            <div
                title={`The rating of this product is ${product.rating.rate} stars out of ${product.rating.count} reviews.`}
                aria-label={`The rating of this product is ${product.rating.rate} stars out of ${product.rating.count} reviews.`}
                className={styles.rating}
            >
                <StarRating rate={product.rating.rate} />
                <span className={styles.rateCount}>
                    ({product.rating.count})
                </span>
            </div>
            <h2 title={product.title}>
                {product.title.length > 40
                    ? product.title.slice(0, 40) + "..."
                    : product.title}
            </h2>
            <p>
                {product.category[0].toUpperCase() +
                    product.category.slice(1, product.category.length)}
            </p>

            <p>Price</p>
            <div className={styles.price}>
                <strong>${product.price}</strong>
            </div>
        </article>
    );
}

ProductPreview.propTypes = {
    product: PropTypes.object,
};
