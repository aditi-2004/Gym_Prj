
// import React, { useState } from 'react';

// function Support() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('email', email);
//       formData.append('message', message);

//       const response = await fetch('http://localhost/send-email.php', {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Accept': 'application/json',
//         },
//       });

//       // First check if the response can be parsed as JSON
//       let result;
//       const textResponse = await response.text();
//       try {
//         result = JSON.parse(textResponse);
//       } catch (parseError) {
//         console.error('Response parsing error:', textResponse);
//         throw new Error('Invalid server response');
//       }

//       if (result.success) {
//         alert('Your message has been sent!');
//         // Clear form
//         setName('');
//         setEmail('');
//         setMessage('');
//       } else {
//         alert(result.message || 'There was an error sending your message.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Something went wrong, please try again later.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="support">
//       <h1 className="headline">Support Page</h1>
//       <p>We're here to help! Reach out to us for any assistance.</p>

//       <form className="contact-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           name="name"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Your Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           name="email"
//           required
//         />
//         <textarea
//           placeholder="Your Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           name="message"
//           required
//         ></textarea>
//         <button 
//           type="submit"
//           className="btn" 
//           disabled={isLoading}
//         >
//           {isLoading ? 'Sending...' : 'Submit'}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Support;




import React, { useState } from 'react';
import axios from 'axios';

function Support() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const response = await axios.post('/api/support', {
        name,
        email,
        message
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data && response.data.success) {
        setStatus('success');
        alert('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        alert(response.data?.message || 'There was an error sending your message.');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.status === 404) {
        setStatus('error');
        alert(`The requested resource was not found: ${error.response.data?.message || error.message}. Please check the server configuration.`);
      } else if (error.response) {
        setStatus('error');
        alert(`Something went wrong: ${error.response.data?.message || error.message}. Please try again later.`);
      } else if (error.request) {
        setStatus('error');
        alert(`No response received: ${error.message}. Please ensure the server is running.`);
      } else {
        setStatus('error');
        alert(`An unexpected error occurred: ${error.message}.`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="support">
      <h1 className="headline">SUPPORT PAGE</h1>
      <p>We're here to help! Reach out to us for any assistance.</p>

      {status === 'error' && (
        <div className="error-message" style={{ color: 'red', margin: '10px 0' }}>
          There was a problem sending your message. Please try again.
        </div>
      )}
      {status === 'success' && (
        <div className="success-message" style={{ color: 'green', margin: '10px 0' }}>
          Your message has been sent successfully! We'll get back to you soon.
        </div>
      )}

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
          style={{ backgroundColor: isLoading ? '#ccc' : '#007bff', cursor: isLoading ? 'not-allowed' : 'pointer' }}
        >
          {isLoading ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default Support;