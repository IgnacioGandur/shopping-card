// Packages
import { motion, AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
// Components
import FilterCategories from "./filterCategories/FilterCategories";
// Styles
import styles from "./Products.module.css";

export default function Products() {
    return (
        <AnimatePresence>
            <motion.section
                className={styles.section}
                aria-label="Products section"
                initial={{
                    opacity: 0,
                }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <FilterCategories />
                <div className={styles.divider}></div>
                <Outlet />
            </motion.section>
        </AnimatePresence>
    );
}
