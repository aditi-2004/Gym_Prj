// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import './Register.css';

// function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [username, setUsername] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const history = useHistory();

//   const handleRegister = (e) => {
//     e.preventDefault();
    
//     // Check if email is already registered
//     const storedUserEmail = localStorage.getItem(email);
//     if (storedUserEmail) {
//       setErrorMessage('This email is already registered.');
//       return;
//     }

//     // Check if passwords match
//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match.');
//       return;
//     }

//     // Save user data in localStorage
//     const userData = { email, password, username };
//     localStorage.setItem(email, JSON.stringify(userData));

//     history.push('/login');
//   };

//   return (
//     <div className="register-page">
//       <h2>Register</h2>
//       {errorMessage && <div className="error-message">{errorMessage}</div>}
//       <form onSubmit={handleRegister}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//       <p>Already have an account? <Link to="/login">Login</Link></p>
//     </div>
//   );
// }

// export default Register;


// Register.jsx
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (localStorage.getItem(email)) {
      setErrorMessage('This email is already registered.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    const userData = { email, password, username };
    localStorage.setItem(email, JSON.stringify(userData));

    history.push('/login');
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
