import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import '../styles/portfolio/section.scss';

function Section({ id, children }) {
    const ref = useRef();
    const isVisible = useInView(ref, { threshold: 0.3 });

    return (
        <section
            id={id}
            ref={ref}
            className={isVisible ? "section visible" : "section"}
        >
            {children}
        </section>
    );
}

export default Section;