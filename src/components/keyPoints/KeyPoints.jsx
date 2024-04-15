import styles from "./KeyPoints.module.css";

export default function KeyPoints() {
    const keyPoints = [
        {
            title: "Wide Range Of Products",
            description:
                "Whether customers are looking for electronics, fashion items, home decor, or beauty products, Stellar Shop has something for everyone.",
            googleIcon: "sell",
        },
        {
            title: "Secure Payment Process",
            description:
                " Customers can shop with confidence knowing that Stellar Shop prioritizes security in online transactions.",
            googleIcon: "lock",
        },
        {
            title: "Responsive Customer Service",
            description:
                "Stellar Shop values customer satisfaction and provides responsive customer service to address any inquiries or concerns. Customers can reach out to the support team via email, phone, or live chat for assistance.",
            googleIcon: "support_agent",
        },
        {
            title: "Personalized Recommendations",
            description:
                "To enhance the shopping experience, Stellar Shop utilizes algorithms to provide personalized product recommendations based on customer preferences and browsing history.",
            googleIcon: "mood",
        },
        {
            title: "Social Media Integration",
            description:
                "Stellar Shop engages with customers through various social media platforms, sharing updates on new products, promotions, and events to foster a sense of community among shoppers.",
            googleIcon: "share",
        },
        {
            title: "Fast and Reliable Shipping",
            description:
                "Stellar Shop partners with trusted shipping providers to ensure fast and reliable delivery of orders. Customers can track their orders and expect timely arrival of their purchases.",
            googleIcon: "local_shipping",
        },
    ];

    return (
        <div className={styles.keyPoints}>
            <p>
                <span>S</span>tellar <span>S</span>hop is a an e-commerce
                website that aims to provide customers with a seamless shopping
                experience for a variety of products.{" "}
            </p>
            <div className={styles.grid}>
                {keyPoints.map((point, index) => (
                    <div
                        className={styles.point}
                        key={index}
                    >
                        <span className="material-symbols-rounded">
                            {point.googleIcon}
                        </span>
                        <h3>{point.title}</h3>
                        <div className={styles.hiddenDescription}>
                            <p>{point.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
