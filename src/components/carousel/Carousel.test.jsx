import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MainSlide from "../routes/home/slides/mainSlide/MainSlide";
import SloganSlide from "../routes/home/slides/sloganSlide/SloganSlide";
import CategoriesSlide from "../routes/home/slides/categoriesSlide/CategoriesSlide";

import Carousel from "./Carousel";
import { BrowserRouter } from "react-router-dom";
import Home from "../routes/home/Home";

import styles from "../../components/carousel/Carousel.module.css";

const slides = [
    <MainSlide key="main slide" />,
    <SloganSlide key="slogan slide" />,
    <CategoriesSlide key="categories slide" />,
];

describe("Carousel", () => {
    it("Should render the carousel", () => {
        render(
            <BrowserRouter>
                <Home>
                    <Carousel slides={slides} />,
                </Home>
            </BrowserRouter>,
        );

        const carousel = screen.getByRole("region", {
            name: /carousel slider/i,
        });
        expect(carousel).toBeInTheDocument();
    });

    describe("Testing active slides", () => {
        it("The first slide should be the active one by default", () => {
            render(
                <BrowserRouter>
                    <Home>
                        <Carousel slides={slides} />
                    </Home>
                </BrowserRouter>,
            );

            const slide = screen.getByRole("listitem");
            expect(slide.className).toContain(styles.active);
        });

        it("Should go to the next slide when the clicking next slide button", async () => {
            const user = userEvent.setup();

            render(
                <BrowserRouter>
                    <Home>
                        <Carousel slides={slides} />
                    </Home>
                </BrowserRouter>,
            );

            const nextSlideButton = screen.getByRole("button", {
                name: /go to next slide/i,
            });

            await user.click(nextSlideButton);

            let slide = screen.getByRole("listitem", {
                name: /slide number 2/i,
            });

            expect(slide).toBeInTheDocument();

            await user.click(nextSlideButton);

            slide = screen.getByRole("listitem", { name: /slide number 3/i });

            expect(slide).toBeInTheDocument();
        });

        it("Should go to the previous slide when clicking previous slide button", async () => {
            const user = userEvent.setup();

            render(
                <BrowserRouter>
                    <Home>
                        <Carousel slides={slides} />
                    </Home>
                </BrowserRouter>,
            );

            const previousSlideButton = screen.getByRole("button", {
                name: /go to previous slide/i,
            });

            await user.click(previousSlideButton);

            let slide = screen.getByRole("listitem", {
                name: /slide number 3/i,
            });

            expect(slide).toBeInTheDocument();

            await user.click(previousSlideButton);

            slide = screen.getByRole("listitem", { name: /slide number 2/i });

            expect(slide).toBeInTheDocument();

            await user.click(previousSlideButton);

            slide = screen.getByRole("listitem", { name: /slide number 1/i });

            expect(slide).toBeInTheDocument();
        });

        it("Should navigate to the corresponding slide when the navigation buttons are clicked", async () => {
            const user = userEvent.setup();

            render(
                <BrowserRouter>
                    <Home>
                        <Carousel slides={slides} />
                    </Home>
                </BrowserRouter>,
            );

            const navigationButtons = screen.getAllByRole("button", {
                name: /go to slide number /i,
            });

            await user.click(navigationButtons[2]);

            let slide = screen.getByRole("listitem", {
                name: /slide number 3/i,
            });

            expect(slide).toBeInTheDocument();

            await user.click(navigationButtons[1]);

            slide = screen.getByRole("listitem", {
                name: /slide number 2/i,
            });

            expect(slide).toBeInTheDocument();

            await user.click(navigationButtons[0]);

            slide = screen.getByRole("listitem", {
                name: /slide number 1/i,
            });

            expect(slide).toBeInTheDocument();
        });
    });
});
