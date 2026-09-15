/*  Note pour l'évaluateur : 
    Code principalement généré par ChatGPT
    Revu entièrement par moi (ligne par ligne) à des fins pédagogiques
    J'ai ajouté quelques tests moi-même également à ce fichier
    Tous les autres tests ont été entièrement écrits "à la main"
*/


import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Carousel from "./Carousel";

describe("Carousel", () => {

    const pictures = [
        "/images/photo1.jpg",
        "/images/photo2.jpg",
        "/images/photo3.jpg"
    ];

    it("affiche la première image par défaut", () => {
        render(<Carousel pictures={pictures} />);

        const images = screen.getAllByRole("img", { hidden: true });

        expect(images[0]).not.toHaveAttribute("hidden");
        expect(images[1]).toHaveAttribute("hidden");
        expect(images[2]).toHaveAttribute("hidden");
    });


    it("affiche les boutons de navigation lorsqu'il y a plusieurs images", () => {
        render(<Carousel pictures={pictures} />);

        expect(
            screen.getByRole("button", { name: "swipe à gauche" })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("button", { name: "swipe à droite" })
        ).toBeInTheDocument();
    });


    it("n'affiche pas les boutons lorsqu'il n'y a qu'une image", () => {
        render(
            <Carousel pictures={["/images/photo1.jpg"]} />
        );

        expect(
            screen.queryByRole("button", { name: "swipe à gauche" })
        ).not.toBeInTheDocument();

        expect(
            screen.queryByRole("button", { name: "swipe à droite" })
        ).not.toBeInTheDocument();

    });


    it("affiche l'image suivante après un clic sur la flèche droite", async () => {
        const user = userEvent.setup();

        render(<Carousel pictures={pictures} />);

        const button = screen.getByRole(
            "button",
            { name: "swipe à droite" }
        );

        await user.click(button);

        const images = screen.getAllByRole("img", { hidden: true });

        expect(images[0]).toHaveAttribute("hidden");
        expect(images[1]).not.toHaveAttribute("hidden");
        expect(images[2]).toHaveAttribute("hidden");
    });


    it("revient à la première image après la dernière image", async () => {
        const user = userEvent.setup();

        render(<Carousel pictures={pictures} />);

        const button = screen.getByRole(
            "button",
            { name: "swipe à droite" }
        );

        // 0 → 1
        await user.click(button);

        // 1 → 2
        await user.click(button);

        // 2 → 0
        await user.click(button);

        const images = screen.getAllByRole("img", { hidden: true });

        expect(images[0]).not.toHaveAttribute("hidden");
        expect(images[1]).toHaveAttribute("hidden");
        expect(images[2]).toHaveAttribute("hidden");
    });


    it("revient à la dernière image en cliquant à gauche depuis la première", async () => {
        const user = userEvent.setup();

        render(<Carousel pictures={pictures} />);

        const button = screen.getByRole(
            "button",
            { name: "swipe à gauche" }
        );

        await user.click(button);

        const images = screen.getAllByRole("img", { hidden: true });

        expect(images[0]).toHaveAttribute("hidden");
        expect(images[1]).toHaveAttribute("hidden");
        expect(images[2]).not.toHaveAttribute("hidden");
    });

    // pour tester l'existence ou pas du compteur, il est plus pertinent de récupérer sa classe que de tester si "1 / 1" est présent ou non
    it("n'affiche pas le compteur lorsqu'il n'y a qu'une image", () => {
        const { container } = render(
            <Carousel pictures={["/images/photo1.jpg"]} />
        );

        const counter = container.querySelector(".carousel__counter");

        expect(counter).not.toBeInTheDocument();
    });

    it("met à jour le compteur lors du changement d'image", async () => {
        const user = userEvent.setup();

        render(<Carousel pictures={pictures} />);

        expect(
            screen.getByText("1 / 3")
        ).toBeInTheDocument();

        const button = screen.getByRole(
            "button",
            { name: "swipe à droite" }
        );

        await user.click(button);

        expect(
            screen.getByText("2 / 3")
        ).toBeInTheDocument();
    });

});