
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from 'vitest';
import AccommodationCard from './AccommodationCard';



describe("AccommodationCard", () => {
    
    // React essaie de "render" NavLink, qui cherche un Router au-dessus de lui, mais il n'en trouve pas.
    // MemoryRouter permet à React Router de fonctionner sans avoir besoin d'un véritable navigateur

    it("affiche le titre", () => {
        render(
            <MemoryRouter>
                <AccommodationCard 
                    title="test_title"
                    id="test_id"
                    cover="/images/test.jpg" 
                />
            </MemoryRouter>
        )

        const title = screen.getByText("test_title");
        expect(title).toBeInTheDocument();
    })
    
    it("redirige vers la page du logement", () => {
        render(
            <MemoryRouter>
                <AccommodationCard
                    title="test_title"
                    id="test_id"
                    cover="/images/test.jpg"
                />
            </MemoryRouter>
        );

        const link = screen.getByRole("link");

        expect(link).toHaveAttribute(
            "href",
            "/accommodation/test_id"
        );
    });

    it("affiche l'image du logement", () => {
        render(
            <MemoryRouter>
                <AccommodationCard
                    title="test_title"
                    id="test_id"
                    cover="/images/test.jpg"
                />
            </MemoryRouter>
        );

        const image = screen.getByRole("img")
        expect(image).toHaveAttribute("src", "/images/test.jpg")
    })
})