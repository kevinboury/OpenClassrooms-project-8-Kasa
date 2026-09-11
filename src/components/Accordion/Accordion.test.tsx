// import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Accordion from './Accordion';




describe('Accordion',  () => {

    it("affiche le titre", () => {
        render(
            <Accordion title="test_title" contents={["test_content_1"]} />
        );

        const title = screen.getByText("test_title"); // retourne une erreur si l'élément n'existe pas

        expect(title).toBeInTheDocument();
    });

    it("cache le contenu lorsque l'Accordion est fermé", () => {
        render(
            <Accordion title="test_title" contents={["test_content_1"]} />
        );

        const content = screen.queryByText("test_content_1"); // retourne null si l'élément n'existe pas

        expect(content).not.toBeInTheDocument();
    });
    

// ARRANGE
// Je crée un utilisateur virtuel
//         ↓
// Je "render" un Accordion (fermé par défaut)
//         ↓
// ACT
// L'utilisateur clique sur le bouton
//         ↓
// Le state change
//         ↓
// L'Accordion s'ouvre
//         ↓
// ASSERT
// Le contenu doit maintenant être présent
    it("affiche le contenu lorsque l'utilisateur clique sur la flèche", async () => {
        const user = userEvent.setup();

        render(
            <Accordion title="test_title" contents={["test_content_1"]} />
        );

        const button = screen.getByRole("button");
        await user.click(button);
        const content = screen.getByText("test_content_1");
        expect(content).toBeInTheDocument();
    });

    it("affiche tous les contenus lorsque l'utilisateur clique sur la flèche", async () => {
        const user = userEvent.setup();

        render(
            <Accordion title="test_title" contents={["test_content_1", "test_content_2", "test_content_3"]} />
        );

        const button = screen.getByRole("button");
        await user.click(button);
        expect(
            screen.getByText("test_content_1")
        ).toBeInTheDocument();

        expect(
            screen.getByText("test_content_2")
        ).toBeInTheDocument();

        expect(
            screen.getByText("test_content_3")
        ).toBeInTheDocument();
    });

    it("ouvre puis referme l'Accordion", async () => {
        const user = userEvent;

        render(
            <Accordion title="test_title" contents={["test_content_1"]} />
        )

        const button = screen.getByRole("button")

        //le premier click déplie l'accordéon
        await user.click(button)
        expect(
            screen.getByText("test_content_1")
        ).toBeInTheDocument()

        //le deuxième click referme l'accordéon
        await user.click(button)
        expect(
            screen.queryByText("test_content_1")
        ).not.toBeInTheDocument()
    });

});
