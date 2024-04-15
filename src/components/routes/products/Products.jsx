// Packages
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
// Components
import Loader from "./loader/Loader";
// Styles
import styles from "./Products.module.css";

function StarRating({ rate }) {
    const rating = Math.trunc(rate);
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <span
                key={i}
                className={`material-symbols-rounded ${i < rating ? styles.active : styles.inactive}`}
            >
                grade
            </span>,
        );
    }

    return <div>{stars}</div>;
}

function ProductPreview({ product }) {
    return (
        <article
            className={styles.product}
            key={product.id}
        >
            <img
                src={product.image}
                alt={product.title}
            />
            <div
                title={`The product rating is ${product.rating.rate} stars out of ${product.rating.count} reviews.`}
                aria-label={`The product rating is ${product.rating.rate} stars out of ${product.rating.count} reviews.`}
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
            <button>Add to cart</button>
        </article>
    );
}

export default function Products() {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((result) => setProducts(result))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    }, []);

    if (error) return <p>Something went wrong: {error.message}</p>;

    if (isLoading) return <Loader />;

    return (
        <AnimatePresence>
            <motion.section
                className={styles.products}
                aria-label="Products section"
                initial={{
                    opacity: 0,
                }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {products.map((product) => (
                    <ProductPreview
                        product={product}
                        key={product.id}
                    />
                ))}
            </motion.section>
        </AnimatePresence>
    );
}

ProductPreview.propTypes = {
    product: PropTypes.object,
};

StarRating.propTypes = {
    rate: PropTypes.number,
};
