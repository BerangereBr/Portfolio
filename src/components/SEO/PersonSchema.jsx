function PersonSchema() {
    const JsonPerson = () => {
        const jsonData = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Bérangère Brun",
            "url": "https://portfolio-nu-beryl-80.vercel.app/",
            "jobTitle": "Développeuse web front-end",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Montpellier",
                "addressCountry": "France"
            },
            "sameAs": [
                "https://github.com/BerangereBr",
                "https://www.linkedin.com/in/bérangère-brun-6208712a0"
            ]
        }


        return (
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }}></script>
        )
    }
}
export default PersonSchema