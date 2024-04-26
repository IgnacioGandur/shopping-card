import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const { amountOfItems } = useContext(CartContext);
    const links = [
        {
            linkTo: "/",
            text: "Home",
        },
        {
            linkTo: "/products",
            text: "Products",
        },
        {
            linkTo: "/about-us",
            text: "About Us",
        },
        {
            linkTo: "/contact-us",
            text: "Contact Us",
        },
        {
            linkTo: "/cart",
            text: "Cart",
        },
    ];

    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <svg
                    aria-label="Website logo"
                    width="267"
                    height="154"
                    viewBox="0 0 267 154"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="ConceptFive">
                        <path
                            className={styles.moon}
                            id="Moon"
                            d="M138.427 10.346C120.456 26.1527 116.799 53.2714 130.767 73.4147C144.735 93.558 171.414 99.6402 192.518 88.3508C188.64 100.402 180.915 111.32 169.708 119.091C142.602 137.888 105.391 131.151 86.5946 104.045C67.7984 76.9388 74.5349 39.7275 101.641 20.9312C112.848 13.1601 125.782 9.75338 138.427 10.346Z"
                            fill="url(#paint0_linear_21_2)"
                        />
                        <g id="Clouds">
                            <path
                                className={styles.cloudRight}
                                id="SmallCloudRight"
                                d="M165.994 119.098C165.95 118.648 165.927 118.193 165.927 117.732C165.927 110.188 172.042 104.073 179.585 104.073C184.089 104.073 188.083 106.253 190.571 109.615C192.302 107.879 194.696 106.805 197.341 106.805C202.622 106.805 206.902 111.085 206.902 116.366C206.902 117.413 206.734 118.421 206.423 119.364C210.616 120.377 213.732 124.154 213.732 128.659C213.732 133.939 209.451 138.22 204.171 138.22L165.927 138.22C160.646 138.22 156.366 133.939 156.366 128.659C156.366 123.378 160.646 119.098 165.927 119.098H165.994Z"
                                fill="white"
                                stroke="url(#paint1_linear_21_2)"
                                strokeLinecap="round"
                            />
                            <path
                                className={styles.cloudLeft}
                                id="MediumSizeCloudLeft"
                                d="M111.486 98.4851L111.325 99.1098H111.97H112.659C119.926 99.1098 125.817 105.001 125.817 112.268C125.817 119.536 119.926 125.427 112.659 125.427H25.2439C17.9767 125.427 12.0854 119.536 12.0854 112.268C12.0854 105.001 17.9767 99.1098 25.2439 99.1098H28.442H29.149L28.9134 98.4431C28.63 97.6415 28.4756 96.7783 28.4756 95.878C28.4756 91.6281 31.9208 88.1829 36.1708 88.1829C38.1474 88.1829 39.9489 88.9275 41.312 90.1524L42.1053 90.8652L42.1458 89.7995C42.4688 81.3088 49.4544 74.5244 58.0244 74.5244C63.7872 74.5244 68.834 77.5917 71.6204 82.1851L72.0505 82.8939L72.4768 82.1828C76.2088 75.9575 83.0207 71.7927 90.8049 71.7927C102.598 71.7927 112.159 81.353 112.159 93.1463C112.159 94.9904 111.925 96.7793 111.486 98.4851Z"
                                fill="white"
                                stroke="url(#paint2_linear_21_2)"
                            />
                            <g
                                id="BigColoredCloud"
                                className={styles.bigCloud}
                            >
                                <path
                                    d="M126.379 103.207C130.382 98.7102 136.214 95.878 142.707 95.878C153.852 95.878 163.048 104.22 164.392 115H167.293C177.853 115 186.415 123.561 186.415 134.122C186.415 144.683 177.853 153.244 167.293 153.244H68.9512C58.3905 153.244 49.8293 144.683 49.8293 134.122C49.8293 123.561 58.3905 115 68.9512 115H74.4147C74.4147 99.9132 86.6449 87.6829 101.732 87.6829C112.595 87.6829 121.977 94.024 126.379 103.207Z"
                                    fill="white"
                                />
                                <path
                                    d="M67.5854 146.415H114.024M122.22 146.415H133.146M126.379 103.207C130.382 98.7102 136.214 95.878 142.707 95.878C153.852 95.878 163.048 104.22 164.392 115H167.293C177.853 115 186.415 123.561 186.415 134.122C186.415 144.683 177.853 153.244 167.293 153.244H68.9512C58.3905 153.244 49.8293 144.683 49.8293 134.122C49.8293 123.561 58.3905 115 68.9512 115H74.4147C74.4147 99.9132 86.6449 87.6829 101.732 87.6829C112.595 87.6829 121.977 94.024 126.379 103.207Z"
                                    stroke="url(#paint3_linear_21_2)"
                                    strokeLinecap="round"
                                />
                            </g>
                        </g>
                        <g id="Stars">
                            <path
                                id="TopRightStar"
                                className={styles.topRightStar}
                                d="M165.783 44.069C166.427 42.3278 168.89 42.3278 169.534 44.069L171.028 48.107C171.231 48.6544 171.663 49.0861 172.21 49.2886L176.248 50.7828C177.989 51.4271 177.989 53.8899 176.248 54.5342L172.21 56.0284C171.663 56.231 171.231 56.6626 171.028 57.2101L169.534 61.2481C168.89 62.9893 166.427 62.9893 165.783 61.2481L164.289 57.2101C164.086 56.6626 163.654 56.231 163.107 56.0284L159.069 54.5342C157.328 53.8899 157.328 51.4271 159.069 50.7828L163.107 49.2886C163.654 49.0861 164.086 48.6544 164.289 48.107L165.783 44.069Z"
                                fill="url(#paint4_linear_21_2)"
                            />
                            <path
                                className={styles.leftStar}
                                id="LeftStar"
                                d="M58.8804 51.7763C59.5247 50.0351 61.9875 50.0351 62.6318 51.7763L64.126 55.8143C64.3285 56.3618 64.7602 56.7934 65.3076 56.996L69.3456 58.4902C71.0868 59.1345 71.0868 61.5972 69.3456 62.2416L65.3076 63.7358C64.7602 63.9383 64.3285 64.3699 64.126 64.9174L62.6318 68.9554C61.9875 70.6966 59.5247 70.6966 58.8804 68.9554L57.3862 64.9174C57.1836 64.3699 56.752 63.9383 56.2045 63.7358L52.1665 62.2416C50.4253 61.5972 50.4253 59.1345 52.1665 58.4902L56.2045 56.996C56.752 56.7934 57.1836 56.3618 57.3862 55.8143L58.8804 51.7763Z"
                                fill="url(#paint5_linear_21_2)"
                            />
                            <path
                                id="BottomStar"
                                className={styles.bottomStar}
                                d="M138.1 106.41C138.744 104.669 141.207 104.669 141.851 106.41L143.345 110.448C143.548 110.996 143.98 111.428 144.527 111.63L148.565 113.124C150.306 113.769 150.306 116.231 148.565 116.876L144.527 118.37C143.98 118.572 143.548 119.004 143.345 119.552L141.851 123.59C141.207 125.331 138.744 125.331 138.1 123.59L136.606 119.552C136.403 119.004 135.971 118.572 135.424 118.37L131.386 116.876C129.645 116.231 129.645 113.769 131.386 113.124L135.424 111.63C135.971 111.428 136.403 110.996 136.606 110.448L138.1 106.41Z"
                                fill="url(#paint6_linear_21_2)"
                            />
                        </g>
                        <g id="LineClouds">
                            <path
                                className={styles.lineCloudsRight}
                                id="LineCloudsRight"
                                d="M191.707 11H265.463M148 21.9268H199.902M150.732 11H172.585M161.659 16.4634H183.512M205.366 21.9268H227.22M188.976 16.4634H251.805M178.049 11H186.244M232.683 21.9268H240.878"
                                stroke="url(#paint7_linear_21_2)"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <g transform="translate(0, 15)">
                                <path
                                    className={styles.lineCloudsLeft}
                                    id="LineCloudsLeft"
                                    d="M39.2439 11H52.9024M33.7805 32.8537H47.439M66.561 21.9268H80.2195M14.6585 27.3902H28.3171M1 27.3902H9.19512M47.439 21.9268H61.0976M25.5854 16.4634H52.9024M1 21.9268L41.9756 21.9268M33.7805 27.3902L74.7561 27.3902"
                                    stroke="url(#paint8_linear_21_2)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </g>
                        </g>
                    </g>
                    <defs>
                        <linearGradient
                            id="paint0_linear_21_2"
                            x1="92.0001"
                            y1="27.6166"
                            x2="160.067"
                            y2="125.777"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#6DC7FF" />
                            <stop
                                offset="1"
                                stopColor="#E5ABFF"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_21_2"
                            x1="185.049"
                            y1="104.073"
                            x2="185.049"
                            y2="138.22"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#6DC7FF" />
                            <stop
                                offset="1"
                                stopColor="#E5ABFF"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_21_2"
                            x1="68.9512"
                            y1="71.2927"
                            x2="68.9512"
                            y2="125.927"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#6DC7FF" />
                            <stop
                                offset="1"
                                stopColor="#E5ABFF"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint3_linear_21_2"
                            x1="118.122"
                            y1="87.6829"
                            x2="118.122"
                            y2="153.244"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#6DC7FF" />
                            <stop
                                offset="1"
                                stopColor="#E5ABFF"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint4_linear_21_2"
                            x1="167.659"
                            y1="39"
                            x2="167.659"
                            y2="66.3171"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FFEE32" />
                            <stop
                                offset="1"
                                stopColor="#FFD100"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint5_linear_21_2"
                            x1="60.7561"
                            y1="46.7073"
                            x2="60.7561"
                            y2="74.0244"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FFEE32" />
                            <stop
                                offset="1"
                                stopColor="#FFD100"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint6_linear_21_2"
                            x1="139.976"
                            y1="101.341"
                            x2="139.976"
                            y2="128.659"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FFEE32" />
                            <stop
                                offset="1"
                                stopColor="#FFD100"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint7_linear_21_2"
                            x1="148"
                            y1="16.4634"
                            x2="265.463"
                            y2="16.4634"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#6DC7FF" />
                            <stop
                                offset="1"
                                stopColor="#E5ABFF"
                            />
                        </linearGradient>
                        <linearGradient
                            id="paint8_linear_21_2"
                            x1="1"
                            y1="21.9268"
                            x2="80.2195"
                            y2="21.9268"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#6DC7FF" />
                            <stop
                                offset="1"
                                stopColor="#E5ABFF"
                            />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <nav>
                {links.map((link) => (
                    <NavLink
                        key={link.linkTo}
                        to={link.linkTo}
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        {link.text}
                    </NavLink>
                ))}
            </nav>
            <button className={styles.cartButton}>
                <Link to="cart">
                    <span className="material-symbols-rounded">
                        shopping_bag
                    </span>
                    <span
                        data-products-in-cart="0"
                        className={styles.productsInCart}
                    >
                        {amountOfItems}
                    </span>
                </Link>
            </button>
        </header>
    );
}
