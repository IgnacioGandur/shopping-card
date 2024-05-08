import styles from "./AboutUs.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import sampleProduct from "../../../assets/images/sample-product.jpg";

export default function AboutUs() {
    return (
        <motion.section
            aria-label="About us section"
            className={styles.aboutUs}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1>About Us</h1>
            <div className={styles.right}>
                <img
                    src={sampleProduct}
                    alt="Products"
                />
                <p>
                    At Stellar Shop, we&apos;re your ultimate destination for
                    top-quality products that shine bright. Explore a universe
                    of possibilities as you browse through our curated
                    collection of stellar goods, handpicked to elevate your
                    shopping experience. From fashion to electronics, home decor
                    to gifts, we bring you the stars of the retail world, all in
                    one convenient place. Welcome to a shopping journey where
                    excellence meets convenience—welcome to Stellar Shop.
                </p>
                <Link to="/products">
                    <button aria-label="Go to the products section">
                        Shop Now
                    </button>
                </Link>
            </div>
        </motion.section>
    );
}
