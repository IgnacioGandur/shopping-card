import styles from "./ProductNotFound.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import productNotFound from "../../../../../assets/images/product-not-found.svg";

export default function ProductNotFound() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.productNotFound}
        >
            <h1>
                Sorry, we couldn&apos;t find the product you were looking for...
            </h1>
            <img
                src={productNotFound}
                alt="Product not found"
            />
            <Link to="/products">Go back to products</Link>
        </motion.div>
    );
}
