import { useEffect, useState, useRef } from "react";

export function useInView(ref, options = {}) {
    const [isVisible, setIsVisible] = useState(false);
    const lastScrollY = useRef(window.scrollY);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            const currentScrollY = window.scrollY;
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }

            lastScrollY.current = currentScrollY;
        }, options);
        const element = ref.current

        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [ref, options]);

    return isVisible;
}