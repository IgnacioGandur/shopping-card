// Packages
import { useState, useEffect, useContext, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// context
import CartContext from "../../../contexts/CartContext";
// Styles
import styles from "./Cart.module.css";
// Images
import emptyCartImage from "../../../assets/images/empty-cart.svg";

export default function Cart() {
    const {
        cartItems,
        removeFromCart,
        increaseProductAmount,
        decreaseProductAmount,
    } = useContext(CartContext);

    const navigate = useNavigate();

    function getTotal(cartItems) {
        let total = 0;
        // Loop through the cart
        for (let i = 0; i < cartItems.length; i++) {
            // if the item has the 'amount' property multiply it by its price.
            if (cartItems[i].amount) {
                total += cartItems[i].price * cartItems[i].amount;
                // if not just get the price of the item.
            } else {
                total += cartItems[i].price;
            }
        }

        return total.toFixed(2);
    }

    if (cartItems.length === 0)
        return (
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={styles.emptyCart}
                >
                    <h1>Your cart is empty.</h1>
                    <img
                        src={emptyCartImage}
                        alt="Empty cart"
                    />
                    <Link to="/products">Browse our products</Link>
                </motion.div>
            </AnimatePresence>
        );

    return (
        <AnimatePresence>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                className={styles.cart}
                aria-label="Product in your cart."
            >
                <div className={styles.title}>
                    <button onClick={() => navigate(-1)}>
                        <span className="material-symbols-rounded">
                            arrow_back
                        </span>
                    </button>
                    <h1>Shopping Bag</h1>
                </div>
                <section className={styles.itemsList}>
                    <div className={styles.headers}>
                        <h3>Product</h3>
                        <h3>Quantity</h3>
                        <h3>Price Per Unit</h3>
                    </div>
                    {cartItems.map((item, index) => (
                        <Fragment key={index}>
                            <article
                                className={styles.item}
                                key={index}
                            >
                                <p>0{index + 1}</p>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                />
                                <div className={styles.details}>
                                    <h3>
                                        {item.category
                                            .slice(0, 1)
                                            .toUpperCase() +
                                            item.category.slice(
                                                1,
                                                item.category.length,
                                            )}
                                    </h3>
                                    <Link to={`/products/${item.id}`}>
                                        <p>{item.title}</p>
                                    </Link>
                                    <span>Id: {item.id}</span>
                                </div>
                                <div className={styles.amount}>
                                    <button
                                        onClick={() => {
                                            decreaseProductAmount(index);
                                        }}
                                    >
                                        <span className="material-symbols-rounded">
                                            remove
                                        </span>
                                    </button>
                                    <span>{item.amount}</span>
                                    <button
                                        onClick={() => {
                                            increaseProductAmount(index);
                                        }}
                                    >
                                        <span className="material-symbols-rounded">
                                            add
                                        </span>
                                    </button>
                                </div>
                                <p className={styles.price}>${item.price}</p>
                                <button
                                    onClick={() => {
                                        removeFromCart(index);
                                    }}
                                >
                                    <span className="material-symbols-rounded">
                                        close
                                    </span>
                                </button>
                            </article>
                            {index === cartItems.length - 1 ? (
                                " "
                            ) : (
                                <div className={styles.separator}></div>
                            )}
                        </Fragment>
                    ))}
                </section>
                <section className={styles.orderSummary}>
                    <h2>Order Summary</h2>
                    <div className={styles.subTotal}>
                        <p>Subtotal</p>
                        <strong>${getTotal(cartItems)}</strong>
                    </div>
                    <div className={styles.discount}>
                        <p>Discount</p>
                        <strong>$0.00</strong>
                    </div>
                    <div className={styles.shipping}>
                        <p>Shipping</p>
                        <strong>$0.00</strong>
                    </div>
                    <div className={styles.separator}></div>
                    <div className={styles.total}>
                        <strong>Total</strong>
                        <strong>${getTotal(cartItems)}</strong>
                    </div>
                    <button className={styles.processOrder}>
                        Process Order
                    </button>
                    <Link to="/products">Continue Shopping</Link>
                </section>
            </motion.section>
        </AnimatePresence>
    );
}
