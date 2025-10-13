import { useEffect } from 'react';
import '../../styles/portfolio/hero.scss'

function Hero() {
    useEffect(() => {

        function animateText() {
            let delay = 90;
            let delayStart = 0

            document.querySelectorAll(".accueil_name").forEach(elem => {
                const letters = elem.textContent.trim().split("");
                elem.textContent = "";
                elem.style.visibility = 'visible';

                letters.forEach(function (letter, index) {
                    setTimeout(() => {
                        elem.textContent += letter;
                    }, delayStart + delay * index);
                });
                delayStart += delay * letters.length
            });
        }
        animateText();
    }, []);
    return (
        <section id='accueil'>
            <p className='accueil_text'>Bonjour, je suis< strong className='accueil_name'>Bérangère Brun</strong>développeuse frontend</p>
        </section>
    )
}

export default Hero