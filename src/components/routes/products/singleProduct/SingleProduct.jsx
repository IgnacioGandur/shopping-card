// Packages
import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
// Components
import Loader from "../loader/Loader";
import StarRating from "../starRating/StarRating";
import Notification from "../../../notification/Notification";
// Contexts
import CartContext from "../../../../contexts/CartContext";
// Images
import productNotFound from "../../../../assets/images/product-not-found.svg";
// Styles
import styles from "./SingleProduct.module.css";
import "react-toastify/dist/ReactToastify.css";

export default function SingleProduct() {
    const { productId } = useParams();
    const { addItemToCart } = useContext(CartContext);

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [amountOfProducts, setAmountOfProducts] = useState(1);

    const notification = () => {
        toast.success(
            <Notification
                product={product}
                amount={amountOfProducts}
            />,
            {
                style: {
                    backgroundColor: "#7678ed",
                },
            },
        );
    };

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => response.json())
            .then((result) => setProduct(result))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    }, [productId]);

    function handleFormSubmit(e) {
        e.preventDefault();
        addItemToCart(product, amountOfProducts);
        setAmountOfProducts(1);
    }

    if (error)
        return (
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={styles.productNotFound}
                >
                    <h1>
                        Sorry, we couldn&apos;t find the product you were
                        looking for...
                    </h1>
                    <img
                        src={productNotFound}
                        alt="Product not found"
                    />
                    <Link to="/products">Go back to products</Link>
                </motion.div>
            </AnimatePresence>
        );

    if (isLoading) return <Loader />;

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            aria-label={`Product: ${product.title}`}
            className={styles.singleProduct}
        >
            <ToastContainer />
            <h1 className={styles.mobileTitle}>{product.title}</h1>
            <div className={styles.imageContainer}>
                <img
                    src={product.image}
                    alt={product.title}
                />
            </div>
            <section className={styles.description}>
                <h1>{product.title}</h1>
                <h3>
                    {product.category.slice(0, 1).toUpperCase() +
                        product.category.slice(1, product.category.length)}
                </h3>
                <div
                    aria-label={`This product has a rating of ${product.rating.rate} out of ${product.rating.count} reviews.`}
                    title={`This product has a rating of ${product.rating.rate} out of ${product.rating.count} reviews.`}
                    className={styles.rating}
                >
                    <StarRating
                        rate={product.rating.rate}
                        fontSize="3rem"
                    />
                    <p>{product.rating.count} Reviews</p>
                </div>
                <p>{product.description}</p>
                <p className={styles.price}>${product.price}</p>
                <form
                    onSubmit={(e) => {
                        handleFormSubmit(e, product, amountOfProducts);
                        notification();
                    }}
                    className={styles.amount}
                >
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setAmountOfProducts((prevAmount) => prevAmount - 1);
                        }}
                        className={styles.remove}
                    >
                        <span className="material-symbols-rounded">remove</span>
                    </button>
                    <input
                        onChange={(e) => setAmountOfProducts(e.target.value)}
                        value={amountOfProducts}
                        max="30"
                        min="1"
                        type="number"
                        name="amount"
                        id="amount"
                        required
                    />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setAmountOfProducts((prevAmount) => prevAmount + 1);
                        }}
                        className={styles.add}
                    >
                        <span className="material-symbols-rounded">add</span>
                    </button>
                    <button
                        type="submit"
                        className={styles.addToCart}
                    >
                        <span className="material-symbols-rounded">
                            add_shopping_cart
                        </span>
                        Add to cart
                    </button>
                </form>
            </section>
        </motion.main>
    );
}
