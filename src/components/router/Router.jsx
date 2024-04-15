import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "../app/App";
import Home from "../routes/home/Home";
import AboutUs from "../routes/aboutUs/AboutUs";
import Products from "../routes/products/Products";
import ContactUs from "../routes/contactUs/ContactUs";
import ProductDetail from "../routes/productDetail/ProductDetail";

export default function Router() {
    const router = createHashRouter([
        {
            path: "/",
            element: <App />,
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
                },
                {
                    path: "products/:productId",
                    element: <ProductDetail />,
                },
                {
                    path: "contact-us",
                    element: <ContactUs />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}
