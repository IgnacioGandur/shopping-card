import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "../app/App";
import Home from "../routes/home/Home";
import AboutUs from "../routes/aboutUs/AboutUs";
import Products from "../routes/products/Products";
import ContactUs from "../routes/contactUs/ContactUs";
import SingleProduct from "../routes/products/singleProduct/SingleProduct";
import Cart from "../routes/cart/Cart";
import RenderProducts from "../routes/products/renderProducts/RenderProducts";
import ErrorPage from "../errorPage/ErrorPage";
// Contexts
import CartContextProvider from "../../contexts/CartContextProvider";

export default function Router() {
    const router = createHashRouter([
        {
            path: "/",
            element: (
                <CartContextProvider>
                    <App />
                </CartContextProvider>
            ),
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "about-us",
                    element: <AboutUs />,
                },
                {
                    path: "products",
                    element: <Products />,
                    children: [
                        {
                            path: "/products",
                            element: <RenderProducts />,
                        },
                        {
                            path: "category/:categoryId",
                            element: <RenderProducts />,
                        },
                    ],
                },
                {
                    path: "products/:productId",
                    element: <SingleProduct />,
                },
                {
                    path: "contact-us",
                    element: <ContactUs />,
                },
                {
                    path: "cart",
                    element: <Cart />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}
