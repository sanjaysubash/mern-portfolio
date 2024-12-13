import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await axios.post('/api/contact', formData);
      setResponseMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setResponseMessage('Failed to send the message. Please try again later.');
    }
    setIsSending(false);
  };

  return (
    <section style={{ padding: '3rem 1rem', backgroundColor: '#161b22', color: '#fff' }}>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          style={{ width: '100%', padding: '1rem', margin: '0.5rem 0' }}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          style={{ width: '100%', padding: '1rem', margin: '0.5rem 0' }}
        />
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows="5"
          style={{ width: '100%', padding: '1rem', margin: '0.5rem 0' }}
        />
        <button type="submit" disabled={isSending} style={{ padding: '1rem', backgroundColor: '#58a6ff', border: 'none', color: '#fff' }}>
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {responseMessage && (
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          {responseMessage}
        </p>
      )}
    </section>
  );
};

export default ContactForm;
