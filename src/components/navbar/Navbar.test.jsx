// Packages
import { useState } from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter, HashRouter } from "react-router-dom";
import { useContext } from "react";
// Components
import App from "../app/App";
import Router from "../router/Router";
import Navbar from "./Navbar";
import CartContextProvider from "../../contexts/CartContextProvider";
// Contexts
import CartContext from "../../contexts/CartContext";
import Cart from "../routes/cart/Cart";

describe("Navbar component", () => {
    it("Should render the navbar", () => {
        render(
            <BrowserRouter>
                <CartContextProvider>
                    <Navbar />
                </CartContextProvider>
                ,
            </BrowserRouter>,
        );
        const navbar = screen.getByRole("banner", { name: "Website banner" });
        expect(navbar).toBeInTheDocument();
    });

    it("Should render the website logo", () => {
        render(
            <BrowserRouter>
                <CartContextProvider>
                    <Navbar />
                </CartContextProvider>
            </BrowserRouter>,
        );

        expect(
            screen.getByRole("img", { name: /website logo/i }),
        ).toBeInTheDocument();
    });

    it("Should render the navigation bar correctly", () => {
        render(
            <BrowserRouter>
                <CartContextProvider>
                    <Navbar />
                </CartContextProvider>
            </BrowserRouter>,
        );

        expect(screen.getByRole("navigation")).toBeInTheDocument();
    });

    it("Should render navigation links correctly", () => {
        render(
            <BrowserRouter>
                <CartContextProvider>
                    <Navbar />
                </CartContextProvider>
            </BrowserRouter>,
        );

        const links = screen.getAllByRole("link");
        expect(links).toHaveLength(6);
        expect(links[0].textContent).toMatch(/home/i);
        expect(links[1].textContent).toMatch(/products/i);
        expect(links[2].textContent).toMatch(/about us/i);
        expect(links[3].textContent).toMatch(/contact us/i);
        expect(links[4].textContent).toMatch(/cart/i);
    });

    it("Should render the 'cart' button", () => {
        render(
            <BrowserRouter>
                <CartContextProvider>
                    <Navbar />
                </CartContextProvider>
            </BrowserRouter>,
        );

        expect(
            screen.getByRole("button", { name: /go to the cart/i }),
        ).toBeInTheDocument();
    });

    describe("Should navigate to the corresponding route when links clicked", () => {
        it('Should navigate to the "home" page', async () => {
            const user = userEvent.setup();

            render(
                <Router>
                    <CartContextProvider>
                        <App />
                    </CartContextProvider>
                </Router>,
            );

            const link = screen.getByRole("link", { name: /home/i });
            await user.click(link);
            expect(screen.getByRole("main")).toBeInTheDocument();
        });

        it('Should navigate to the "products" page', async () => {
            const user = userEvent.setup();

            render(
                <Router>
                    <CartContextProvider>
                        <App />
                    </CartContextProvider>
                </Router>,
            );

            const link = screen.getByRole("link", { name: /products/i });
            await user.click(link);
            expect(
                screen.getByRole("region", { name: /products section/i }),
            ).toBeInTheDocument();
        });

        it('Should navigate to the "about us" page', async () => {
            const user = userEvent.setup();

            render(
                <Router>
                    <CartContextProvider>
                        <App />
                    </CartContextProvider>
                </Router>,
            );

            const link = screen.getByRole("link", { name: /about us/i });
            await user.click(link);
            expect(
                screen.getByRole("region", { name: /about us section/i }),
            ).toBeInTheDocument();
        });

        it('Should navigate to the "contact us" page', async () => {
            const user = userEvent.setup();

            render(
                <Router>
                    <CartContextProvider>
                        <App />
                    </CartContextProvider>
                </Router>,
            );

            const link = screen.getByRole("link", { name: /contact us/i });
            await user.click(link);
            expect(
                screen.getByRole("region", { name: /contact us section/i }),
            ).toBeInTheDocument();
        });

        it('Should navigate to the "empty cart" page', async () => {
            const user = userEvent.setup();

            render(
                <Router>
                    <CartContextProvider>
                        <App />
                    </CartContextProvider>
                </Router>,
            );

            const link = screen.getByRole("link", { name: /cart/i });
            await user.click(link);
            expect(
                screen.getByRole("region", { name: "Empty cart section" }),
            ).toBeInTheDocument();
        });
    });
});
