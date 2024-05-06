import { useState } from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Cart from "./Cart";
import CartContext from "../../../contexts/CartContext";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import PropTypes from "prop-types";

function MockCartContext({ children, initialCart }) {
    const [cartItems, setCartItems] = useState(initialCart);

    function removeFromCart(index) {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
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

    return (
        <CartContext.Provider
            value={{
                cartItems,
                increaseProductAmount,
                decreaseProductAmount,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

const products = [
    {
        id: 1,
        title: "...",
        price: 100,
        category: "...",
        description: "...",
        image: "...",
        amount: 10,
    },
    {
        id: 2,
        title: "...",
        price: 200,
        category: "...",
        description: "...",
        image: "...",
        amount: 20,
    },
    {
        id: 2,
        title: "...",
        price: 200,
        category: "...",
        description: "...",
        image: "...",
        amount: 30,
    },
];

describe("Cart page", () => {
    it("Should render the empty cart page if no products are in the cart", () => {
        render(
            <MockCartContext initialCart={[]}>
                <Cart />
            </MockCartContext>,
            { wrapper: BrowserRouter },
        );

        expect(
            screen.getByRole("region", { name: "Empty cart section" }),
        ).toBeInTheDocument();
    });

    describe("When there are products in the cart", () => {
        it("Should render the cart page", () => {
            render(
                <BrowserRouter>
                    <MockCartContext initialCart={products}>
                        <Cart />
                    </MockCartContext>
                </BrowserRouter>,
            );

            expect(
                screen.getByRole("region", { name: "Cart page" }),
            ).toBeInTheDocument();
        });

        it("Should render the correct amount of products in the cart", () => {
            render(
                <BrowserRouter>
                    <MockCartContext initialCart={products}>
                        <Cart />
                    </MockCartContext>
                </BrowserRouter>,
            );

            const productsList = screen.getAllByRole("article");
            expect(productsList).toHaveLength(3);
        });
    });

    describe("Increasing and decreasing the quantity of products in the cart", () => {
        it("Should decrease the quantity of the same item in the cart", async () => {
            const user = userEvent.setup();

            render(
                <BrowserRouter>
                    <MockCartContext initialCart={products}>
                        <Cart />
                    </MockCartContext>
                </BrowserRouter>,
            );

            const decreaseAmountButtons = screen.getAllByRole("button", {
                name: /decrease the quantity of this product by 1/i,
            });
            const productAmount = screen.getAllByLabelText(
                /quantity of this product in the cart/i,
            );

            // Remove 5 units of the same product from the cart.
            for (let i = 0; i < 5; i++) {
                await user.click(decreaseAmountButtons[0]);
            }

            expect(productAmount[0].textContent).toEqual("5");
        });

        it("Should increase the quantity of the same item in the cart", async () => {
            const user = userEvent.setup();

            render(
                <BrowserRouter>
                    <MockCartContext initialCart={products}>
                        <Cart />
                    </MockCartContext>
                </BrowserRouter>,
            );

            const increaseAmountButtons = screen.getAllByRole("button", {
                name: /increase the quantity of this product by 1/i,
            });
            const productAmount = screen.getAllByLabelText(
                /quantity of this product in the cart/i,
            );

            // Remove 5 units of the same product from the cart.
            for (let i = 0; i < 5; i++) {
                await user.click(increaseAmountButtons[1]);
            }

            expect(productAmount[1].textContent).toEqual("25");
        });

        it("Should remove products from the cart", async () => {
            const user = userEvent.setup();
            render(
                <BrowserRouter>
                    <MockCartContext initialCart={products}>
                        <Cart />
                    </MockCartContext>
                </BrowserRouter>,
            );

            const deleteProductButtons = screen.getAllByRole("button", {
                name: /remove this product from the cart/i,
            });

            let productsInTheCart = screen.getAllByRole("article", {
                name: /^product:/i,
            });
            expect(productsInTheCart).toHaveLength(3);

            await user.click(deleteProductButtons[2]);
            productsInTheCart = screen.getAllByRole("article", {
                name: /^product/i,
            });
            expect(productsInTheCart).toHaveLength(2);

            await user.click(deleteProductButtons[1]);
            productsInTheCart = screen.getAllByRole("article", {
                name: /^product/i,
            });

            await user.click(deleteProductButtons[0]);
            expect(
                screen.getByRole("region", { name: /empty cart section/i }),
            ).toBeInTheDocument();
        });
    });

    describe("Summary cart section", () => {
        it("Should render the correct subtotal of the products", async () => {
            const user = userEvent.setup();

            render(
                <BrowserRouter>
                    <MockCartContext
                        initialCart={[
                            {
                                id: 1,
                                title: "Product",
                                price: 100,
                                category: "Category",
                                description: "Description",
                                image: "url",
                                amount: 0,
                            },
                        ]}
                    >
                        <Cart />
                    </MockCartContext>
                </BrowserRouter>,
            );

            const increaseAmountButton = screen.getByRole("button", {
                name: /increase the quantity of this product by 1/i,
            });
            const decreaseAmountButton = screen.getByRole("button", {
                name: /decrease the quantity of this product by 1/i,
            });
            const subtotal = screen.getByLabelText(/subtotal/i);

            for (let i = 0; i < 10; i++) {
                await user.click(increaseAmountButton);
            }
            expect(subtotal.textContent).toEqual("$1000.00");

            for (let i = 9; i > 0; i--) {
                await user.click(decreaseAmountButton);
            }

            expect(subtotal.textContent).toEqual("$100.00");

            for (let i = 15; i > 0; i--) {
                await user.click(decreaseAmountButton);
            }

            expect(subtotal.textContent).toEqual("$100.00");
        });
    });
});

MockCartContext.propTypes = {
    children: PropTypes.elementType,
    initialCart: PropTypes.array,
};
