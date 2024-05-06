// Packages
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
// Styles
import styles from "./Carousel.module.css";

export default function Carousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);

    const previousSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
        );
    };

    const goToSlideNumber = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (autoSlide) {
            const interval = setInterval(() => {
                nextSlide();
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [autoSlide]);

    return (
        <section
            className={styles.carousel}
            aria-label="Carousel slider"
        >
            <button
                aria-label="Go to previous slide"
                onClick={previousSlide}
                className={styles.previous}
            >
                <span
                    aria-hidden
                    className="material-symbols-rounded"
                >
                    arrow_back
                </span>
            </button>
            <ul
                onMouseEnter={() => setAutoSlide(false)}
                onMouseLeave={() => setAutoSlide(true)}
                className={styles.slidesContainer}
            >
                {slides.map((slide, index) =>
                    slide.props ? (
                        <li
                            aria-label={`Slide number ${index + 1}`}
                            aria-hidden={currentIndex !== index ? true : false}
                            className={`${styles.slide} ${currentIndex === index ? styles.active : ""}`}
                            key={index}
                            style={{
                                translate: `${-100 * currentIndex}%`,
                            }}
                        >
                            {slide}
                        </li>
                    ) : (
                        <img
                            aria-hidden={currentIndex !== index}
                            tabIndex={`${currentIndex !== index && "-1"}`}
                            style={{
                                translate: `${-100 * currentIndex}%`,
                            }}
                            src={slide.url}
                            alt={slide.description}
                            key={index}
                        />
                    ),
                )}
            </ul>
            <button
                aria-label="Go to next slide"
                onClick={nextSlide}
                className={styles.next}
            >
                <span
                    aria-hidden
                    className="material-symbols-rounded"
                >
                    arrow_forward
                </span>
            </button>
            <div className={styles.navigation}>
                {slides.map((_, index) => (
                    <button
                        aria-label={`Go to slide number ${index + 1}`}
                        onClick={() => goToSlideNumber(index)}
                        key={index}
                    >
                        <span
                            aria-hidden
                            className="material-symbols-rounded"
                        >
                            {currentIndex === index
                                ? "radio_button_checked"
                                : "radio_button_unchecked"}
                        </span>
                    </button>
                ))}
            </div>
        </section>
    );
}

Carousel.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                url: PropTypes.string,
                description: PropTypes.string,
            }),
            PropTypes.elementType,
        ]),
    ),
};
