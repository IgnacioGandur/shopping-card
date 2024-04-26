// Packages
import { Link } from "react-router-dom";
// Styles
import styles from "./SloganSlide.module.css";

export default function SloganSlide() {
    return (
        <div className={styles.sloganSlide}>
            <h2>Where Shopping Reaches New Heights</h2>
            <Link to="products">
                <button aria-label="Go to products section">Shop Now</button>
            </Link>
        </div>
    );
}
