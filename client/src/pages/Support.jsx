// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function Support() {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [message, setMessage] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [status, setStatus] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsLoading(true);
// //     setStatus('');

// //     try {
// //       const response = await axios.post('/api/support', {
// //         name,
// //         email,
// //         message
// //       }, {
// //         headers: {
// //           'Content-Type': 'application/json'
// //         }
// //       });

// //       if (response.data && response.data.success) {
// //         setStatus('success');
// //         alert('Your message has been sent successfully!');
// //         setName('');
// //         setEmail('');
// //         setMessage('');
// //       } else {
// //         setStatus('error');
// //         alert(response.data?.message || 'There was an error sending your message.');
// //       }
// //     } catch (error) {
// //       console.error('Error:', error);
// //       setStatus('error');
// //       alert(`Something went wrong: ${error.response?.data?.message || error.message}. Please try again later.`);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="support">
// //       <h1 className="headline">SUPPORT PAGE</h1>
// //       <p>We're here to help! Reach out to us for any assistance.</p>

// //       {status === 'error' && (
// //         <div className="error-message" style={{ color: 'red', margin: '10px 0' }}>
// //           There was a problem sending your message. Please try again.
// //         </div>
// //       )}
// //       {status === 'success' && (
// //         <div className="success-message" style={{ color: 'green', margin: '10px 0' }}>
// //           Your message has been sent successfully! We'll get back to you soon.
// //         </div>
// //       )}

// //       <form className="contact-form" onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="Your Name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           name="name"
// //           required
// //         />
// //         <input
// //           type="email"
// //           placeholder="Your Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           name="email"
// //           required
// //         />
// //         <textarea
// //           placeholder="Your Message"
// //           value={message}
// //           onChange={(e) => setMessage(e.target.value)}
// //           name="message"
// //           required
// //         ></textarea>
// //         <button 
// //           type="submit"
// //           className="btn" 
// //           disabled={isLoading}
// //           style={{ backgroundColor: isLoading ? '#ccc' : '#007bff', cursor: isLoading ? 'not-allowed' : 'pointer' }}
// //         >
// //           {isLoading ? 'Sending...' : 'Submit'}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Support;


// import React, { useState } from 'react';
// import axios from 'axios';

// function Support() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [status, setStatus] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setStatus('');

//     try {
//       const response = await axios.post('/api/support', {
//         name,
//         email,
//         message
//       }, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       if (response.data && response.data.success) {
//         setStatus('success');
//         alert('Your message has been sent successfully!');
//         setName('');
//         setEmail('');
//         setMessage('');
//       } else {
//         setStatus('error');
//         alert(response.data?.message || 'There was an error sending your message.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       if (error.response && error.response.status === 404) {
//         setStatus('error');
//         alert(`The requested resource was not found: ${error.response.data?.message || error.message}. Please check the server configuration.`);
//       } else if (error.response) {
//         setStatus('error');
//         alert(`Something went wrong: ${error.response.data?.message || error.message}. Please try again later.`);
//       } else if (error.request) {
//         setStatus('error');
//         alert(`No response received: ${error.message}. Please ensure the server is running.`);
//       } else {
//         setStatus('error');
//         alert(`An unexpected error occurred: ${error.message}.`);
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="support">
//       <h1 className="headline">SUPPORT PAGE</h1>
//       <p>We're here to help! Reach out to us for any assistance.</p>

//       {status === 'error' && (
//         <div className="error-message" style={{ color: 'red', margin: '10px 0' }}>
//           There was a problem sending your message. Please try again.
//         </div>
//       )}
//       {status === 'success' && (
//         <div className="success-message" style={{ color: 'green', margin: '10px 0' }}>
//           Your message has been sent successfully! We'll get back to you soon.
//         </div>
//       )}

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
//           style={{ backgroundColor: isLoading ? '#ccc' : '#007bff', cursor: isLoading ? 'not-allowed' : 'pointer' }}
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
import './Support.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

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
      <div className="support-header"></div>
      <h1 className="headline">SUPPORT PAGE</h1>
      <p style={{ marginBottom: '20px', color: '#ccc' }}>We're here to help! Reach out to us for any assistance.</p>

      {status === 'error' && (
        <div className="error-message">
          There was a problem sending your message. Please try again.
        </div>
      )}
      {status === 'success' && (
        <div className="success-message">
          Your message has been sent successfully! We'll get back to you soon.
        </div>
      )}

      <div className="support-content">
        <div className="address">
          <h2>Address</h2>
          <p><FaMapMarkerAlt /> FitLife HQ, 123 Fitness Lane, Health City</p>
          <p><FaPhone /> +1-234-567-8900</p>
          <p><FaEnvelope /> info@fitlife.com</p>
          <p><FaGlobe /> www.fitlife.com</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
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

      <div className="social-media">
        <h2>Connect With Us</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <p>© 2025 FitLife. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Support;