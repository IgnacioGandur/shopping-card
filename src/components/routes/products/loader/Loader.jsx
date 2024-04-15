import styles from "./Loader.module.css";

export default function Loader() {
    return (
        <div className={styles.loader}>
            <div className={styles.spinner}></div>
            <p>Loading you products...</p>
        </div>
    );
}
