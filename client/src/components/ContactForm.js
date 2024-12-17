import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post('/api/contact', formData);
      setResponseMessage(response.data.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setResponseMessage('Failed to send the message. Please try again later.');
      console.error(err);
    }
    setIsSubmitting(false);
  };

  return (
    <section style={sectionStyle}>
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>Contact Us</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
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
            style={textareaStyle}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            style={buttonStyle}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {responseMessage && (
          <p style={responseMessageStyle(responseMessage)}>
            {responseMessage}
          </p>
        )}
      </div>
    </section>
  );
};

// Styles for better design and responsiveness
const sectionStyle = {
  padding: '4rem 2rem',
  backgroundColor: '#1c1f26',
  color: '#fff',
  textAlign: 'center',
};

const formContainerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#2a2f38',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
};

const headingStyle = {
  fontSize: '2rem',
  color: '#58a6ff',
  marginBottom: '1rem',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
};

const inputStyle = {
  padding: '0.75rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border 0.3s ease',
};

const textareaStyle = {
  padding: '0.75rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  resize: 'none',
  height: '150px',
  outline: 'none',
  transition: 'border 0.3s ease',
};

const buttonStyle = {
  padding: '0.75rem',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#58a6ff',
  color: '#fff',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const responseMessageStyle = (message) => ({
  marginTop: '1rem',
  fontSize: '1rem',
  color: message.includes('successfully') ? 'green' : 'red',
  fontWeight: 'bold',
});

export default ContactForm;
