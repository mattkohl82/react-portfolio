import React, { useState } from 'react';
import { validateEmail } from "../../utils/helpers";

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value });
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    
    return (
        <section className='container d-flex flex-column justify-content-center align-items-center'>
            <img style={{ marginTop: '3vh'}} src="https://img.icons8.com/nolan/125/contact-card.png" alt='contact'/>
            <h1>Contact Me</h1>
            
            <form  id="contact-form" onSubmit={handleSubmit}>
                <div className=' d-flex flex-column justify-content-center align-items-center'>
                    <img src="https://img.icons8.com/nolan/64/identification-documents.png" alt='name'/>
                    <input type="text" style={{ width:'80%', textAlign: 'center'}} name="name" defaultValue={name} onBlur={handleChange} placeholder='Name Here'/>
                </div>
                <div className=' d-flex flex-column justify-content-center align-items-center'>
                    <img style={{ marginTop:'2px' }} src="https://img.icons8.com/nolan/50/add-open-envelope.png" alt='email'/>
                    <input type="email" style={{ width:'80%', textAlign: 'center'}} name="email" defaultValue={email} onBlur={handleChange} placeholder='Email Here'/>
                </div>
                <div className=' d-flex flex-column justify-content-center align-items-center'>
                    <img style={{marginTop:'2px'}} src="https://img.icons8.com/nolan/50/edit--v1.png" alt='message'/>
                    <textarea name="message" style={{ textAlign: 'center'}} cols="50" rows="4" defaultValue={message} onBlur={handleChange} placeholder='Message here'/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className='btn' style={{ marginTop:'3px', borderStyle: 'outset'}} type="submit"><img style={{ borderStyle: 'outset' }} src="https://img.icons8.com/nolan/80/nui2.png" alt='submit'/></button>
            </form>
        </section>
    );

}

export default Contact;