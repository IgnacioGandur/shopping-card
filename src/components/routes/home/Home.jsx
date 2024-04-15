// Packages
import Carousel from "../../carousel/Carousel";
import { motion, AnimatePresence } from "framer-motion";
// Slides
import slides from "./Slides";
import KeyPoints from "../../keyPoints/KeyPoints";
// Styles
import styles from "./Home.module.css";

export default function Home() {
    return (
        <AnimatePresence>
            <motion.main
                className={styles.home}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, scale: 0 }}
            >
                <Carousel slides={slides} />
                <KeyPoints />
            </motion.main>
        </AnimatePresence>
    );
}
