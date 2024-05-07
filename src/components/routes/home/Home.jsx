// Packages
import Carousel from "../../carousel/Carousel";
import { AnimatePresence, motion } from "framer-motion";
// Slides
import MainSlide from "./slides/mainSlide/MainSlide";
import CategoriesSlide from "./slides/categoriesSlide/CategoriesSlide";
import SloganSlide from "./slides/sloganSlide/SloganSlide";
// Components
import KeyPoints from "../../keyPoints/KeyPoints";
// Styles
import styles from "./Home.module.css";

export default function Home() {
    const slides = [
        <MainSlide key="main slide" />,
        <SloganSlide key="slogan slide" />,
        <CategoriesSlide key="categories slide" />,
    ];
    return (
        <AnimatePresence initial={false}>
            <motion.main
                key="home"
                aria-label="Home page"
                className={styles.home}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Carousel slides={slides} />
                <KeyPoints />
            </motion.main>
        </AnimatePresence>
    );
}
