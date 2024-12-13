import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/contact', formData);
            setResponseMessage(response.data.message || 'Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            setResponseMessage('Failed to send the message. Please try again later.');
            console.error(err);
        }
    };
    

    return (
        <div style={{ maxWidth: '500px', margin: 'auto', padding: '2rem', textAlign: 'center' }}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    style={{
                        padding: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '1rem',
                    }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    style={{
                        padding: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '1rem',
                    }}
                />
                <textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    style={{
                        padding: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '1rem',
                        resize: 'none',
                        height: '100px',
                    }}
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                        padding: '0.75rem',
                        borderRadius: '4px',
                        border: 'none',
                        backgroundColor: '#58a6ff',
                        color: '#fff',
                        fontSize: '1rem',
                        cursor: 'pointer',
                    }}
                >
                    {isSubmitting ? 'Sending...' : 'Send'}
                </button>
            </form>
            {responseMessage && (
                <p
                    style={{
                        marginTop: '1rem',
                        fontSize: '1rem',
                        color: responseMessage.includes('successfully') ? 'green' : 'red',
                    }}
                >
                    {responseMessage}
                </p>
            )}
        </div>
    );
};

export default ContactForm;
