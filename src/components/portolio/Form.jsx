import React from 'react';
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
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}

function Form() {
    return (
        <section id='form'>
            <h1>Contact</h1>
            <ContactForm />
        </section>
    );
}

export default Form;