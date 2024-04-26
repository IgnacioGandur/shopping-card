import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CartContext from "./CartContext";

export default function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [amountOfItems, setAmountOfItems] = useState(0);

    function addItemToCart(product, amount) {
        let productIsInCart = false;
        const number = Number(amount);

        let targetIndex = undefined;

        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === product.id) {
                targetIndex = i;
                productIsInCart = true;
                break;
            }
        }

        if (productIsInCart) {
            const updatedCart = [...cartItems];
            updatedCart[targetIndex].amount += number;
            setCartItems(updatedCart);
        }

        if (!productIsInCart) {
            product.amount = number;
            setCartItems([...cartItems, product]);
        }
    }

    function removeFromCart(index) {
        setCartItems((prevCartItems) => {
            const updatedCart = [...prevCartItems];
            updatedCart.splice(index, 1);
            return updatedCart;
        });
    }

    function increaseProductAmount(index) {
        const updatedCart = [...cartItems];
        updatedCart[index].amount += 1;
        setCartItems(updatedCart);
    }

    function decreaseProductAmount(index) {
        const updatedCart = [...cartItems];
        if (updatedCart[index].amount <= 1) {
            return;
        } else {
            updatedCart[index].amount -= 1;
            setCartItems(updatedCart);
        }
    }

    useEffect(() => {
        let total = 0;

        for (let i = 0; i < cartItems.length; i++) {
            total += Number(cartItems[i].amount);
        }

        console.log(total);
        setAmountOfItems(total);
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addItemToCart,
                removeFromCart,
                increaseProductAmount,
                decreaseProductAmount,
                amountOfItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

CartContextProvider.propTypes = {
    children: PropTypes.element,
};
