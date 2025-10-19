import About from '../components/portolio/About'
import Hero from '../components/portolio/Hero'
import Navbar from '../components/portolio/Navbar'
import Stacks from '../components/portolio/Stacks'
import Projects from '../components/portolio/Projects'
import Footer from '../components/Footer'
import Formation from '../components/portolio/Formation'
import Form from '../components/portolio/Form'

function Portfolio() {
    return (
        <>
            <header>
                <Navbar />
                <Hero />
            </header>
            <main>
                <About />
                <Stacks />
                <Projects />
                <Formation />
                <Form />
            </main>
            <Footer />
        </>
    )
}

export default Portfolio