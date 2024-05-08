// Packages
import { Link, useRouteError } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// Styles
import styles from "./ErrorPage.module.css";
// Images
import errorImage from "../../assets/images/not-found-page.svg";

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <AnimatePresence>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.errorPage}
            >
                <h1>
                    Seems like the page you are looking for doesn&apos;t exist
                </h1>
                <p>Error description: {error.error.message}</p>
                <img
                    src={errorImage}
                    alt="This page doesn't exist."
                />
                <Link to="/">Go back to our main page</Link>
            </motion.section>
        </AnimatePresence>
    );
}
