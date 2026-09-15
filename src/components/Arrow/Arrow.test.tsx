import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react'

import Arrow from './Arrow';

describe("Arrow", () => {

    it("affiche la flèche vers le haut", () => {
        const { container } = render(
            <Arrow className="test-arrow" direction="UP" />
        );

        expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("affiche la flèche vers le bas", () => {
        const { container } = render(
            <Arrow className="test-arrow" direction="DOWN" />
        );

        expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("affiche la flèche vers la gauche", () => {
        const { container } = render(
            <Arrow className="test-arrow" direction="LEFT" />
        );

        expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("affiche la flèche vers la droite", () => {
        const { container } = render(
            <Arrow className="test-arrow" direction="RIGHT" />
        );

        expect(container.querySelector("svg")).toBeInTheDocument();
    });

});