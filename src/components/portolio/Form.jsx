import { useForm, ValidationError } from '@formspree/react';
import '../../styles/portfolio/form.scss'
function ContactForm() {
    const [state, handleSubmit] = useForm("xblzqzzd");
    if (state.succeeded) {
        return <p>Message envoyé</p>;
    }
    return (

        <form onSubmit={handleSubmit} className='form'>
            <label htmlFor="email">
                Adresse e-mail
            </label>
            <input
                id="email"
                type="email"
                name="email"
                required
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor='message'>
                Message
            </label>
            <textarea
                id="message"
                name="message"
                required
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Envoyer
            </button>
            {Array.isArray(state.errors) && state.errors.length > 0 && (
                <p>Une erreur est survenue.</p>
            )}
        </form>
    );
}

function Form() {
    return (
        <section id='form'>
            <h2>Contact</h2>
            <ContactForm />
        </section>
    );
}

export default Form;