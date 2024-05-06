import styles from "./Notification.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Notification({ product, amount }) {
    return (
        <Link
            to="/cart"
            className={styles.link}
        >
            <div className={styles.notification}>
                <img
                    src={product.image}
                    alt={product.title}
                />
                <div className={styles.text}>
                    <p>
                        Added {amount} {amount > 1 ? "products" : "product"} to
                        the cart.
                    </p>
                    <h2>
                        {product.title.length > 30
                            ? `${product.title.slice(0, 30) + "..."}`
                            : product.title}
                    </h2>
                </div>
            </div>
        </Link>
    );
}

Notification.propTypes = {
    product: PropTypes.object,
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
