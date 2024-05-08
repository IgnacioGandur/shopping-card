import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p>
                Ignacio Gandur
                <a
                    href="https://github.com/IgnacioGandur/shopping-cart"
                    target="_blank"
                    aria-label="Go to the autor's github page"
                >
                    <i className="fa-brands fa-github"></i>
                </a>
                The Odin Project{" "}
            </p>
        </div>
    );
}
