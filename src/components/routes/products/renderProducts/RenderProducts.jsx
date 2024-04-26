// Packages
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// Components
import ProductPreview from "../productPreview/ProductPreview";
import Loader from "../loader/Loader";
// Styles
import styles from "./RenderProducts.module.css";
// Images
import serverDown from "../../../../assets/images/server-down.svg";

export default function RenderProducts() {
    const { categoryId } = useParams();
    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log(categoryId);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            categoryId
                ? `https://fakestoreapi.com/products/category/${categoryId}`
                : "https://fakestoreapi.com/products",
        )
            .then((response) => response.json())
            .then((result) => setProducts(result))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    }, [categoryId]);

    if (error)
        return (
            <div className={styles.failedToFetchScreen}>
                <h1> Something went wrong... </h1>
                <img
                    src={serverDown}
                    alt="Server Down Illustration Image"
                />
                <h2>
                    Seems like we are having problems with the connection on our
                    side...
                </h2>
                <p>Error description: {error.message}</p>
            </div>
        );

    if (isLoading) return <Loader />;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.products}
            >
                {products.map((product) => (
                    <ProductPreview
                        product={product}
                        key={product.id}
                    />
                ))}
            </motion.div>
        </AnimatePresence>
    );
}

RenderProducts.propTypes = {
    products: PropTypes.array,
};
