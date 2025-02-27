
import React, { useState } from 'react';

function Support() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);

      const response = await fetch('http://localhost/send-email.php', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      // First check if the response can be parsed as JSON
      let result;
      const textResponse = await response.text();
      try {
        result = JSON.parse(textResponse);
      } catch (parseError) {
        console.error('Response parsing error:', textResponse);
        throw new Error('Invalid server response');
      }

      if (result.success) {
        alert('Your message has been sent!');
        // Clear form
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert(result.message || 'There was an error sending your message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong, please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="support">
      <h1 className="headline">Support Page</h1>
      <p>We're here to help! Reach out to us for any assistance.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          required
        ></textarea>
        <button 
          type="submit"
          className="btn" 
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default Support;