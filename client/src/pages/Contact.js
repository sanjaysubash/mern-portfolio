import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // success or error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await axios.post('/api/contact', formData);
      setResponseMessage('Message sent successfully!');
      setMessageType('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setResponseMessage('Failed to send the message. Please try again later.');
      setMessageType('error');
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
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          style={inputStyle}
        />
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows="5"
          style={inputStyle}
        />
        <button
          type="submit"
          disabled={isSending}
          style={buttonStyle(isSending)}
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {responseMessage && (
        <p
          style={{
            textAlign: 'center',
            marginTop: '1rem',
            color: messageType === 'success' ? '#28a745' : '#dc3545',
            fontWeight: 'bold',
          }}
        >
          {responseMessage}
        </p>
      )}
    </section>
  );
};

// Inline styles for the form elements
const inputStyle = {
  width: '100%',
  padding: '1rem',
  margin: '0.5rem 0',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  backgroundColor: '#1c1f26',
  color: '#fff',
  outline: 'none',
  transition: 'border 0.3s ease, box-shadow 0.3s ease',
};

const buttonStyle = (isSending) => ({
  width: '100%',
  padding: '1rem',
  backgroundColor: '#58a6ff',
  border: 'none',
  color: '#fff',
  borderRadius: '5px',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  cursor: isSending ? 'not-allowed' : 'pointer',
  transition: 'background 0.3s ease, transform 0.2s ease',
  opacity: isSending ? 0.6 : 1,
});

export default ContactForm;
